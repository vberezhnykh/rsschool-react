import Card from './card';
import { CardsProps } from '../types';
import Loader from './loader';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { toggleIsOpened, saveId } from '../store/features/modalReducer';
import { useGetPostQuery } from '../store/features/apiSlice';

const Cards: React.FC<CardsProps> = ({ posts }) => {
  if (posts == null || posts.posts.length === 0) {
    return <div className="cards__item--not-found">No results were found for your query...</div>;
  }

  const isOpened = useAppSelector((state) => state.modal.isOpened);
  const id = useAppSelector((state) => state.modal.id);
  const { data: post, isFetching } = useGetPostQuery(id);
  const dispatch = useAppDispatch();

  const overlayClickHandler = () => {
    dispatch(toggleIsOpened());
    document.body.style.overflowY = 'auto';
  };

  const cardClickHandler = (e: React.MouseEvent, id: number) => {
    if (!isOpened && post !== undefined) {
      dispatch(toggleIsOpened());
      dispatch(saveId({ id }));
      document.body.style.overflowY = 'hidden';
    }
  };

  const cardCloseHandler = () => {
    dispatch(toggleIsOpened());
    document.body.style.overflowY = 'auto';
  };

  if (isFetching) return <Loader />;

  return (
    <div>
      <div
        className={`background-overlay ${isOpened ? 'background-overlay--visible' : undefined}`}
        onClick={overlayClickHandler}
      ></div>
      <Card isModal={true} post={isOpened ? post : null} closeHandler={cardCloseHandler} />
      <ul className="cards" data-testid="cards-list">
        {...posts.posts.map((post) => (
          <Card key={post.id} post={post} clickHandler={cardClickHandler} />
        ))}
      </ul>
    </div>
  );
};

export default Cards;
