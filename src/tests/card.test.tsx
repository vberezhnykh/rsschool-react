import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Card from '../components/card';
import MockPosts from '../dummy.json';

describe('Card', () => {
  it('renders component', () => {
    const post = MockPosts.posts[0];
    render(<Card {...post} />);

    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByAltText(/Favorite image./i)).toBeInTheDocument();
  });
});
