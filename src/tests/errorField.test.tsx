import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('ErrorField', () => {
  it('renders the error message when the error field name is in the list of error fields', () => {
    const formPageState = {
      errorFields: ['nameValid'],
      cards: [],
      formValid: false,
      nameValid: false,
      surnameValid: true,
      dateOfBirthValid: true,
      residenceValid: true,
      fileValid: true,
      sexValid: true,
    };
    const errorMessage = 'Name is invalid';
    render(
      <ErrorField
        errorClassName="error"
        errorFieldName="nameValid"
        errorMessage={errorMessage}
        formPageState={formPageState}
      />
    );
    expect(screen.getByText(errorMessage)).toBeVisible();
  });

  it('does not render the error message when the error field name is not in the list of error fields', () => {
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
    const errorMessage = 'This field is required';
    render(
      <ErrorField
        errorClassName="error"
        errorFieldName="nameValid"
        errorMessage={errorMessage}
        formPageState={formPageState}
      />
    );
    expect(screen.getByText(errorMessage)).not.toBeVisible;
  });
});
