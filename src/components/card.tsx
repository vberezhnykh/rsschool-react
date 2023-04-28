import React from 'react';
import favoriteImg from '../assets/favorite.svg';
import { CardProps } from '../types/types';
import closeImgSrc from '../assets/close.svg';

const Card: React.FC<CardProps> = ({ post, clickHandler, isModal, closeHandler }) => {
  if (post == null) return null;

  const getTags = (tags: string[]) => {
    return (
      <ul className="card-tags">
        {tags.map((tag, index) => (
          <li className="card-tag__item" key={`${tag}${index}`}>
            {tag}
          </li>
        ))}
      </ul>
    );
  };

  const handleClick = (e: React.MouseEvent) => {
    if (!clickHandler) return;
    clickHandler(e, post.id);
  };

  return (
    <li
      className={`cards__item ${isModal ? 'cards__item--opened' : undefined}`}
      onClick={handleClick}
      data-testid={isModal ? 'modal' : undefined}
    >
      {isModal ? (
        <img
          src={closeImgSrc}
          alt="close-button"
          className="card__close-btn"
          onClick={closeHandler}
        />
      ) : null}
      <h3 className="card__title">{post.title}</h3>
      <p className="card__body">{post.body}</p>
      {getTags(post.tags)}
      <div className="card-reactions">
        <img src={favoriteImg} alt="Favorite image." className="card-reactions__img" />
        <span className="card-reactions__number">{post.reactions}</span>
      </div>
    </li>
  );
};

export default Card;
