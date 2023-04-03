import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Cards from '../components/cards';

describe('Cards', () => {
  it('renders component with empty string value', () => {
    render(<Cards value="" />);
    expect(screen.getByTestId('cards-list')).toBeInTheDocument();
  });

  it('renders component with no results found', () => {
    render(<Cards value="asdasdasdadasd" />);
    expect(screen.getByText(/No results were found for your query.../i));
  });
});
