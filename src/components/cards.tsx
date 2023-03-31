import React from 'react';
import MockPosts from '../dummy.json';
import Card from './card';
import { CardsProps, Post, Posts } from '../types';

class Cards extends React.Component<CardsProps> {
  constructor(props: CardsProps) {
    super(props);
  }

  getFilteredPosts(posts: Posts) {
    return posts.posts.filter(
      (post) =>
        post.body.toLowerCase().includes(this.props.value.toLowerCase()) ||
        post.title.toLowerCase().includes(this.props.value.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(this.props.value.toLowerCase()))
    );
  }

  getListItems = (filteredPosts: Array<Post>) =>
    filteredPosts.map((post) => <Card {...post} key={post.id} />);

  getCards() {
    const filteredPosts = this.getFilteredPosts(MockPosts);
    return filteredPosts.length === 0 ? (
      <div className="cards__item--not-found">No results were found for your query...</div>
    ) : (
      <ul className="cards" data-testid="cards-list">
        {this.getListItems(filteredPosts)}
      </ul>
    );
  }

  render(): React.ReactNode {
    return this.getCards();
  }
}

export default Cards;
