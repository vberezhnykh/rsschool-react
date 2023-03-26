import React from 'react';
import { FormSelectProps } from '../types';
import ErrorField from './errorField';

class FormSelect extends React.Component<FormSelectProps> {
  render(): React.ReactNode {
    return (
      <>
        <label>
          Residence<span style={{ color: 'red' }}>*</span>:{' '}
          <select ref={this.props.selectRef} className="form__residence-input" defaultValue="">
            <option disabled value="">
              select
            </option>
            <option value="Russia">Russia</option>
            <option value="Ukraine">Ukraine</option>
            <option value="Belarus">Belarus</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <ErrorField
          errorClassName="residence-error"
          errorMessage="Residence is invalid"
          errorFieldName="residenceValid"
          formPageState={this.props.formPageState}
        />
      </>
    );
  }
}

export default FormSelect;
