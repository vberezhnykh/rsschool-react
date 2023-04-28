import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import Header from '../../components/header';
import { BrowserRouter } from 'react-router-dom';
import SearchInput from '../../components/searchInput';
import { renderWithProviders } from '../../utlis/test-utils';
import MainPage from '../../pages/mainPage';
import userEvent from '@testing-library/user-event';

describe('Main Page', () => {
  it('renders Header component', () => {
    render(
      <BrowserRouter>
        <Header page="Main Page" />
      </BrowserRouter>
    );
  });

  it('renders SearchInput component', () => {
    renderWithProviders(
      <BrowserRouter>
        <SearchInput />
      </BrowserRouter>
    );

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByAltText(/Image of a magnifying glass./i));
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Type here.../i)).toBeInTheDocument();
  });

  it('renders component with no results found', async () => {
    renderWithProviders(
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
    );
    const loader = screen.getByRole('heading', { name: 'Loading...' });
    await waitFor(() => {
      expect(loader).not.toBeInTheDocument();
    });

    const input = screen.getByPlaceholderText('Type here...');
    expect(input).toBeInTheDocument();

    const user = userEvent.setup();

    await user.type(input, 'abracadabra');
    expect(input).toHaveValue('abracadabra');

    await user.keyboard('[Enter]');

    const newLoader = screen.getByRole('heading', { name: 'Loading...' });
    await waitFor(() => {
      expect(newLoader).not.toBeInTheDocument();
    });
    expect(screen.getByText(/No results were found for your query.../i));
  });
});
