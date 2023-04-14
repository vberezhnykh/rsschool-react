import { useState } from 'react';
import Card from './card';
import { CardsProps, Post } from '../types';
import { getPostById } from '../utlis/api';
import Loader from './loader';

const Cards: React.FC<CardsProps> = ({ posts }) => {
  if (posts === null || posts.posts.length === 0) {
    return <div className="cards__item--not-found">No results were found for your query...</div>;
  }

  const [isOpened, setIsOpened] = useState(false);
  const [modalPost, setModalPost] = useState<null | Post>(null);
  const [isLoading, setIsLoading] = useState(false);

  const overlayClickHandler = () => {
    setIsOpened(!isOpened);
    setModalPost(null);
    document.body.style.overflowY = 'auto';
  };

  const cardClickHandler = async (e: React.MouseEvent, id: number) => {
    if (!isOpened) {
      setIsOpened(true);
      setIsLoading(true);
      const post = await getPostById(id);
      setIsLoading(false);
      setModalPost(post);
      document.body.style.overflowY = 'hidden';
    } else setModalPost(null);
  };

  const cardCloseHandler = () => {
    setIsOpened(false);
    setModalPost(null);
    document.body.style.overflowY = 'auto';
  };

  if (isLoading) return <Loader />;

  return (
    <div>
      <div
        className={`background-overlay ${isOpened ? 'background-overlay--visible' : undefined}`}
        onClick={overlayClickHandler}
      ></div>
      <Card
        isModal={true}
        post={modalPost}
        clickHandler={() => {}}
        closeHandler={cardCloseHandler}
      />
      <ul className="cards" data-testid="cards-list">
        {...posts.posts.map((post) => (
          <Card key={post.id} post={post} clickHandler={cardClickHandler} />
        ))}
      </ul>
    </div>
  );
};

export default Cards;
