import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from '../components/header';
import { BrowserRouter } from 'react-router-dom';
import AboutPage from '../pages/aboutPage';

describe('About Page', () => {
  it('renders Header component', () => {
    render(
      <BrowserRouter>
        <Header page="About Page" />
      </BrowserRouter>
    );
  });

  it('renders about text', () => {
    render(
      <BrowserRouter>
        <AboutPage />
      </BrowserRouter>
    );
    expect(screen.getByText(/This app is created by Valentin Berezhnykh in 2023./i));
  });

  it('renders links', () => {
    render(
      <BrowserRouter>
        <AboutPage />
      </BrowserRouter>
    );

    const rsSchoolLink = screen.getByTestId('rs-school-link');
    expect(rsSchoolLink).toBeInTheDocument();
    expect(rsSchoolLink).toHaveAttribute('href', 'https://rs.school/');
    expect(screen.getAllByRole('img'));
    expect(screen.getByAltText(/Logo of RS School./i));
    expect(screen.getByAltText(/Logo of GitHub./i));
    const gitHubLink = screen.getByTestId('github-link');
    expect(gitHubLink).toBeInTheDocument();
    expect(gitHubLink).toHaveAttribute('href', 'https://github.com/vberezhnykh');
  });
});
