import React from 'react';
import { FormInputProps } from '../types';
import ErrorField from './errorField';

class FormTextAndDateInput extends React.Component<FormInputProps> {
  render(): React.ReactNode {
    if (this.props.inputType === 'text' || this.props.inputType === 'date') {
      return (
        <>
          <label>
            {this.props.labelText}
            <span style={{ color: 'red' }}>*</span>:{' '}
            <input
              type={this.props.inputType}
              name={this.props.inputName}
              ref={this.props.inputRef}
              className={this.props.className}
              placeholder={this.props.placeholder}
            />
          </label>
          <ErrorField {...this.props} />
        </>
      );
    }
  }
}

export default FormTextAndDateInput;
