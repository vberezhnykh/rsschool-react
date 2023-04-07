import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Cards from '../../components/cards';
import MockPosts from '../../dummy.json';
import { renderWithProviders } from '../../utlis/test-utils';

describe('Cards', () => {
  it('renders component if Posts are passed', () => {
    renderWithProviders(<Cards posts={MockPosts} />);
    expect(screen.getByTestId('cards-list')).toBeInTheDocument();
  });

  it('renders component with no results found', () => {
    render(<Cards posts={null} />);
    expect(screen.getByText(/No results were found for your query.../i));
  });
});
