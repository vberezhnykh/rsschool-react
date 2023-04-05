import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import FormTextAndDateInput from '../components/formInput';
import React from 'react';

describe('FormInput', () => {
  it('renders text input', () => {
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
    const textInput = {
      inputType: 'text',
      inputName: 'name-input',
      labelText: 'Name',
      inputRef: React.createRef() as React.RefObject<HTMLInputElement>,
      className: 'form__name-input',
      placeholder: 'Enter your name...',
      errorClassName: 'name-error',
      errorMessage: 'Name is invalid',
      errorFieldName: 'nameValid',
      formPageState: formPageState,
    };

    render(<FormTextAndDateInput {...textInput} />);
    const input = screen.getByRole('textbox');

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('name', textInput.inputName);
    expect(input).toHaveAttribute('placeholder', textInput.placeholder);
  });

  it('renders date input', () => {
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
    const dateInput = {
      inputType: 'date',
      inputName: 'date-of-birth-input',
      labelText: 'Date of Birth',
      inputRef: React.createRef() as React.RefObject<HTMLInputElement>,
      className: 'form__date-input',
      errorClassName: 'date-of-birth-error',
      errorMessage: 'Date of Birth is invalid',
      errorFieldName: 'dateOfBirthValid',
      formPageState: formPageState,
    };

    render(<FormTextAndDateInput {...dateInput} />);
    const input = screen.getByRole('datepicker');

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('name', dateInput.inputName);
  });
});
