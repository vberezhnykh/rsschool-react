import React from 'react';
import { FormCheckboxInputProps } from '../types';

class FormCheckboxInput extends React.Component<FormCheckboxInputProps> {
  render(): React.ReactNode {
    return (
      <label className="consent-checkbox">
        {this.props.labelText}:{' '}
        <input type="checkbox" name={this.props.inputName} ref={this.props.inputRef} />
      </label>
    );
  }
}

export default FormCheckboxInput;
