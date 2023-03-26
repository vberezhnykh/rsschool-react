import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import FormSelect from '../components/formSelect';

describe('FormSelect', () => {
  it('renders form select input', () => {
    const formPageState = {
      errorFields: [],
      cards: [],
      formValid: true,
      nameValid: true,
      surnameValid: true,
      dateOfBirthValid: true,
      residenceValid: true,
      fileValid: true,
      sexValid: true,
    };
    render(<FormSelect formPageState={formPageState} selectRef={React.createRef()} />);
    const select = screen.getByRole('combobox');
    const options = screen.getAllByRole('option');
    screen.debug();

    expect(screen.getByLabelText('Residence*:')).toBeInTheDocument();
    expect(select).toBeInTheDocument();
    expect(select).toHaveValue('');
    expect(options.length).toBe(5);
    expect(options.map((option) => (option as HTMLOptionElement).value)).toContain('Russia');
  });
});
