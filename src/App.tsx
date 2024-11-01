import './App.css';
import { useEffect, useState } from 'react';
import { fetchQuery } from './api/api';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import toast, { Toaster } from 'react-hot-toast';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
import Loader from './components/Loader/Loader';
import { Image, ModalData } from './types';

const notifyEmptySearch = () =>
  toast('❌ Please, write your`s query', {
    position: 'top-right',
  });
const notifyError = () =>
  toast('❌ Something went wrong! Try again!', {
    position: 'top-right',
  });

function App() {
  const [pictures, setPictures] = useState<Image[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [regularData, setRegularData] = useState<ModalData>();
  const [totalPictures, setTotalPictures] = useState(0);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    const getData = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await fetchQuery(searchQuery, page);
        setPictures(prev => [...prev, ...data.results]);
        setTotalPictures(data.total);
      } catch {
        setIsError(true);
        notifyError();
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [searchQuery, page]);

  function handleSetQuery(searchValue: string): void {
    if (searchValue.trim() === '') {
      notifyEmptySearch();
    }
    setPictures([]);
    setPage(1);
    setSearchQuery(searchValue);
  }

  function handleChangePage(): void {
    setPage(prev => prev + 1);
  }

  function handleOpenModal(data: ModalData) {
    setIsModalOpen(true);
    setRegularData(data);
  }

  function checkLength(): boolean {
    if (isLoading) {
      return false;
    }
    if (!!pictures.length && pictures.length < totalPictures) {
      return true;
    }
    return false;
  }

  return (
    <div>
      <SearchBar onQuery={handleSetQuery} />
      {isError && <ErrorMessage />}
      {!!pictures.length && (
        <ImageGallery request={pictures} openModal={handleOpenModal} />
      )}
      {checkLength() && <LoadMoreBtn onLoad={handleChangePage} />}
      {isLoading && <Loader />}
      {regularData && (
        <ImageModal
          data={regularData}
          modalIsOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
      <Toaster />
    </div>
  );
}

export default App;
