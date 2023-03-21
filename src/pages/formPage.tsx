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
  fileInput: React.RefObject<HTMLInputElement>;
  sexInput: React.RefObject<HTMLInputElement>;
  nameConsentInput: React.RefObject<HTMLInputElement>;
  surnameConsentInput: React.RefObject<HTMLInputElement>;
  dateOfBirthConsentInput: React.RefObject<HTMLInputElement>;
  residenceConsentInput: React.RefObject<HTMLInputElement>;
  fileConsentInput: React.RefObject<HTMLInputElement>;
  sexConsentInput: React.RefObject<HTMLInputElement>;

  constructor(props: Record<string, unknown>) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.nameInput = React.createRef();
    this.surnameInput = React.createRef();
    this.dateInput = React.createRef();
    this.residenceInput = React.createRef();
    this.fileInput = React.createRef();
    this.sexInput = React.createRef();
    this.nameConsentInput = React.createRef();
    this.surnameConsentInput = React.createRef();
    this.dateOfBirthConsentInput = React.createRef();
    this.residenceConsentInput = React.createRef();
    this.fileConsentInput = React.createRef();
    this.sexConsentInput = React.createRef();
    const cardsInLocalStorage = localStorage.getItem('cards');
    this.state = {
      cards: cardsInLocalStorage ? JSON.parse(cardsInLocalStorage) : [],
    };
    this.handleCardClose = this.handleCardClose.bind(this);
    this.saveStateToLocalStorage = this.saveStateToLocalStorage.bind(this);
    this.resetInput = this.resetInput.bind(this);
    this.handleFileInput = this.handleFileInput.bind(this);
    this.readFileAsync = this.readFileAsync.bind(this);
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

  resetInput() {
    if (this.nameInput.current) this.nameInput.current.value = '';
    if (this.surnameInput.current) this.surnameInput.current.value = '';
    if (this.dateInput.current) this.dateInput.current.value = '';
    if (this.residenceInput.current) this.residenceInput.current.value = '';
    if (this.fileInput.current) this.fileInput.current.value = '';
    if (this.sexInput.current) this.sexInput.current.value = '';
    if (this.nameConsentInput.current) this.nameConsentInput.current.checked = false;
    if (this.surnameConsentInput.current) this.surnameConsentInput.current.checked = false;
    if (this.dateOfBirthConsentInput.current) this.dateOfBirthConsentInput.current.checked = false;
    if (this.residenceConsentInput.current) this.residenceConsentInput.current.checked = false;
    if (this.fileConsentInput.current) this.fileConsentInput.current.checked = false;
    if (this.sexConsentInput.current) this.sexConsentInput.current.checked = false;
  }

  readFileAsync(file: File) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  async handleFileInput() {
    if (!this.fileInput.current?.files || this.fileInput.current.files.length === 0) return '';
    const uploadedFile = this.fileInput.current.files[0];
    const res = await this.readFileAsync(uploadedFile);
    const src = typeof res === 'string' ? res : '';
    return src;
  }

  async handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const imageSrc = await this.handleFileInput();
    this.setState((prevState) => {
      if (
        !this.nameInput.current ||
        !this.surnameInput.current ||
        !this.dateInput.current ||
        !this.residenceInput.current ||
        !this.sexInput.current ||
        !this.nameConsentInput.current ||
        !this.surnameConsentInput.current ||
        !this.dateOfBirthConsentInput.current ||
        !this.residenceConsentInput.current ||
        !this.fileConsentInput.current ||
        !this.sexConsentInput.current
      )
        return prevState;
      return {
        cards: [
          ...prevState.cards,
          {
            name: (this.nameInput.current as HTMLInputElement).value,
            surname: this.surnameInput.current.value,
            dateOfBirth: this.dateInput.current.value,
            residence: this.residenceInput.current.value,
            file: imageSrc,
            sex: this.sexInput.current.checked ? 'Male' : 'Female',
            nameConsent: this.nameConsentInput.current.checked,
            surnameConsent: this.surnameConsentInput.current.checked,
            dateOfBirthConsent: this.dateOfBirthConsentInput.current.checked,
            residenceConsent: this.residenceConsentInput.current.checked,
            fileConsent: this.fileConsentInput.current.checked,
            sexConsent: this.sexConsentInput.current.checked,
          },
        ],
        isFileLoaded: imageSrc !== '' ? true : false,
      };
    });
    setTimeout(this.resetInput, 0);
  }

  render(): React.ReactNode {
    return (
      <>
        <Header page="Form Page"></Header>
        <main className="main">
          <Form
            submitHandler={this.handleSubmit}
            state={this.state}
            refs={{
              nameInput: this.nameInput,
              surnameInput: this.surnameInput,
              dateInput: this.dateInput,
              residenceInput: this.residenceInput,
              fileInput: this.fileInput,
              sexInput: this.sexInput,
              nameConsentInput: this.nameConsentInput,
              surnameConsentInput: this.surnameConsentInput,
              dateOfBirthConsentInput: this.dateOfBirthConsentInput,
              residenceConsentInput: this.residenceConsentInput,
              fileConsentInput: this.fileConsentInput,
              sexConsentInput: this.sexConsentInput,
            }}
          />
          <FormCards cards={this.state.cards} clickHandler={this.handleCardClose} />
        </main>
      </>
    );
  }
}

export default FormPage;
