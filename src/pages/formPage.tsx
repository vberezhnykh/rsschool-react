import React from 'react';
import Form from '../components/form';
import FormCards from '../components/formCards';
import Header from '../components/header';
import { CardData, FormPageState as FormPageState } from '../types';

class FormPage extends React.Component<Record<string, unknown>, FormPageState> {
  form: React.RefObject<HTMLFormElement>;
  nameInput: React.RefObject<HTMLInputElement>;
  surnameInput: React.RefObject<HTMLInputElement>;
  dateInput: React.RefObject<HTMLInputElement>;
  residenceInput: React.RefObject<HTMLSelectElement>;
  fileInput: React.RefObject<HTMLInputElement>;
  maleInput: React.RefObject<HTMLInputElement>;
  femaleInput: React.RefObject<HTMLInputElement>;
  nameConsentInput: React.RefObject<HTMLInputElement>;
  surnameConsentInput: React.RefObject<HTMLInputElement>;
  dateOfBirthConsentInput: React.RefObject<HTMLInputElement>;
  residenceConsentInput: React.RefObject<HTMLInputElement>;
  fileConsentInput: React.RefObject<HTMLInputElement>;
  sexConsentInput: React.RefObject<HTMLInputElement>;

  constructor(props: Record<string, unknown>) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.form = React.createRef();
    this.nameInput = React.createRef();
    this.surnameInput = React.createRef();
    this.dateInput = React.createRef();
    this.residenceInput = React.createRef();
    this.fileInput = React.createRef();
    this.maleInput = React.createRef();
    this.femaleInput = React.createRef();
    this.nameConsentInput = React.createRef();
    this.surnameConsentInput = React.createRef();
    this.dateOfBirthConsentInput = React.createRef();
    this.residenceConsentInput = React.createRef();
    this.fileConsentInput = React.createRef();
    this.sexConsentInput = React.createRef();
    const cardsInLocalStorage = localStorage.getItem('cards');
    this.state = {
      cards: cardsInLocalStorage ? JSON.parse(cardsInLocalStorage) : [],
      formValid: false,
      nameValid: false,
      surnameValid: false,
      dateOfBirthValid: false,
      residenceValid: false,
      fileValid: false,
      sexValid: false,
      errorFields: [],
    };
  }

  saveStateToLocalStorage = () => {
    localStorage.setItem('cards', JSON.stringify(this.state.cards));
  };

  componentDidMount(): void {
    window.addEventListener('beforeunload', this.saveStateToLocalStorage);
  }

  componentWillUnmount(): void {
    window.removeEventListener('beforeunload', this.saveStateToLocalStorage);
  }

  handleCardClose = (card: CardData): void => {
    this.setState({
      cards: this.state.cards.filter((cardElement) => cardElement !== card),
    });
  };

  readFileAsync = (file: File) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  handleFileInput = async () => {
    if (!this.fileInput.current?.files || this.fileInput.current.files.length === 0) return '';
    const uploadedFile = this.fileInput.current.files[0];
    const res = await this.readFileAsync(uploadedFile);
    const src = typeof res === 'string' ? res : '';
    return src;
  };

  addCardToState = async () => {
    const imageSrc = await this.handleFileInput();
    this.setState((prevState) => {
      if (
        !this.nameInput.current ||
        !this.surnameInput.current ||
        !this.dateInput.current ||
        !this.residenceInput.current ||
        !this.maleInput.current ||
        !this.femaleInput.current ||
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
            name: this.nameInput.current.value,
            surname: this.surnameInput.current.value,
            dateOfBirth: this.dateInput.current.value,
            residence: this.residenceInput.current.value,
            file: imageSrc,
            sex: this.maleInput.current.checked
              ? this.maleInput.current.value
              : this.femaleInput.current.value,
            nameConsent: this.nameConsentInput.current.checked,
            surnameConsent: this.surnameConsentInput.current.checked,
            dateOfBirthConsent: this.dateOfBirthConsentInput.current.checked,
            residenceConsent: this.residenceConsentInput.current.checked,
            fileConsent: this.fileConsentInput.current.checked,
            sexConsent: this.sexConsentInput.current.checked,
          },
        ],
        formValid: false,
        nameValid: false,
        surnameValid: false,
        dateOfBirthValid: false,
        residenceValid: false,
        fileValid: false,
        sexValid: false,
        errorFields: [],
      };
    });
  };

  checkFormValidation = async () => {
    this.checkNameValidation();
    this.checkSurnameValidation();
    this.checkDateOfBirthValidation();
    this.checkResidenceValidation();
    this.checkFileValidation();
    this.checkSexValidation();
    this.setState((prevState) => {
      return prevState.nameValid &&
        prevState.surnameValid &&
        prevState.dateOfBirthValid &&
        prevState.residenceValid &&
        prevState.fileValid &&
        prevState.sexValid
        ? { formValid: true }
        : { formValid: false };
    });
  };

  checkNameValidation = () => {
    const regex = /^[A-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g;
    this.setState({
      nameValid: regex.test(this.nameInput.current ? this.nameInput.current.value : ''),
    });
  };

  checkSurnameValidation = () => {
    const regex = /^[A-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g;
    this.setState({
      surnameValid: regex.test(this.surnameInput.current ? this.surnameInput.current.value : ''),
    });
  };

  checkDateOfBirthValidation = async () => {
    this.setState({
      dateOfBirthValid: this.dateInput.current?.value !== '' ? true : false,
    });
  };

  checkResidenceValidation = async () => {
    this.setState({
      residenceValid: this.residenceInput.current?.value !== '' ? true : false,
    });
  };

  checkFileValidation = async () => {
    this.setState({
      fileValid: this.fileInput.current?.value !== '' ? true : false,
    });
  };

  checkSexValidation = async () => {
    this.setState({
      sexValid: this.maleInput.current?.checked || this.femaleInput.current?.checked ? true : false,
    });
  };

  private showErrorMessages() {
    this.setState((prevState) => {
      const keys = Object.keys(prevState) as Array<keyof typeof prevState>;
      const filtered = keys.filter(
        (key) => !prevState[key] && key !== 'formValid' && key !== 'cards'
      );
      return { errorFields: [...filtered] };
    });
  }

  async handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await this.checkFormValidation();
    if (this.state.formValid) {
      alert('The form is valid, the card has been created!');
      await this.addCardToState();
      setTimeout(() => this.form.current?.reset(), 0);
    } else this.showErrorMessages();
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
              maleInput: this.maleInput,
              femaleInput: this.femaleInput,
              nameConsentInput: this.nameConsentInput,
              surnameConsentInput: this.surnameConsentInput,
              dateOfBirthConsentInput: this.dateOfBirthConsentInput,
              residenceConsentInput: this.residenceConsentInput,
              fileConsentInput: this.fileConsentInput,
              sexConsentInput: this.sexConsentInput,
              form: this.form,
            }}
          />
          <FormCards cards={this.state.cards} clickHandler={this.handleCardClose} />
        </main>
      </>
    );
  }
}

export default FormPage;
