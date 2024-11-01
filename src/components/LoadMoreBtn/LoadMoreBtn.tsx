import s from './LoadMoreBtn.module.css';

type Props = {
  onLoad: () => void;
};

const LoadMoreBtn = ({ onLoad }: Props) => {
  return (
    <button className={s.loadButton} onClick={onLoad}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
