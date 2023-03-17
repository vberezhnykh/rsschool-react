import React from 'react';
import { FormState } from '../types';

class FormCards extends React.Component<FormState> {
  constructor(props: FormState) {
    super(props);
  }

  render(): React.ReactNode {
    if (this.props.cards.length === 0) {
      return <div>Nothing has been sumbitted yet.</div>;
    }
    const listItems = this.props.cards.map((card, index) => (
      <li key={`form-card-${index}`}>
        <p>Name: {card.name}</p>
        <p>Surname: {card.surname}</p>
        <p>Date of Birth: {card.dateOfBirth}</p>
        <p>Residence: {card.residence}</p>
        <p>Sex: {card.sex}</p>
        <p>Profile Picture: </p>
        <ul>
          Consent:
          <li>Name: {card.nameConsent ? '✓' : '✗'}</li>
          <li>Surname: {card.surnameConsent ? '✓' : '✗'}</li>
          <li>Date of Birth: {card.dateOfBirthConsent ? '✓' : '✗'}</li>
          <li>Residence: {card.residenceConsent ? '✓' : '✗'}</li>
        </ul>
      </li>
    ));
    return <ul>{listItems}</ul>;
  }
}

export default FormCards;
