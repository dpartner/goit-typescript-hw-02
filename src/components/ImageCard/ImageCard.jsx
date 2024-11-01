import s from './ImageCard.module.css'

const ImageCard = ({urls: {small, regular}, user: {first_name, last_name}, description, likes, openModal}) => {

  function handleLargeImg (e) {
    e.preventDefault();
    const modalData = {
      url: regular,
      first_name,
      last_name,
      likes,
    }
    openModal(modalData);
  }

  return (
    <>
      <img className={s.img} onClick={handleLargeImg} src={small} alt={description} />
    </>
  )
}

export default ImageCard

// {url: {small, regular}, user: {first_name, last_name}, description},