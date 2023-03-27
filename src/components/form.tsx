import React from 'react';
import { FormProps } from '../types';
import FormCheckboxInput from './formCheckboxInput';
import FormFileInput from './formFileInput';
import FormTextAndDateInput from './formInput';
import FormRadioInput from './formRadioInput';
import FormSelect from './formSelect';

const Form: React.FC<FormProps> = ({ submitHandler, state, refs }) => {
  const textInputs = [
    {
      inputType: 'text',
      inputName: 'name-input',
      labelText: 'Name',
      inputRef: refs.nameInput,
      className: 'form__name-input',
      placeholder: 'Enter your name...',
      errorClassName: 'name-error',
      errorMessage: 'Name is invalid',
      errorFieldName: 'nameValid',
      formPageState: state,
    },
    {
      inputType: 'text',
      inputName: 'surname-input',
      labelText: 'Surname',
      inputRef: refs.surnameInput,
      className: 'form__surname-input',
      placeholder: 'Enter your surname...',
      errorClassName: 'surname-error',
      errorMessage: 'Surame is invalid',
      errorFieldName: 'surnameValid',
      formPageState: state,
    },
    {
      inputType: 'date',
      inputName: 'date-of-birth-input',
      labelText: 'Date of Birth',
      inputRef: refs.dateInput,
      className: 'form__date-input',
      errorClassName: 'date-of-birth-error',
      errorMessage: 'Date of Birth is invalid',
      errorFieldName: 'dateOfBirthValid',
      formPageState: state,
    },
  ];
  const checkboxes = [
    {
      inputType: 'checkbox',
      inputName: 'name-consent',
      labelText: 'Name',
      inputRef: refs.nameConsentInput,
    },
    {
      inputType: 'checkbox',
      inputName: 'surname-consent',
      labelText: 'Surname',
      inputRef: refs.surnameConsentInput,
    },
    {
      inputType: 'checkbox',
      inputName: 'date-of-birth-consent',
      labelText: 'Date of Birth',
      inputRef: refs.dateOfBirthConsentInput,
    },
    {
      inputType: 'checkbox',
      inputName: 'residence-consent',
      labelText: 'Residence',
      inputRef: refs.residenceConsentInput,
    },
    {
      inputType: 'checkbox',
      inputName: 'photo-consent',
      labelText: 'Photo',
      inputRef: refs.fileConsentInput,
    },
    {
      inputType: 'checkbox',
      inputName: 'sex-consent',
      labelText: 'Sex',
      inputRef: refs.sexConsentInput,
    },
  ];

  return (
    <>
      <form onSubmit={submitHandler} className="form" ref={refs.form} role="form">
        {textInputs.map((textInput) => (
          <FormTextAndDateInput key={textInput.inputName} {...textInput} />
        ))}
        <FormFileInput
          inputName="file-input"
          accept="image/*"
          inputRef={refs.fileInput}
          className="form__file-input"
          errorMessage="File is invalid"
          errorFieldName="fileValid"
          errorClassName="file-error"
          formPageState={state}
          labelClassName="file-label"
        />
        <FormSelect selectRef={refs.residenceInput} formPageState={state} />
        <FormRadioInput
          maleInputRef={refs.maleInput}
          femaleInputRef={refs.femaleInput}
          formPageState={state}
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
};

export default Form;
