import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Form from '../../components/form';

describe('Form', () => {
  it('renders component correctly', () => {
    const formRef = React.createRef<HTMLFormElement>();
    render(<Form submitHandler={() => {}} formRef={formRef} />);
    expect(screen.getByRole('form')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveValue('Submit');
  });
});
