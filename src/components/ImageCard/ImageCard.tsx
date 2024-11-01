import s from './ImageCard.module.css';
import { Image, ModalData } from '../../types';

type Props = {
  image: Image;
  openModal: (arg: ModalData) => void;
};

const ImageCard = ({ image, openModal }: Props) => {
  const {
    urls: { small, regular },
    user: { first_name, last_name },
    description,
    likes,
  } = image;

  //   const {urls,
  // } = images;

  function handleLargeImg(e: React.MouseEvent) {
    e.preventDefault();
    const modalData = {
      url: regular,
      first_name,
      last_name,
      likes,
    };
    openModal(modalData);
  }

  return (
    <>
      <img
        className={s.img}
        onClick={handleLargeImg}
        src={small}
        alt={description}
      />
    </>
  );
};

export default ImageCard;

// {url: {small, regular}, user: {first_name, last_name}, description},
