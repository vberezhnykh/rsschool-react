import React from 'react';
import { FormPageState } from '../types';

type FormTextAndDateInputProps = {
  inputType: string;
  inputName: string;
  labelText?: string;
  labelClassName?: string;
  inputRef: React.RefObject<HTMLInputElement>;
  className: string;
  placeholder?: string;
  errorClassName?: string;
  errorMessage?: string;
  errorFieldName?: string;
  formPageState?: FormPageState;
};

class FormTextAndDateInput extends React.Component<FormTextAndDateInputProps> {
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
          <span
            className={`${this.props.errorClassName} ${
              this.props.formPageState?.errorFields.includes(this.props.errorFieldName ?? '')
                ? `${this.props.errorClassName}--visible`
                : undefined
            }`}
          >
            {this.props.errorMessage}
          </span>
        </>
      );
    }
  }
}

export default FormTextAndDateInput;
