import React from 'react';
import Form from '../components/form';
import FormCards from '../components/formCards';
import Header from '../components/header';
import { CardData, FormState } from '../types';

class FormPage extends React.Component<Record<string, unknown>, FormState> {
  nameInput: React.RefObject<HTMLInputElement>;
  surnameInput: React.RefObject<HTMLInputElement>;
  dateInput: React.RefObject<HTMLInputElement>;
  residenceInput: React.RefObject<HTMLSelectElement>;
  nameConsentInput: React.RefObject<HTMLInputElement>;
  surnameConsentInput: React.RefObject<HTMLInputElement>;
  dateOfBirthConsentInput: React.RefObject<HTMLInputElement>;
  residenceConsentInput: React.RefObject<HTMLInputElement>;
  sexInput: React.RefObject<HTMLInputElement>;

  constructor(props: Record<string, unknown>) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.nameInput = React.createRef();
    this.surnameInput = React.createRef();
    this.dateInput = React.createRef();
    this.residenceInput = React.createRef();
    this.nameConsentInput = React.createRef();
    this.surnameConsentInput = React.createRef();
    this.dateOfBirthConsentInput = React.createRef();
    this.residenceConsentInput = React.createRef();
    this.sexInput = React.createRef();
    const cardsInLocalStorage = localStorage.getItem('cards');
    this.state = {
      cards: cardsInLocalStorage ? JSON.parse(cardsInLocalStorage) : [],
    };
    this.handleCardClose = this.handleCardClose.bind(this);
    this.saveStateToLocalStorage = this.saveStateToLocalStorage.bind(this);
  }

  saveStateToLocalStorage() {
    localStorage.setItem('cards', JSON.stringify(this.state.cards));
  }

  componentDidMount(): void {
    window.addEventListener('beforeunload', this.saveStateToLocalStorage);
  }

  componentWillUnmount(): void {
    window.removeEventListener('beforeunload', this.saveStateToLocalStorage);
  }

  handleCardClose(card: CardData): void {
    this.setState({
      cards: this.state.cards.filter((cardElement) => cardElement !== card),
    });
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    this.setState((prevState) => {
      if (
        !this.nameInput.current ||
        !this.surnameInput.current ||
        !this.dateInput.current ||
        !this.residenceInput.current ||
        !this.nameConsentInput.current ||
        !this.surnameConsentInput.current ||
        !this.dateOfBirthConsentInput.current ||
        !this.residenceConsentInput.current ||
        !this.sexInput.current
      )
        return;
      return {
        cards: [
          ...prevState.cards,
          {
            name: (this.nameInput.current as HTMLInputElement).value,
            surname: this.surnameInput.current.value,
            dateOfBirth: this.dateInput.current.value,
            residence: this.residenceInput.current.value,
            nameConsent: this.nameConsentInput.current.checked,
            surnameConsent: this.surnameConsentInput.current.checked,
            dateOfBirthConsent: this.dateOfBirthConsentInput.current.checked,
            residenceConsent: this.residenceConsentInput.current.checked,
            sex: this.sexInput.current.checked ? 'female' : 'male',
          },
        ],
      };
    });
  }

  render(): React.ReactNode {
    return (
      <>
        <Header page="Form Page"></Header>
        <main className="main">
          <Form
            onSubmit={this.handleSubmit}
            state={this.state}
            refs={{
              nameInput: this.nameInput,
              surnameInput: this.surnameInput,
              dateInput: this.dateInput,
              residenceInput: this.residenceInput,
              nameConsentInput: this.nameConsentInput,
              surnameConsentInput: this.surnameConsentInput,
              dateOfBirthConsentInput: this.dateOfBirthConsentInput,
              residenceConsentInput: this.residenceConsentInput,
              sexInput: this.sexInput,
            }}
          />
          <FormCards cards={this.state.cards} clickHandler={this.handleCardClose} />
        </main>
      </>
    );
  }
}

export default FormPage;
