import { useState } from 'react';
import Card from './card';
import { CardsProps } from '../types';

const Cards: React.FC<CardsProps> = ({ posts }) => {
  if (posts === null) {
    return <div>Nothing has been loaded...</div>;
  } else if (posts.posts.length === 0) {
    return <div className="cards__item--not-found">No results were found for your query...</div>;
  }

  const [isOpened, setIsOpened] = useState(false);
  const [postId, setPostId] = useState<null | number>(null);

  const overlayClickHandler = () => {
    setIsOpened(!isOpened);
    setPostId(null);
    document.body.style.overflowY = 'auto';
  };

  const cardClickHandler = (e: React.MouseEvent, id: number) => {
    if (!isOpened) {
      setIsOpened(true);
      setPostId(id);
      document.body.style.overflowY = 'hidden';
    } else setPostId(null);
  };

  const cardCloseHandler = () => {
    setIsOpened(false);
    setPostId(null);
    document.body.style.overflowY = 'auto';
  };

  return (
    <div>
      <div
        className={`background-overlay ${isOpened ? 'background-overlay--visible' : undefined}`}
        onClick={overlayClickHandler}
      ></div>
      <Card
        isModal={true}
        post={postId !== null ? posts.posts.find((post) => post.id === postId) : null}
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
