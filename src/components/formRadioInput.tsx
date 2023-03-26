import React from 'react';
import { FormPageState } from '../types';

type FormRadioInputProps = {
  maleInputRef: React.RefObject<HTMLInputElement>;
  femaleInputRef: React.RefObject<HTMLInputElement>;
  formPageState?: FormPageState;
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
        <span
          className={`switcher-error ${
            this.props.formPageState?.errorFields.includes('sexValid')
              ? 'switcher-error--visible'
              : undefined
          }`}
        >
          Switcher is invalid.
        </span>
      </>
    );
  }
}

export default FormRadioInput;
