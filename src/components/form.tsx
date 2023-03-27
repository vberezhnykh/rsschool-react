import { useForm } from 'react-hook-form';
import { FormInputs, NewFormProps } from '../types';

const Form: React.FC<NewFormProps> = ({ submitHandler, formRef }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const regex = /^[A-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g;

  const checkboxes = [
    {
      inputName: 'name-consent',
      labelText: 'Name',
      value: 'name',
    },
    {
      inputName: 'surname-consent',
      labelText: 'Surname',
      value: 'surname',
    },
    {
      inputName: 'date-of-birth-consent',
      labelText: 'Date of Birth',
      value: 'date-of-birth',
    },
    {
      inputName: 'residence-consent',
      labelText: 'Residence',
      value: 'residence',
    },
    {
      inputName: 'photo-consent',
      labelText: 'Photo',
      value: 'photo',
    },
    {
      inputName: 'sex-consent',
      labelText: 'Sex',
      value: 'sex',
    },
  ];

  return (
    <form onSubmit={handleSubmit(submitHandler)} className="form" role="form" ref={formRef}>
      <label>
        Name<span style={{ color: 'red' }}>*</span>:{' '}
        <input
          type="text"
          {...register('name', {
            pattern: { value: regex, message: 'Name is invalid' },
            required: 'Name is required',
          })}
          className={`form__name-input ${errors.name ? 'form__name-input--invalid' : undefined}`}
        />
      </label>
      <span className={'name-error name-error--visible'}>
        {errors.name ? <>{errors.name.message}</> : null}
      </span>
      <label>
        Surname<span style={{ color: 'red' }}>*</span>:{' '}
        <input
          type="text"
          {...register('surname', {
            pattern: { value: regex, message: 'Surname is invalid' },
            required: 'Surname is required',
          })}
          className={`form__surname-input ${
            errors.surname ? 'form__surname-input--invalid' : undefined
          }`}
        />
      </label>
      <span className={'surname-error surname-error--visible'}>
        {errors.surname ? <>{errors.surname.message}</> : null}
      </span>
      <label>
        Date of Birth<span style={{ color: 'red' }}>*</span>:{' '}
        <input
          type="date"
          {...register('dateOfBirth', { required: 'Date of Birth is required' })}
          className={`form__date-input ${
            errors.dateOfBirth ? 'form__date-input--invalid' : undefined
          }`}
        />
      </label>
      <span className={'date-of-birth-error date-of-birth-error--visible'}>
        {errors.dateOfBirth ? <>{errors.dateOfBirth.message}</> : null}
      </span>
      <label className="file-label">
        <input
          type="file"
          accept="image/*"
          className={`form__file-input ${errors.file ? 'form__file-input--invalid' : undefined}`}
          {...register('file', { required: 'Photo is required' })}
        />
        <span style={{ color: 'red' }}>*</span>
      </label>
      <span className={'file-error file-error--visible'}>
        {errors.file ? <>{errors.file.message}</> : null}
      </span>
      <label>
        Residence<span style={{ color: 'red' }}>*</span>:{' '}
        <select
          {...register('residence', { required: 'Residence is required' })}
          className={`form__residence-input ${
            errors.residence ? 'form__residence-input--invalid' : undefined
          }`}
          defaultValue=""
        >
          <option disabled value="">
            select
          </option>
          <option value="Russia">Russia</option>
          <option value="Ukraine">Ukraine</option>
          <option value="Belarus">Belarus</option>
          <option value="Other">Other</option>
        </select>
      </label>
      <span className={'residence-error residence-error--visible'}>
        {errors.residence ? <>{errors.residence.message}</> : null}
      </span>
      <div className="sex-container">
        <span>Male</span>
        <label className="switcher">
          <input type="radio" value="Male" {...register('sex', { required: 'Sex is required' })} />
          <input
            type="radio"
            value="Female"
            {...register('sex', { required: 'Sex is required' })}
          />
        </label>
        <span>Female</span>
      </div>
      <span className={'switcher-error switcher-error--visible'}>
        {errors.sex ? <>{errors.sex.message}</> : null}
      </span>
      <div className="consent-container">
        <span className="consent-heading">I consent to my personal data:</span>
        {...checkboxes.map((checkbox, index) => (
          <label className="consent-checkbox" key={checkbox.inputName + index}>
            {checkbox.labelText}:{' '}
            <input type="checkbox" {...register('consents')} value={checkbox.value}></input>
          </label>
        ))}
      </div>
      <input type="submit" value="Submit" className="form__submit-btn" />
    </form>
  );
};

export default Form;
