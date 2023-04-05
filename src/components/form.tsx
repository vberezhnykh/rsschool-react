import React from 'react';
import { FormProps } from '../types';
import FormCheckboxInput from './formCheckboxInput';
import FormFileInput from './formFileInput';
import FormTextAndDateInput from './formInput';
import FormRadioInput from './formRadioInput';
import FormSelect from './formSelect';

class Form extends React.Component<FormProps> {
  constructor(props: FormProps) {
    super(props);
  }

  render(): React.ReactNode {
    const textInputs = [
      {
        inputType: 'text',
        inputName: 'name-input',
        labelText: 'Name',
        inputRef: this.props.refs.nameInput,
        className: 'form__name-input',
        placeholder: 'Enter your name...',
        errorClassName: 'name-error',
        errorMessage: 'Name is invalid',
        errorFieldName: 'nameValid',
        formPageState: this.props.state,
      },
      {
        inputType: 'text',
        inputName: 'surname-input',
        labelText: 'Surname',
        inputRef: this.props.refs.surnameInput,
        className: 'form__surname-input',
        placeholder: 'Enter your surname...',
        errorClassName: 'surname-error',
        errorMessage: 'Surame is invalid',
        errorFieldName: 'surnameValid',
        formPageState: this.props.state,
      },
      {
        inputType: 'date',
        inputName: 'date-of-birth-input',
        labelText: 'Date of Birth',
        inputRef: this.props.refs.dateInput,
        className: 'form__date-input',
        errorClassName: 'date-of-birth-error',
        errorMessage: 'Date of Birth is invalid',
        errorFieldName: 'dateOfBirthValid',
        formPageState: this.props.state,
      },
    ];
    const checkboxes = [
      {
        inputType: 'checkbox',
        inputName: 'name-consent',
        labelText: 'Name',
        inputRef: this.props.refs.nameConsentInput,
      },
      {
        inputType: 'checkbox',
        inputName: 'surname-consent',
        labelText: 'Surname',
        inputRef: this.props.refs.surnameConsentInput,
      },
      {
        inputType: 'checkbox',
        inputName: 'date-of-birth-consent',
        labelText: 'Date of Birth',
        inputRef: this.props.refs.dateOfBirthConsentInput,
      },
      {
        inputType: 'checkbox',
        inputName: 'residence-consent',
        labelText: 'Residence',
        inputRef: this.props.refs.residenceConsentInput,
      },
      {
        inputType: 'checkbox',
        inputName: 'photo-consent',
        labelText: 'Photo',
        inputRef: this.props.refs.fileConsentInput,
      },
      {
        inputType: 'checkbox',
        inputName: 'sex-consent',
        labelText: 'Sex',
        inputRef: this.props.refs.sexConsentInput,
      },
    ];

    return (
      <>
        <form
          onSubmit={this.props.submitHandler}
          className="form"
          ref={this.props.refs.form}
          role="form"
        >
          {textInputs.map((textInput) => (
            <FormTextAndDateInput key={textInput.inputName} {...textInput} />
          ))}
          <FormFileInput
            inputName="file-input"
            accept="image/*"
            inputRef={this.props.refs.fileInput}
            className="form__file-input"
            errorMessage="File is invalid"
            errorFieldName="fileValid"
            errorClassName="file-error"
            formPageState={this.props.state}
            labelClassName="file-label"
          />
          <FormSelect selectRef={this.props.refs.residenceInput} formPageState={this.props.state} />
          <FormRadioInput
            maleInputRef={this.props.refs.maleInput}
            femaleInputRef={this.props.refs.femaleInput}
            formPageState={this.props.state}
          />
          <label className="consent-container">
            <span className="consent-heading">I consent to my personal data:</span>
            {...checkboxes.map((checkbox) => (
              <FormCheckboxInput key={`${checkbox.inputName}`} {...checkbox} />
            ))}
          </label>
          <input type="submit" value="Submit" className="form__submit-btn" />
        </form>
      </>
    );
  }
}

export default Form;
