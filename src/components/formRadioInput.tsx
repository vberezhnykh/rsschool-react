import React from 'react';
import { FormPageState } from '../types';
import ErrorField from './errorField';

type FormRadioInputProps = {
  maleInputRef: React.RefObject<HTMLInputElement>;
  femaleInputRef: React.RefObject<HTMLInputElement>;
  formPageState: FormPageState;
};

class FormRadioInput extends React.Component<FormRadioInputProps> {
  render(): React.ReactNode {
    return (
      <>
        <div className="sex-container">
          <span>Male</span>
          <label className="switcher">
            <input type="radio" ref={this.props.maleInputRef} name="sex-input" value="Male" />
            <input type="radio" ref={this.props.femaleInputRef} name="sex-input" value="Female" />
          </label>
          <span>Female</span>
        </div>
        <ErrorField
          errorClassName="switcher-error"
          errorMessage="Switcher is invalid"
          errorFieldName="sexValid"
          formPageState={this.props.formPageState}
        />
      </>
    );
  }
}

export default FormRadioInput;
