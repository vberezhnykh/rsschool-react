import React from 'react';
import { FormPageState } from '../types';
import ErrorField from './errorField';

type FormFileInputProps = {
  labelClassName: string;
  inputName: string;
  accept: string;
  inputRef: React.RefObject<HTMLInputElement>;
  className: string;
  errorClassName?: string;
  errorMessage?: string;
  errorFieldName?: string;
  formPageState: FormPageState;
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
        <ErrorField {...this.props} />
      </>
    );
  }
}

export default FormFileInput;
