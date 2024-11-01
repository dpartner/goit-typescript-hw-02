import Modal from 'react-modal';
import s from './ImageModal.module.css'
import { useEffect, useState } from 'react';
import clsx from 'clsx';

Modal.setAppElement('#root');

const ImageModal = ({ data: {url, first_name, last_name, likes}, modalIsOpen, onClose }) => {
  const [widnowTiny, setWindowTiny] = useState(false);

  useEffect(() => {
    if ((window.innerHeight - window.innerWidth) > 0) {
      setWindowTiny(true)
    }
  },[widnowTiny])

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={onClose}
        className={clsx(
          s.modal,
          widnowTiny && s.long,
        )}
        overlayClassName={s.overlay}
      >
        <img className={s.imgModal} src={url} alt="" />
        <div className={s.descWrap}>
          <p>Author name: {first_name} {last_name} </p>
          <p>Likes &#9829;: {likes} </p>
        </div>
      </Modal>
    </>
  )
}

export default ImageModal