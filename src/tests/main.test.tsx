import { describe, it, expect, afterEach } from 'vitest';
import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../pages/mainPage';
import AboutPage from '../pages/aboutPage';
import ErrorPage from '../pages/errorPage';
import { mockServer } from './setup';
import FormPage from '../pages/formPage';
import { renderWithProviders } from '../utlis/test-utils';

beforeAll(() => {
  mockServer.listen({ onUnhandledRequest: 'error' });
});

afterEach(() => {
  mockServer.close();
  mockServer.resetHandlers();
});

describe('App', () => {
  it('renders with all routes ', async () => {
    renderWithProviders(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </MemoryRouter>
    );

    const loader = screen.getByRole('heading', { name: 'Loading...' });
    expect(loader).toBeInTheDocument();

    await waitFor(() => {
      expect(loader).not.toBeInTheDocument();
    });

    const navigation = screen.getByRole('navigation');
    const mainPageLink = within(navigation).getByText(/Main/i);
    expect(screen.getByText(/Main Page/i)).toBeInTheDocument();
    expect(mainPageLink).toBeInTheDocument();
    expect(mainPageLink).toHaveAttribute('aria-current', 'page');

    const user = userEvent.setup();

    await user.click(screen.getByText('About'));
    expect(
      screen.getByText('This app is created by Valentin Berezhnykh in 2023.')
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('aria-current', 'page');

    await user.click(screen.getByRole('link', { name: 'Form' }));
    expect(screen.getByRole('link', { name: 'Form' })).toHaveAttribute('aria-current', 'page');
    expect(screen.getByText('Nothing has been sumbitted yet.')).toBeInTheDocument();
  });

  it('renders 404 page', () => {
    const badRoute = '/abracadabra';
    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <Routes>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(/Oops...page not found./i)).toBeInTheDocument();
  });
});
