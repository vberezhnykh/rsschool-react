import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import FormCards from '../components/formCards';

describe('FormCards', () => {
  it('renders correctly if there is no cards', () => {
    render(<FormCards cards={[]} clickHandler={() => {}} />);
    expect(screen.getByText('Nothing has been sumbitted yet.')).toBeInTheDocument();
  });

  it('renders form card correctly if card prop exists', () => {
    const cards = [
      {
        name: 'John',
        surname: 'Doe',
        dateOfBirth: '2023-03-26',
        residence: 'Russia',
        file: 'fakepath',
        sex: 'Male',
        nameConsent: true,
        surnameConsent: true,
        dateOfBirthConsent: true,
        residenceConsent: true,
        fileConsent: false,
        sexConsent: false,
      },
    ];
    render(<FormCards cards={cards} clickHandler={() => {}} />);
    const image = screen.getByAltText(`Image of ${cards[0].name} ${cards[0].surname}`);

    expect(screen.getByText(cards[0].name)).toBeInTheDocument();
    expect(screen.getByText(cards[0].surname)).toBeInTheDocument();
    expect(screen.getByText(cards[0].dateOfBirth)).toBeInTheDocument();
    expect(screen.getByText(cards[0].residence)).toBeInTheDocument();
    expect(screen.getByText(cards[0].sex)).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', cards[0].file);
    expect(screen.getAllByText(/(?<=^| )\S+(?= ✓)/).length).toBe(
      Object.values(cards[0]).filter((value) => value === true).length
    );
    expect(screen.getAllByText(/(?<=^| )\S+(?= ✗)/).length).toBe(
      Object.values(cards[0]).filter((value) => value === false).length
    );
  });
});
