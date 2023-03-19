import React from 'react';
import { FormProps } from '../types';

type FormState = {
  nameValid: boolean;
  surnameValid: boolean;
  dateOfBirthValid: boolean;
  formValid: boolean;
};

class Form extends React.Component<FormProps, FormState> {
  constructor(props: FormProps) {
    super(props);
    this.state = {
      nameValid: false,
      surnameValid: false,
      dateOfBirthValid: false,
      formValid: false,
    };
    this.checkFormValidation = this.checkFormValidation.bind(this);
    this.checkFullNameValidation = this.checkFullNameValidation.bind(this);
    this.checkDateOfBirthValidation = this.checkDateOfBirthValidation.bind(this);
    this.fileInputHandler = this.fileInputHandler.bind(this);
  }

  checkFormValidation() {
    this.setState((prevState) => {
      return prevState.nameValid && prevState.surnameValid && prevState.dateOfBirthValid
        ? { formValid: true }
        : { formValid: false };
    });
  }

  checkFullNameValidation(e: React.ChangeEvent<HTMLInputElement>) {
    const regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g;
    if (e.currentTarget.name === 'name-input') {
      this.setState({
        nameValid: regex.test(e.currentTarget.value),
      });
    } else if (e.currentTarget.name === 'surname-input') {
      this.setState({
        surnameValid: regex.test(e.currentTarget.value),
      });
    }
  }

  checkDateOfBirthValidation(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      dateOfBirthValid: e.currentTarget.value !== '' ? true : false,
    });
  }

  fileInputHandler() {
    // if (e.target.value === '') e.target.classList.add('form__file-input')
    /* if (!e.target.files) return;
    const uploadedFile = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(uploadedFile);
    reader.onload = () => {
      const src = reader.result;
      console.log(src);
    }; */
    // console.log(uploadedFile);
  }

  render(): React.ReactNode {
    return (
      <>
        <form
          onSubmit={(e) => {
            this.props.submitHandler(e);
            this.setState({
              nameValid: false,
              surnameValid: false,
              dateOfBirthValid: false,
              formValid: false,
            });
          }}
          className="form"
          onChange={this.checkFormValidation}
        >
          <div className="fullname-container">
            <label>
              Name:{' '}
              <input
                name="name-input"
                type="text"
                ref={this.props.refs.nameInput}
                className="form__name-input"
                placeholder="Enter your name..."
                onChange={this.checkFullNameValidation}
              />
            </label>
            <label>
              Surname:{' '}
              <input
                name="surname-input"
                type="text"
                ref={this.props.refs.surnameInput}
                className="form__surname-input"
                placeholder="Enter your surname..."
                onChange={this.checkFullNameValidation}
              />
            </label>
          </div>
          <div className="date-and-residence-container">
            <label>
              Date of Birth:{' '}
              <input
                name="date-of-birth-input"
                type="date"
                ref={this.props.refs.dateInput}
                className="form__date-input"
                onChange={this.checkDateOfBirthValidation}
              />
            </label>
            <label>
              Residence:{' '}
              <select
                ref={this.props.refs.residenceInput}
                defaultValue="Russia"
                className="form__residence-input"
              >
                <option value="Russia">Russia</option>
                <option value="Ukraine">Ukraine</option>
                <option value="Belarus">Belarus</option>
                <option value="Other">Other</option>
              </select>
            </label>
            <label>
              <input
                type="file"
                name="file-input"
                accept="image/*"
                className="form__file-input"
                onChange={this.fileInputHandler}
                ref={this.props.refs.fileInput}
              />
            </label>
          </div>
          <label>
            <span className="consent-heading">I consent to my personal data:</span>
            <div className="consent-container">
              <label className="consent-checkbox">
                Name:
                <input type="checkbox" ref={this.props.refs.nameConsentInput} />
              </label>
              <label className="consent-checkbox">
                Surname: <input type="checkbox" ref={this.props.refs.surnameConsentInput} />
              </label>
              <label className="consent-checkbox">
                Date of Birth:{' '}
                <input type="checkbox" ref={this.props.refs.dateOfBirthConsentInput} />
              </label>
              <label className="consent-checkbox">
                Residence: <input type="checkbox" ref={this.props.refs.residenceConsentInput} />
              </label>
              <div className="sex-container">
                <span>Male</span>
                <label className="switcher">
                  <input
                    type="radio"
                    ref={this.props.refs.sexInput}
                    name="sex-input"
                    value="Male"
                    defaultChecked
                  />
                  <input type="radio" name="sex-input" value="Female" />
                </label>
                <span>Female</span>
              </div>
            </div>
          </label>
          <input
            type="submit"
            value="Submit"
            className="form__submit-btn"
            disabled={!this.state.formValid}
          />
        </form>
      </>
    );
  }
}

export default Form;
