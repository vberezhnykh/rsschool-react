import React from 'react';
import { ErrorFieldProps } from '../types';

const ErrorField: React.FC<ErrorFieldProps> = (props) => {
  return (
    <span
      className={`${props.errorClassName} ${
        props.formPageState.errorFields.includes(props.errorFieldName ?? '')
          ? `${props.errorClassName}--visible`
          : undefined
      }`}
    >
      {props.errorMessage}
    </span>
  );
};

export default ErrorField;
