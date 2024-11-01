import ImageCard from '../ImageCard/ImageCard'
import s from './ImageGallery.module.css'


const ImageGallery = ({request, openModal}) => {
  return (
    <ul className={s.photoList}>
      {request.map(item=> (
        <li className={s.photoItme} key={item.id}>
        <ImageCard {...item} openModal={openModal}/>
      </li>)
      )}
    </ul>
    
  )
}

export default ImageGallery