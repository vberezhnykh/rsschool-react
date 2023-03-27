import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';

describe('FormRadioInput', () => {
  it('renders form radio input', () => {
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
    const maleInputRef = React.createRef() as React.RefObject<HTMLInputElement>;
    const femaleInputRef = React.createRef() as React.RefObject<HTMLInputElement>;
    render(
      <FormRadioInput
        maleInputRef={maleInputRef}
        femaleInputRef={femaleInputRef}
        formPageState={formPageState}
      />
    );
    const radioButtons = screen.getAllByRole('radio');
    const [maleButton, femaleButton] = radioButtons;

    expect(radioButtons.length).toEqual(2);
    expect(maleButton).toHaveAttribute('value', 'Male');
    expect(femaleButton).toHaveAttribute('value', 'Female');
  });
});
