import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import FormCards from '../../components/formCards';
import { renderWithProviders } from '../../utlis/test-utils';

describe('FormCards', () => {
  it('renders correctly if there is no cards', () => {
    renderWithProviders(<FormCards cards={[]} />);
    expect(screen.getByText('Nothing has been sumbitted yet.')).toBeInTheDocument();
  });

  it('renders form card correctly if card prop exists', () => {
    const cards = [
      {
        name: 'John',
        surname: 'Doe',
        dateOfBirth: '2023-03-26',
        residence: 'Russia',
        fileUrl: 'fakepath',
        sex: 'Male',
        consents: ['name', 'surname'],
        id: '1',
      },
    ];
    renderWithProviders(<FormCards cards={cards} />);
    const image = screen.getByAltText(`Image of ${cards[0].name} ${cards[0].surname}`);
    const INPUTS_WITHOUT_CHECKBOX = 2;
    const FORM_INPUTS_LENGTH = Object.keys(cards[0]).length - INPUTS_WITHOUT_CHECKBOX;

    expect(screen.getByText(cards[0].name)).toBeInTheDocument();
    expect(screen.getByText(cards[0].surname)).toBeInTheDocument();
    expect(screen.getByText(cards[0].dateOfBirth)).toBeInTheDocument();
    expect(screen.getByText(cards[0].residence)).toBeInTheDocument();
    expect(screen.getByText(cards[0].sex)).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', cards[0].fileUrl);
    expect(screen.getAllByText(/(?<=^| )\S+(?= ✓)/).length).toBe(cards[0].consents.length);
    expect(screen.getAllByText(/(?<=^| )\S+(?= ✗)/).length).toBe(
      FORM_INPUTS_LENGTH - cards[0].consents.length
    );
  });
});
