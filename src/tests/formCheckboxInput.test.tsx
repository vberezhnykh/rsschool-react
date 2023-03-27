import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';

describe('FormCheckBoxInput', () => {
  it('renders checkbox input', () => {
    const checkboxAttributes = {
      inputType: 'checkbox',
      inputName: 'name-consent',
      labelText: 'Name',
      inputRef: React.createRef() as React.RefObject<HTMLInputElement>,
    };
    render(<FormCheckboxInput {...checkboxAttributes} />);
    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toHaveAttribute('name', checkboxAttributes.inputName);
    expect(screen.getByLabelText(`${checkboxAttributes.labelText}:`)).toBeInTheDocument();
  });
});
