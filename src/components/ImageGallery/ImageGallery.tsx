import ImageCard from '../ImageCard/ImageCard';
import s from './ImageGallery.module.css';
import { Image, ModalData } from '../../types';

type Props = {
  request: Image[];
  openModal: (arg: ModalData) => void;
};

const ImageGallery = ({ request, openModal }: Props) => {
  return (
    <ul className={s.photoList}>
      {request.map((item: Image) => (
        <li className={s.photoItme} key={item.id}>
          <ImageCard image={item} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
