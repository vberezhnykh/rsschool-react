import React from 'react';
import favoriteImg from '../assets/favorite.svg';
import { Post } from '../types';

const Card: React.FC<Post> = (post) => {
  function getTags(tags: string[]) {
    return (
      <ul className="card-tags">
        {tags.map((tag, index) => (
          <li className="card-tag__item" key={`${tag}${index}`}>
            {tag}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <li className="cards__item">
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
