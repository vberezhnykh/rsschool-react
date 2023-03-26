import React from 'react';
import { FormPageState } from '../types';

type ErrorFieldProps = {
  errorClassName?: string;
  errorMessage?: string;
  errorFieldName?: string;
  formPageState: FormPageState;
};

class ErrorField extends React.Component<ErrorFieldProps> {
  render(): React.ReactNode {
    return (
      <span
        className={`${this.props.errorClassName} ${
          this.props.formPageState.errorFields.includes(this.props.errorFieldName ?? '')
            ? `${this.props.errorClassName}--visible`
            : undefined
        }`}
      >
        {this.props.errorMessage}
      </span>
    );
  }
}

export default ErrorField;
