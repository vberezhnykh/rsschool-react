import Card from './card';
import { CardsProps, Post } from '../types/types';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { toggleIsOpened, saveId } from '../store/features/modalReducer';
import { useState } from 'react';

const Cards: React.FC<CardsProps> = ({ posts }) => {
  if (posts == null || posts.posts.length === 0) {
    return <div className="cards__item--not-found">No results were found for your query...</div>;
  }

  const isOpened = useAppSelector((state) => state.modal.isOpened);
  const [post, setPost] = useState<null | Post>(null);
  const dispatch = useAppDispatch();

  const overlayClickHandler = () => {
    dispatch(toggleIsOpened());
    document.body.style.overflowY = 'auto';
  };

  const cardClickHandler = (e: React.MouseEvent, id: number) => {
    if (!isOpened) {
      dispatch(toggleIsOpened());
      dispatch(saveId({ id }));
      const modalPost = posts.posts.find((post) => post.id === id);
      setPost(modalPost ? modalPost : null);
      document.body.style.overflowY = 'hidden';
    }
  };

  const cardCloseHandler = () => {
    dispatch(toggleIsOpened());
    document.body.style.overflowY = 'auto';
  };

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
