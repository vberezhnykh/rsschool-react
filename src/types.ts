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

export type HeaderProps = {
  page: string;
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
