import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import Cards from '../../components/cards';
import MockPosts from '../../dummy.json';
import { renderWithProviders } from '../../utlis/test-utils';

describe('Cards', () => {
  it('renders component if Posts are passed', async () => {
    renderWithProviders(<Cards posts={MockPosts} />);
    await waitFor(
      () => {
        const cards = screen.getByTestId('cards-list');
        const mockCardsTotal = 30;

        expect(cards).toBeInTheDocument();
        expect(cards.childElementCount).toBe(mockCardsTotal);
      },
      { timeout: 5000 }
    );
  });

  it('renders component with no results found', () => {
    render(<Cards posts={undefined} />);
    expect(screen.getByText(/No results were found for your query.../i));
  });
});
