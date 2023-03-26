import React from 'react';
import MockPosts from '../dummy.json';
import Card from './card';
import { CardsProps, Post, Posts } from '../types';

const Cards: React.FC<CardsProps> = ({ value }) => {
  function getFilteredPosts(posts: Posts) {
    return posts.posts.filter(
      (post) =>
        post.body.toLowerCase().includes(value.toLowerCase()) ||
        post.title.toLowerCase().includes(value.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(value.toLowerCase()))
    );
  }

  function getListItems(filteredPosts: Array<Post>) {
    return filteredPosts.map((post) => <Card {...post} key={post.id} />);
  }

  function getCards() {
    const filteredPosts = getFilteredPosts(MockPosts);
    return filteredPosts.length === 0 ? (
      <div className="cards__item--not-found">No results were found for your query...</div>
    ) : (
      <ul className="cards" data-testid="cards-list">
        {getListItems(filteredPosts)}
      </ul>
    );
  }

  return getCards();
};

export default Cards;
