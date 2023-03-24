import React from 'react';
import { FormProps } from '../types';

class Form extends React.Component<FormProps> {
  constructor(props: FormProps) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <>
        <form onSubmit={this.props.submitHandler} className="form" ref={this.props.refs.form}>
          <label>
            Name<span style={{ color: 'red' }}>*</span>:{' '}
            <input
              name="name-input"
              type="text"
              ref={this.props.refs.nameInput}
              className="form__name-input"
              placeholder="Enter your name..."
            />
          </label>
          <span
            className={`name-error ${
              this.props.state.errorFields.includes('nameValid') ? 'name-error--visible' : undefined
            }`}
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
            />
          </label>
          <span
            className={`surname-error ${
              this.props.state.errorFields.includes('surnameValid')
                ? 'surname-error--visible'
                : undefined
            }`}
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
            />
          </label>
          <span
            className={`date-of-birth-error ${
              this.props.state.errorFields.includes('dateOfBirthValid')
                ? 'date-of-birth-error--visible'
                : undefined
            }`}
          >
            Date of Birth is invalid
          </span>
          <label>
            Residence<span style={{ color: 'red' }}>*</span>:{' '}
            <select
              ref={this.props.refs.residenceInput}
              className="form__residence-input"
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
            className={`residence-error ${
              this.props.state.errorFields.includes('residenceValid')
                ? 'residence-error--visible'
                : undefined
            }`}
          >
            Residence is invalid.
          </span>
          <label className="file-label">
            <input
              type="file"
              name="file-input"
              accept="image/*"
              className={`form__file-input ${
                this.props.refs.fileInput.current?.value ? 'form__file-input--loaded' : undefined
              }`}
              ref={this.props.refs.fileInput}
            />
            <span style={{ color: 'red' }}>*</span>
          </label>
          <span
            className={`file-error ${
              this.props.state.errorFields.includes('fileValid') ? 'file-error--visible' : undefined
            }`}
          >
            File is invalid.
          </span>
          <div className="sex-container">
            <span>Male</span>
            <label className="switcher">
              <input type="radio" ref={this.props.refs.maleInput} name="sex-input" value="Male" />
              <input
                type="radio"
                ref={this.props.refs.femaleInput}
                name="sex-input"
                value="Female"
              />
            </label>
            <span>Female</span>
          </div>
          <span
            className={`switcher-error ${
              this.props.state.errorFields.includes('sexValid')
                ? 'switcher-error--visible'
                : undefined
            }`}
          >
            Switcher is invalid.
          </span>
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
