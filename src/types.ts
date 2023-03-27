import { SubmitHandler } from 'react-hook-form';

export type Post = {
  body: string;
  id: number;
  reactions: number;
  tags: string[];
  title: string;
  userId: number;
};

export type Posts = {
  posts: Array<Post>;
  total: number;
  skip: number;
  limit: number;
};

export type CardsProps = {
  value: string;
};

export type SearchInputProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type MainState = {
  value: string;
};

export type HeaderProps = {
  page: string;
};

export type CardData = {
  name: string;
  surname: string;
  dateOfBirth: string;
  residence: string;
  file: string;
  sex: string;
  nameConsent: boolean;
  surnameConsent: boolean;
  dateOfBirthConsent: boolean;
  residenceConsent: boolean;
  fileConsent: boolean;
  sexConsent: boolean;
};

export type FormPageState = {
  cards: CardData[];
  formValid: boolean;
  nameValid: boolean;
  surnameValid: boolean;
  dateOfBirthValid: boolean;
  residenceValid: boolean;
  fileValid: boolean;
  sexValid: boolean;
  errorFields: string[];
};

export type FormCardsProps = {
  cards: CardData[];
  clickHandler: (card: CardData) => void;
};

export type FormRefs = {
  nameInput: React.RefObject<HTMLInputElement>;
  surnameInput: React.RefObject<HTMLInputElement>;
  dateInput: React.RefObject<HTMLInputElement>;
  residenceInput: React.RefObject<HTMLSelectElement>;
  fileInput: React.RefObject<HTMLInputElement>;
  maleInput: React.RefObject<HTMLInputElement>;
  femaleInput: React.RefObject<HTMLInputElement>;
  nameConsentInput: React.RefObject<HTMLInputElement>;
  surnameConsentInput: React.RefObject<HTMLInputElement>;
  dateOfBirthConsentInput: React.RefObject<HTMLInputElement>;
  residenceConsentInput: React.RefObject<HTMLInputElement>;
  fileConsentInput: React.RefObject<HTMLInputElement>;
  sexConsentInput: React.RefObject<HTMLInputElement>;
  form: React.RefObject<HTMLFormElement>;
};

export type FormProps = {
  submitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
  state: FormPageState;
  refs: FormRefs;
};

export type ErrorFieldProps = {
  errorClassName?: string;
  errorMessage?: string;
  errorFieldName?: string;
  formPageState: FormPageState;
};

export interface FormInputProps extends ErrorFieldProps {
  inputType?: string;
  inputName: string;
  labelText?: string;
  labelClassName?: string;
  inputRef: React.RefObject<HTMLInputElement>;
  className: string;
  placeholder?: string;
  accept?: string;
}

export type FormSelectProps = {
  selectRef: React.RefObject<HTMLSelectElement>;
  formPageState: FormPageState;
};

export type FormRadioInputProps = {
  maleInputRef: React.RefObject<HTMLInputElement>;
  femaleInputRef: React.RefObject<HTMLInputElement>;
  formPageState: FormPageState;
};

export type FormCheckboxInputProps = {
  labelText: string;
  inputName: string;
  inputRef: React.RefObject<HTMLInputElement>;
};

export type FormInputs = {
  name: string;
  surname: string;
  dateOfBirth: string;
  file: FileList;
  residence: string;
  sex: string;
  consents: string[];
};

export type FormCardData = Omit<FormInputs, 'file'> & { fileUrl: string };

export type NewFormCardsProps = {
  cards: Array<FormCardData>;
  clickHandler: (card: FormCardData) => void;
};

export type NewFormProps = {
  submitHandler: SubmitHandler<FormInputs>;
  formRef: React.RefObject<HTMLFormElement>;
};
