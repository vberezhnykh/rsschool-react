import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import FormPage from '../pages/formPage';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('FormPage', () => {
  it('renders correctly if nothing has been submitted', () => {
    render(
      <BrowserRouter>
        <FormPage />
      </BrowserRouter>
    );
    expect(screen.getByText(/Form Page/i)).toBeInTheDocument();
    expect(screen.getByText(/Nothing has been sumbitted yet./i)).toBeInTheDocument();
  });

  it('shows error messages if the inputs are empty', async () => {
    render(
      <BrowserRouter>
        <FormPage />
      </BrowserRouter>
    );
    const user = userEvent.setup();
    const submitBtn = screen.getByRole('button');

    expect(submitBtn).toBeInTheDocument();
    expect(screen.queryByText('Name is required')).toBeNull();
    expect(screen.queryByText('Surname is required')).toBeNull();
    expect(screen.queryByText('Date of Birth is required')).toBeNull();
    expect(screen.queryByText('Photo is required')).toBeNull();
    expect(screen.queryByText('Residence is required')).toBeNull();
    expect(screen.queryByText('Sex is required')).toBeNull();

    await user.click(submitBtn);
    expect(screen.getByText('Name is required')).toBeVisible();
    expect(screen.getByText('Surname is required')).toBeVisible();
    expect(screen.getByText('Date of Birth is required')).toBeVisible();
    expect(screen.getByText('Photo is required')).toBeVisible();
    expect(screen.getByText('Residence is required')).toBeVisible();
    expect(screen.getByText('Sex is required')).toBeVisible();
  });

  it('does not show an error if a valid name is entered', async () => {
    render(
      <BrowserRouter>
        <FormPage />
      </BrowserRouter>
    );
    const nameInput = screen.getByPlaceholderText('Enter name here...');
    const submitBtn = screen.getByRole('button');

    expect(nameInput).toBeInTheDocument();
    await userEvent.type(nameInput, 'John');
    expect(nameInput).toHaveValue('John');
    await userEvent.click(submitBtn);
    expect(screen.queryByText('Name is required')).toBeNull();
    expect(screen.queryByText('Name is invalid')).toBeNull();
  });

  it('shows an error if the invalid name is entered', async () => {
    render(
      <BrowserRouter>
        <FormPage />
      </BrowserRouter>
    );
    const nameInput = screen.getByPlaceholderText('Enter name here...');
    const submitBtn = screen.getByRole('button');

    expect(nameInput).toBeInTheDocument();
    await userEvent.type(nameInput, 'john');
    await userEvent.click(submitBtn);
    expect(screen.getByText('Name is invalid')).toBeInTheDocument();
  });

  it('does not show an error if a valid surname is entered', async () => {
    render(
      <BrowserRouter>
        <FormPage />
      </BrowserRouter>
    );
    const surnameInput = screen.getByPlaceholderText('Enter surname here...');
    const submitBtn = screen.getByRole('button');

    expect(surnameInput).toBeInTheDocument();
    await userEvent.type(surnameInput, 'Doe');
    expect(surnameInput).toHaveValue('Doe');
    await userEvent.click(submitBtn);
    expect(screen.queryByText('Surname is required')).toBeNull();
    expect(screen.queryByText('Surname is invalid')).toBeNull();
  });

  it('shows an error if the invalid surname is entered', async () => {
    render(
      <BrowserRouter>
        <FormPage />
      </BrowserRouter>
    );
    const surnameInput = screen.getByPlaceholderText('Enter surname here...');
    const submitBtn = screen.getByRole('button');

    expect(surnameInput).toBeInTheDocument();
    await userEvent.type(surnameInput, 'doe');
    await userEvent.click(submitBtn);
    expect(screen.getByText('Surname is invalid')).toBeInTheDocument();
  });

  it('does not show an error if a valid date of birth is entered', async () => {
    render(
      <BrowserRouter>
        <FormPage />
      </BrowserRouter>
    );
    const dateInput = screen.getByRole('datepicker');
    const submitBtn = screen.getByRole('button');

    expect(dateInput).toBeInTheDocument();
    await userEvent.type(dateInput, '2023-03-28');
    expect(dateInput).toHaveValue('2023-03-28');
    await userEvent.click(submitBtn);
    expect(screen.queryByText('Date of Birth is required')).toBeNull();
  });

  it('does not show an error if a photo is uploaded', async () => {
    render(
      <BrowserRouter>
        <FormPage />
      </BrowserRouter>
    );
    const fileInput = screen.getByRole('fileloader');
    const submitBtn = screen.getByRole('button');
    const fakeFile = new File(['fakeFile'], 'fakeFile.png', { type: 'image/png' });

    expect(fileInput).toBeInTheDocument();
    await userEvent.upload(fileInput, fakeFile);
    await userEvent.click(submitBtn);
    expect(screen.queryByText('Photo is required')).toBeNull();
  });

  it('does not show an error if a residence is selected', async () => {
    render(
      <BrowserRouter>
        <FormPage />
      </BrowserRouter>
    );
    const select = screen.getByRole('combobox');
    const submitBtn = screen.getByRole('button');

    expect(select).toBeInTheDocument();
    await userEvent.selectOptions(select, 'Russia');
    await userEvent.click(submitBtn);
    expect(select).toHaveValue('Russia');
    expect(screen.queryByText('Residence is required')).toBeNull();
  });

  it('does not show an error if a sex is selected', async () => {
    render(
      <BrowserRouter>
        <FormPage />
      </BrowserRouter>
    );
    const radioBtns = screen.getAllByRole('radio');
    const submitBtn = screen.getByRole('button');

    radioBtns.forEach(async (radioBtn) => {
      expect(radioBtn).toBeInTheDocument();
      await userEvent.click(radioBtn);
      await userEvent.click(submitBtn);
      expect(screen.queryByText('Sex is required')).toBeNull();
    });
  });

  it('select checkboxes', async () => {
    render(
      <BrowserRouter>
        <FormPage />
      </BrowserRouter>
    );
    const checkboxes = screen.getAllByRole('checkbox');

    checkboxes.forEach(async (checkbox) => {
      expect(checkbox).toBeInTheDocument();
      await userEvent.click(checkbox);
      expect(checkbox).toBeChecked();
    });
  });

  it('correctly create card', async () => {
    render(
      <BrowserRouter>
        <FormPage />
      </BrowserRouter>
    );
    const nameInput = screen.getByPlaceholderText('Enter name here...');
    const surnameInput = screen.getByPlaceholderText('Enter surname here...');
    const dateInput = screen.getByRole('datepicker');
    const fileInput = screen.getByRole('fileloader');
    const fakeFile = new File(['fakeFile'], 'fakeFile.png', { type: 'image/png' });
    global.URL.createObjectURL = vi.fn();
    const select = screen.getByRole('combobox');
    const radioBtns = screen.getAllByRole('radio');
    const checkboxes = screen.getAllByRole('checkbox');
    const submitBtn = screen.getByRole('button');

    await userEvent.type(nameInput, 'John');
    await userEvent.type(surnameInput, 'Doe');
    await userEvent.type(dateInput, '2023-03-28');
    await userEvent.upload(fileInput, fakeFile);
    await userEvent.selectOptions(select, 'Russia');
    await userEvent.click(radioBtns[0]);
    await userEvent.click(checkboxes[0]);
    await userEvent.click(submitBtn);

    const cardList = screen.getByTestId('form-cards');

    expect(screen.queryByText('Nothing has been sumbitted yet.')).toBeNull();
    expect(cardList).toBeInTheDocument();
    expect(cardList.children.length).toBe(1);

    await userEvent.click(screen.getByAltText('Cross'));
    expect(cardList).not.toBeInTheDocument();
    expect(screen.getByText('Nothing has been sumbitted yet.')).toBeInTheDocument();
  });
});
