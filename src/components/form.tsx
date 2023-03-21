import React from 'react';
import { FormProps } from '../types';

type FormState = {
  nameValid: boolean;
  surnameValid: boolean;
  dateOfBirthValid: boolean;
  formValid: boolean;
  residenceValid: boolean;
  fileValid: boolean;
  errorsFields: string[];
};

class Form extends React.Component<FormProps, FormState> {
  constructor(props: FormProps) {
    super(props);
    this.state = {
      nameValid: false,
      surnameValid: false,
      dateOfBirthValid: false,
      formValid: true,
      residenceValid: false,
      fileValid: false,
      errorsFields: [],
    };
    console.log(this.props.refs.fileInput.current?.value);
    this.checkFormValidation = this.checkFormValidation.bind(this);
    this.checkFullNameValidation = this.checkFullNameValidation.bind(this);
    this.checkDateOfBirthValidation = this.checkDateOfBirthValidation.bind(this);
    this.checkResidenceValidation = this.checkResidenceValidation.bind(this);
    this.checkFileValidation = this.checkFileValidation.bind(this);
  }

  async checkFormValidation() {
    this.setState((prevState) => {
      return prevState.nameValid && prevState.surnameValid && prevState.dateOfBirthValid
        ? { formValid: true }
        : { formValid: false };
    });
  }

  checkFullNameValidation(e: React.ChangeEvent<HTMLInputElement>) {
    const regex = /^[A-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g;
    if (e.currentTarget.name === 'name-input') {
      this.setState({
        nameValid: regex.test(e.currentTarget.value),
      });
    } else if (e.currentTarget.name === 'surname-input') {
      this.setState({
        surnameValid: regex.test(e.currentTarget.value),
      });
    }
    this.checkFormValidation();
  }

  checkDateOfBirthValidation(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      dateOfBirthValid: e.currentTarget.value !== '' ? true : false,
    });
    this.checkFormValidation();
  }

  checkResidenceValidation(e: React.ChangeEvent<HTMLSelectElement>) {
    this.setState({
      residenceValid: e.currentTarget.value !== '' ? true : false,
    });
  }

  checkFileValidation() {
    this.setState({
      fileValid: this.props.refs.fileInput.current?.value !== '' ? true : false,
    });
  }

  render(): React.ReactNode {
    return (
      <>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            await this.checkFormValidation();
            if (this.state.formValid) {
              this.props.submitHandler(e);
              this.setState({
                nameValid: false,
                surnameValid: false,
                dateOfBirthValid: false,
                residenceValid: false,
                formValid: true,
                errorsFields: [],
              });
            } else {
              alert('form not valid');
              this.setState((prevState) => {
                const keys = Object.keys(prevState) as Array<keyof typeof prevState>;
                const filtered = keys.filter((key) => !prevState[key] && key !== 'formValid');
                return { errorsFields: [...filtered] };
              });
            }
          }}
          className="form"
        >
          <label>
            Name<span style={{ color: 'red' }}>*</span>:{' '}
            <input
              name="name-input"
              type="text"
              ref={this.props.refs.nameInput}
              className="form__name-input"
              placeholder="Enter your name..."
              onChange={this.checkFullNameValidation}
            />
          </label>
          <span
            className={`name-error ${(() =>
              this.state.errorsFields.includes('nameValid')
                ? 'name-error--visible'
                : undefined)()}`}
          >
            Name is invalid
          </span>
          <label>
            Surname<span style={{ color: 'red' }}>*</span>:{' '}
            <input
              name="surname-input"
              type="text"
              ref={this.props.refs.surnameInput}
              className="form__surname-input"
              placeholder="Enter your surname..."
              onChange={this.checkFullNameValidation}
            />
          </label>
          <span
            className={`surname-error ${(() =>
              this.state.errorsFields.includes('surnameValid')
                ? 'surname-error--visible'
                : undefined)()}`}
          >
            Surname is invalid
          </span>
          <label>
            Date of Birth<span style={{ color: 'red' }}>*</span>:{' '}
            <input
              name="date-of-birth-input"
              type="date"
              ref={this.props.refs.dateInput}
              className="form__date-input"
              onChange={this.checkDateOfBirthValidation}
            />
          </label>
          <span
            className={`date-of-birth-error ${(() =>
              this.state.errorsFields.includes('dateOfBirthValid')
                ? 'date-of-birth-error--visible'
                : undefined)()}`}
          >
            Date of Birth is invalid
          </span>
          <label>
            Residence<span style={{ color: 'red' }}>*</span>:{' '}
            <select
              ref={this.props.refs.residenceInput}
              className="form__residence-input"
              onChange={this.checkResidenceValidation}
              defaultValue=""
            >
              <option disabled value="">
                select
              </option>
              <option value="Russia">Russia</option>
              <option value="Ukraine">Ukraine</option>
              <option value="Belarus">Belarus</option>
              <option value="Other">Other</option>
            </select>
          </label>
          <span
            className={`residence-error ${(() =>
              this.state.errorsFields.includes('residenceValid')
                ? 'residence-error--visible'
                : undefined)()}`}
          >
            Residence is invalid.
          </span>
          <label className="file-label">
            <input
              type="file"
              name="file-input"
              accept="image/*"
              className={`form__file-input ${(() =>
                this.props.refs.fileInput.current?.value
                  ? 'form__file-input--loaded'
                  : undefined)()}`}
              ref={this.props.refs.fileInput}
              onChange={this.checkFileValidation}
            />
            <span style={{ color: 'red' }}>*</span>
          </label>
          <span
            className={`file-error ${(() =>
              this.state.errorsFields.includes('fileValid')
                ? 'file-error--visible'
                : undefined)()}`}
          >
            File is invalid.
          </span>
          <div className="sex-container">
            <span>Male</span>
            <label className="switcher">
              <input type="radio" ref={this.props.refs.sexInput} name="sex-input" value="Male" />
              <input type="radio" name="sex-input" value="Female" />
            </label>
            <span>Female</span>
          </div>
          <span>Switcher is invalid.</span>
          <label className="consent-container">
            <span className="consent-heading">I consent to my personal data:</span>
            <label className="consent-checkbox">
              Name:
              <input type="checkbox" ref={this.props.refs.nameConsentInput} />
            </label>
            <label className="consent-checkbox">
              Surname: <input type="checkbox" ref={this.props.refs.surnameConsentInput} />
            </label>
            <label className="consent-checkbox">
              Date of Birth: <input type="checkbox" ref={this.props.refs.dateOfBirthConsentInput} />
            </label>
            <label className="consent-checkbox">
              Residence: <input type="checkbox" ref={this.props.refs.residenceConsentInput} />
            </label>
            <label className="consent-checkbox">
              Photo: <input type="checkbox" ref={this.props.refs.fileConsentInput} />
            </label>
            <label className="consent-checkbox">
              Sex: <input type="checkbox" ref={this.props.refs.sexConsentInput} />
            </label>
          </label>
          <input type="submit" value="Submit" className="form__submit-btn" />
        </form>
      </>
    );
  }
}

export default Form;
