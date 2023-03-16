import React from 'react';
import favoriteImg from '../assets/favorite.svg';

type Post = {
  body: string;
  id: number;
  reactions: number;
  tags: string[];
  title: string;
  userId: number;
};

class Card extends React.Component<Post> {
  constructor(props: Post) {
    super(props);
  }

  getTags(tags: string[]) {
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

  render() {
    return (
      <li className="cards__item">
        <h3 className="card__title">{this.props.title}</h3>
        <p className="card__body">{this.props.body}</p>
        {this.getTags(this.props.tags)}
        <div className="card-reactions">
          <img src={favoriteImg} alt="Favorite image." className="card-reactions__img" />
          <span className="card-reactions__number">{this.props.reactions}</span>
        </div>
      </li>
    );
  }
}

export default Card;
