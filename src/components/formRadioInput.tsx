import React from 'react';
import { FormRadioInputProps } from '../types';
import ErrorField from './errorField';

const FormRadioInput: React.FC<FormRadioInputProps> = ({
  maleInputRef,
  femaleInputRef,
  formPageState,
}) => {
  return (
    <>
      <div className="sex-container">
        <span>Male</span>
        <label className="switcher">
          <input type="radio" ref={maleInputRef} name="sex-input" value="Male" />
          <input type="radio" ref={femaleInputRef} name="sex-input" value="Female" />
        </label>
        <span>Female</span>
      </div>
      <ErrorField
        errorClassName="switcher-error"
        errorMessage="Switcher is invalid"
        errorFieldName="sexValid"
        formPageState={formPageState}
      />
    </>
  );
};

export default FormRadioInput;
