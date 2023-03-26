import React from 'react';
import { FormInputProps } from '../types';
import ErrorField from './errorField';

class FormFileInput extends React.Component<FormInputProps> {
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
