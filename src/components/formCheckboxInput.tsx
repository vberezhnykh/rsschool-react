import React from 'react';
import { FormCheckboxInputProps } from '../types';

const FormCheckboxInput: React.FC<FormCheckboxInputProps> = ({
  labelText,
  inputName,
  inputRef,
}) => {
  return (
    <label className="consent-checkbox">
      {labelText}: <input type="checkbox" name={inputName} ref={inputRef} />
    </label>
  );
};

export default FormCheckboxInput;
