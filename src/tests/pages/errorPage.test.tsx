import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from '../../components/header';
import { BrowserRouter } from 'react-router-dom';
import ErrorPage from '../../pages/errorPage';

describe('Error Page', () => {
  it('renders Header component', () => {
    render(
      <BrowserRouter>
        <Header page="Error Page" />
      </BrowserRouter>
    );
  });

  it('renders not-found image', () => {
    render(
      <BrowserRouter>
        <ErrorPage />
      </BrowserRouter>
    );
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByAltText(/Not found image/i)).toBeInTheDocument();
  });

  it('renders heading', () => {
    render(
      <BrowserRouter>
        <ErrorPage />
      </BrowserRouter>
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByText(/Oops...page not found./i)).toBeInTheDocument();
  });
});
