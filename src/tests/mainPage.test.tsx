import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from '../components/header';
import { BrowserRouter } from 'react-router-dom';
import SearchInput from '../components/searchInput';

describe('Main Page', () => {
  it('renders Header component', () => {
    render(
      <BrowserRouter>
        <Header page="Main Page" />
      </BrowserRouter>
    );
  });

  it('renders SearchInput component', () => {
    render(
      <BrowserRouter>
        <SearchInput value="" onChange={() => {}} />
      </BrowserRouter>
    );
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByAltText(/Image of a magnifying glass./i));
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Type here.../i)).toBeInTheDocument();
  });
});