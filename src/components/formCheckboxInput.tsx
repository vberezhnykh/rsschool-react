import React from 'react';

type FormCheckboxInputProps = {
  labelText: string;
  inputName: string;
  inputRef: React.RefObject<HTMLInputElement>;
};

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
