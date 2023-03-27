import React from 'react';
import { FormInputProps } from '../types';
import ErrorField from './errorField';

const FormFileInput: React.FC<FormInputProps> = (props) => {
  return (
    <>
      <label className={props.labelClassName}>
        <input
          type="file"
          name={props.inputName}
          accept={props.accept}
          ref={props.inputRef}
          className={`${props.className} ${
            props.inputRef.current?.value ? props.className : undefined
          }`}
        />
        <span style={{ color: 'red' }}>*</span>
      </label>
      <ErrorField {...props} />
    </>
  );
};

export default FormFileInput;
