import React from 'react';
import { FormPageState } from '../types';

type FormSelectProps = {
  selectRef: React.RefObject<HTMLSelectElement>;
  formPageState: FormPageState;
};

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
        <span
          className={`residence-error ${
            this.props.formPageState.errorFields.includes('residenceValid')
              ? 'residence-error--visible'
              : undefined
          }`}
        >
          Residence is invalid.
        </span>
      </>
    );
  }
}

export default FormSelect;
