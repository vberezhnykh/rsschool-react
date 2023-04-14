import { describe, it, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import Header from '../../components/header';
import { BrowserRouter } from 'react-router-dom';

describe('Header', () => {
  it('renders component on main page', () => {
    render(
      <BrowserRouter>
        <Header page="Main Page" />
      </BrowserRouter>
    );
    const navigation = screen.getByRole('navigation');

    expect(screen.getByText(/Main Page/i)).toBeInTheDocument();
    expect(within(navigation).getByText(/Main/i)).toBeInTheDocument();
    expect(within(navigation).getByText(/About/i)).toBeInTheDocument();
  });

  it('renders component on about page', () => {
    render(
      <BrowserRouter>
        <Header page="About Page" />
      </BrowserRouter>
    );
    const navigation = screen.getByRole('navigation');

    expect(screen.getByText(/About Page/i)).toBeInTheDocument();
    expect(within(navigation).getByText(/Main/i)).toBeInTheDocument();
    expect(within(navigation).getByText(/About/i)).toBeInTheDocument();
  });

  it('renders component on error page', () => {
    render(
      <BrowserRouter>
        <Header page="Error Page" />
      </BrowserRouter>
    );
    const navigation = screen.getByRole('navigation');

    expect(screen.getByText(/Error Page/i)).toBeInTheDocument();
    expect(within(navigation).getByText(/Main/i)).toBeInTheDocument();
    expect(within(navigation).getByText(/About/i)).toBeInTheDocument();
  });
});
