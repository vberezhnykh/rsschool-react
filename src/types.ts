import { SubmitHandler } from 'react-hook-form';

export type Post = {
  body: string;
  id: number;
  reactions: number;
  tags: string[];
  title: string;
  userId: number;
};

export type CardProps = {
  post: Post | null | undefined;
  clickHandler?: (e: React.MouseEvent, id: number) => void;
  closeHandler?: (e: React.MouseEvent) => void;
  isModal?: boolean;
};

export type Posts = {
  posts: Array<Post>;
  total: number;
  skip: number;
  limit: number;
};

export type CardsProps = {
  posts: null | Posts;
};

export type SearchInputProps = {
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
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
  id: string;
};

export type FormCardData = Omit<FormInputs, 'file'> & { fileUrl: string };

export type NewFormCardsProps = {
  cards: Array<FormCardData>;
};

export type NewFormProps = {
  submitHandler: SubmitHandler<FormInputs>;
  formRef: React.RefObject<HTMLFormElement>;
};

export type Character = {
  birth: string;
  death: string;
  gender: string;
  hair: string;
  height: string;
  name: string;
  race: string;
  realm: string;
  spouse: string;
  _id: string;
};

export type MainPageCardsProps = { characters: Character[] | null };
