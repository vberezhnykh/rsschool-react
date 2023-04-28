import Card from './card';
import { Post } from '../types/types';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { toggleIsOpened, saveId } from '../store/features/modalReducer';
import { useEffect, useState } from 'react';
import Loader from './loader';
import { useGetPostsQuery } from '../store/features/apiSlice';

const Cards = () => {
  const searchValue = useAppSelector((state) => state.search.value);
  const [inputValue, setInputValue] = useState('');
  const { data: posts, isFetching } = useGetPostsQuery(inputValue);
  const isOpened = useAppSelector((state) => state.modal.isOpened);
  const [post, setPost] = useState<null | Post>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setInputValue(searchValue);
  }, [searchValue]);

  if (isFetching) return <Loader />;

  if (posts == null || posts.posts.length === 0) {
    return <div className="cards__item--not-found">No results were found for your query...</div>;
  }

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
        data-testid="background-overlay"
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
