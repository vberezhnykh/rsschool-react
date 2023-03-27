import React from 'react';
import { FormInputProps } from '../types';
import ErrorField from './errorField';

const FormTextAndDateInput: React.FC<FormInputProps> = (props) => {
  return (
    <>
      <label>
        {props.labelText}
        <span style={{ color: 'red' }}>*</span>:{' '}
        <input
          type={props.inputType}
          name={props.inputName}
          ref={props.inputRef}
          className={props.className}
          placeholder={props.placeholder}
          role={props.inputType === 'date' ? 'datepicker' : 'textbox'}
        />
      </label>
      <ErrorField {...props} />
    </>
  );
};

export default FormTextAndDateInput;
