import { describe, it, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../pages/mainPage';
import AboutPage from '../pages/aboutPage';
import ErrorPage from '../pages/errorPage';

describe('App', () => {
  it('renders with all routes ', async () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </MemoryRouter>
    );

    const navigation = screen.getByRole('navigation');
    const mainPageLink = within(navigation).getByText(/Main/i);
    const user = userEvent.setup();

    expect(screen.getByText(/Main Page/i)).toBeInTheDocument();
    expect(mainPageLink).toBeInTheDocument();
    expect(mainPageLink).toHaveAttribute('aria-current', 'page');

    await user.click(screen.getByText('About'));
    expect(
      screen.getByText('This app is created by Valentin Berezhnykh in 2023.')
    ).toBeInTheDocument();
    expect(screen.getByText('About')).toHaveAttribute('aria-current', 'page');
  });

  it('renders 404 page', () => {
    const badRoute = '/abracadabra';
    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(/Oops...page not found./i)).toBeInTheDocument();
  });
});
