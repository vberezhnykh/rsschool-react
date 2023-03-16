import React from 'react';
import FormCard from '../components/formCard';
import Header from '../components/header';

type FormState = {
  name: string;
  surname: string;
  dateOfBirth: string;
  residence: string;
  nameConsent: boolean;
  surnameConsent: boolean;
  dateOfBirthConsent: boolean;
  residenceConsent: boolean;
  sex: string;
};

class Form extends React.Component<Record<string, unknown>, FormState> {
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
    this.state = {
      name: '',
      surname: '',
      dateOfBirth: '',
      residence: '',
      nameConsent: false,
      surnameConsent: false,
      dateOfBirthConsent: false,
      residenceConsent: false,
      sex: 'male',
    };
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
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
    e.preventDefault();
    this.setState({
      name: this.nameInput.current.value,
      surname: this.surnameInput.current.value,
      dateOfBirth: this.dateInput.current.value,
      residence: this.residenceInput.current.value,
      nameConsent: this.nameConsentInput.current.checked,
      surnameConsent: this.surnameConsentInput.current.checked,
      dateOfBirthConsent: this.dateOfBirthConsentInput.current.checked,
      residenceConsent: this.residenceConsentInput.current.checked,
      sex: this.sexInput.current.checked ? 'female' : 'male',
    });
  }

  render(): React.ReactNode {
    return (
      <>
        <Header page="Form Page"></Header>
        <main className="main">
          <form onSubmit={this.handleSubmit}>
            <label>
              Name: <input type="text" ref={this.nameInput} defaultValue="Valentin" />
            </label>
            <label>
              Surname: <input type="text" ref={this.surnameInput} defaultValue="Berezhnykh" />
            </label>
            <label>
              Date of Birth: <input type="date" ref={this.dateInput} defaultValue="1996-09-01" />
            </label>
            <label>
              Residence:
              <select ref={this.residenceInput} defaultValue="Russia">
                <option value="Russia">Russia</option>
                <option value="Ukraine">Ukraine</option>
                <option value="Belarus">Belarus</option>
                <option value="Other">Other</option>
              </select>
            </label>
            <label>
              I consent to my personal data:
              <label>
                Name:
                <input type="checkbox" ref={this.nameConsentInput} />
              </label>
              <label>
                Surname:
                <input type="checkbox" ref={this.surnameConsentInput} />
              </label>
              <label>
                Date of Birth:
                <input type="checkbox" ref={this.dateOfBirthConsentInput} />
              </label>
              <label>
                Residence:
                <input type="checkbox" ref={this.residenceConsentInput} />
              </label>
              <label className="switcher">
                Sex:
                <input type="checkbox" ref={this.sexInput} />
                <span className="slider"></span>
              </label>
            </label>
            <input type="submit" value="Submit" />
          </form>
          <div>Cards:</div>
          <FormCard {...this.state} />
        </main>
      </>
    );
  }
}

export default Form;
