import s from './LoadMoreBtn.module.css'

const LoadMoreBtn = ({onLoad}) => {
  return (
    <button className={s.loadButton} onClick={onLoad}>Load more</button>
  )
}

export default LoadMoreBtn