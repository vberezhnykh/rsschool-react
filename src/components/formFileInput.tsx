import React from 'react';
import { FormPageState } from '../types';

type FormFileInputProps = {
  labelClassName: string;
  inputName: string;
  accept: string;
  inputRef: React.RefObject<HTMLInputElement>;
  className: string;
  errorClassName?: string;
  errorMessage?: string;
  errorFieldName?: string;
  formPageState?: FormPageState;
};

class FormFileInput extends React.Component<FormFileInputProps> {
  render(): React.ReactNode {
    return (
      <>
        <label className={this.props.labelClassName}>
          <input
            type="file"
            name={this.props.inputName}
            accept={this.props.accept}
            ref={this.props.inputRef}
            className={`${this.props.className} ${
              this.props.inputRef.current?.value ? this.props.className + '--loaded' : undefined
            }`}
          />
          <span style={{ color: 'red' }}>*</span>
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

export default FormFileInput;
