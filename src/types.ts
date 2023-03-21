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

export type FormState = {
  cards: CardData[];
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
  sexInput: React.RefObject<HTMLInputElement>;
  nameConsentInput: React.RefObject<HTMLInputElement>;
  surnameConsentInput: React.RefObject<HTMLInputElement>;
  dateOfBirthConsentInput: React.RefObject<HTMLInputElement>;
  residenceConsentInput: React.RefObject<HTMLInputElement>;
  fileConsentInput: React.RefObject<HTMLInputElement>;
  sexConsentInput: React.RefObject<HTMLInputElement>;
};

export type FormProps = {
  submitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
  state: FormState;
  refs: FormRefs;
};
