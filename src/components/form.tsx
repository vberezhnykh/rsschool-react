import React from 'react';
import { FormProps } from '../types';

class Form extends React.Component<FormProps> {
  constructor(props: FormProps) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <>
        <form onSubmit={this.props.onSubmit} className="form">
          <div className="fullname-container">
            <label>
              Name:{' '}
              <input
                type="text"
                ref={this.props.refs.nameInput}
                className="form__name-input"
                placeholder="Enter your name..."
              />
            </label>
            <label>
              Surname:{' '}
              <input
                type="text"
                ref={this.props.refs.surnameInput}
                className="form__surname-input"
                placeholder="Enter your surname..."
              />
            </label>
          </div>
          <div className="date-and-residence-container">
            <label>
              Date of Birth:{' '}
              <input type="date" ref={this.props.refs.dateInput} className="form__date-input" />
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
                  <input type="checkbox" ref={this.props.refs.sexInput} />
                  <span className="slider"></span>
                </label>
                <span>Female</span>
              </div>
            </div>
          </label>
          <input type="submit" value="Submit" className="form__submit-btn" />
        </form>
      </>
    );
  }
}

export default Form;
