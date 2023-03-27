import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import FormPage from '../pages/formPage';
import { BrowserRouter } from 'react-router-dom';

describe('FormPage', () => {
  it('renders correctly', () => {
    render(
      <BrowserRouter>
        <FormPage />
      </BrowserRouter>
    );
    expect(screen.getByText(/Form Page/i)).toBeInTheDocument();
    expect(screen.getByText(/Nothing has been sumbitted yet./i)).toBeInTheDocument();
  });
});
