import { useState } from 'react';
import Card from './card';
import { CardsProps } from '../types';
import { getPostById } from '../utlis/api';
import Loader from './loader';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { saveModalPost, toggleIsOpened } from '../store/features/modalReducer';

const Cards: React.FC<CardsProps> = ({ posts }) => {
  if (posts === null || posts.posts.length === 0) {
    return <div className="cards__item--not-found">No results were found for your query...</div>;
  }

  const [isLoading, setIsLoading] = useState(false);
  const isOpened = useAppSelector((state) => state.modal.isOpened);
  const modalPost = useAppSelector((state) => state.modal.post);
  const dispatch = useAppDispatch();

  const overlayClickHandler = () => {
    dispatch(toggleIsOpened());
    dispatch(saveModalPost(null));
    document.body.style.overflowY = 'auto';
  };

  const cardClickHandler = async (e: React.MouseEvent, id: number) => {
    if (!isOpened) {
      dispatch(toggleIsOpened());
      setIsLoading(true);
      const post = await getPostById(id);
      setIsLoading(false);
      dispatch(saveModalPost(post));
      document.body.style.overflowY = 'hidden';
    } else dispatch(saveModalPost(null));
  };

  const cardCloseHandler = () => {
    dispatch(toggleIsOpened());
    dispatch(saveModalPost(null));
    document.body.style.overflowY = 'auto';
  };

  if (isLoading) return <Loader />;

  return (
    <div>
      <div
        className={`background-overlay ${isOpened ? 'background-overlay--visible' : undefined}`}
        onClick={overlayClickHandler}
      ></div>
      <Card isModal={true} post={modalPost} closeHandler={cardCloseHandler} />
      <ul className="cards" data-testid="cards-list">
        {...posts.posts.map((post) => (
          <Card key={post.id} post={post} clickHandler={cardClickHandler} />
        ))}
      </ul>
    </div>
  );
};

export default Cards;
