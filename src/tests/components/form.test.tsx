import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Form from '../../components/form';

describe('Form', () => {
  it('renders component correctly', () => {
    const formState = {
      cards: [],
      formValid: false,
      nameValid: false,
      surnameValid: false,
      dateOfBirthValid: false,
      residenceValid: false,
      fileValid: false,
      sexValid: false,
      errorFields: [],
    };
    const refs = {
      nameInput: React.createRef() as React.RefObject<HTMLInputElement>,
      surnameInput: React.createRef() as React.RefObject<HTMLInputElement>,
      dateInput: React.createRef() as React.RefObject<HTMLInputElement>,
      residenceInput: React.createRef() as React.RefObject<HTMLSelectElement>,
      fileInput: React.createRef() as React.RefObject<HTMLInputElement>,
      maleInput: React.createRef() as React.RefObject<HTMLInputElement>,
      femaleInput: React.createRef() as React.RefObject<HTMLInputElement>,
      nameConsentInput: React.createRef() as React.RefObject<HTMLInputElement>,
      surnameConsentInput: React.createRef() as React.RefObject<HTMLInputElement>,
      dateOfBirthConsentInput: React.createRef() as React.RefObject<HTMLInputElement>,
      residenceConsentInput: React.createRef() as React.RefObject<HTMLInputElement>,
      fileConsentInput: React.createRef() as React.RefObject<HTMLInputElement>,
      sexConsentInput: React.createRef() as React.RefObject<HTMLInputElement>,
      form: React.createRef() as React.RefObject<HTMLFormElement>,
    };
    render(<Form submitHandler={() => {}} state={formState} refs={refs} />);
    expect(screen.getByRole('form')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveValue('Submit');
  });
});
