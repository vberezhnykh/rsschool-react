import { describe, it, expect } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import Cards from '../../components/cards';
import { renderWithProviders } from '../../utlis/test-utils';

describe('Cards', () => {
  it('renders component', async () => {
    renderWithProviders(<Cards />);
    await waitFor(
      () => {
        const cards = screen.getByTestId('cards-list');
        const mockCardsTotal = 150;

        expect(cards).toBeInTheDocument();
        expect(cards.childElementCount).toBe(mockCardsTotal);
      },
      { timeout: 5000 }
    );
  });
});
