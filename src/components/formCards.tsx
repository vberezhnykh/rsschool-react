import React from 'react';
import { FormCardsProps } from '../types';
import closeImgSrc from '../assets/close.svg';

class FormCards extends React.Component<FormCardsProps> {
  constructor(props: FormCardsProps) {
    super(props);
  }

  componentWillUnmount(): void {
    localStorage.setItem('cards', JSON.stringify(this.props.cards));
  }

  render(): React.ReactNode {
    if (this.props.cards.length === 0) {
      return <div className="form-cards--not-found">Nothing has been sumbitted yet.</div>;
    }
    const listItems = this.props.cards.map((card, index) => (
      <li key={`form-card-${index}`} className="form-cards__item">
        <img
          src={closeImgSrc}
          alt="Cross"
          className="form-cards__close-img"
          onClick={() => this.props.clickHandler(this.props.cards[index])}
        />
        <div className="card-info-image-container">
          <div className="card-info-container">
            <p className="form-cards__name">
              <span>Name:</span> {card.name}
            </p>
            <p>
              <span>Surname:</span> {card.surname}
            </p>
            <p>
              <span>Date of Birth:</span> {card.dateOfBirth}
            </p>
            <p>
              <span>Residence:</span> {card.residence}
            </p>
            <p>
              <span>Sex:</span> {card.sex}
            </p>
            <ul className="consent-list">
              <span>Consent:</span>

              <li>Name: {card.nameConsent ? '✓' : '✗'}</li>
              <li>Surname: {card.surnameConsent ? '✓' : '✗'}</li>
              <li>Date of Birth: {card.dateOfBirthConsent ? '✓' : '✗'}</li>
              <li>Residence: {card.residenceConsent ? '✓' : '✗'}</li>
              <li>Photo: {card.fileConsent ? '✓' : '✗'}</li>
              <li>Sex: {card.sexConsent ? '✓' : '✗'}</li>
            </ul>
          </div>
          <img
            src={card.file}
            alt={`Image of ${card.name} ${card.surname}`}
            className="form-cards__image"
          />
        </div>
      </li>
    ));
    return <ul className="form-cards">{listItems}</ul>;
  }
}

export default FormCards;
