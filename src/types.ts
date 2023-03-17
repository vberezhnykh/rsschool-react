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
  nameConsent: boolean;
  surnameConsent: boolean;
  dateOfBirthConsent: boolean;
  residenceConsent: boolean;
  sex: string;
};

export type FormState = {
  cards: CardData[];
};

export type FormCardsProps = {
  cards: CardData[];
  clickHandler: (card: CardData) => void;
};

type FormRefs = {
  nameInput: React.RefObject<HTMLInputElement>;
  surnameInput: React.RefObject<HTMLInputElement>;
  dateInput: React.RefObject<HTMLInputElement>;
  residenceInput: React.RefObject<HTMLSelectElement>;
  nameConsentInput: React.RefObject<HTMLInputElement>;
  surnameConsentInput: React.RefObject<HTMLInputElement>;
  dateOfBirthConsentInput: React.RefObject<HTMLInputElement>;
  residenceConsentInput: React.RefObject<HTMLInputElement>;
  sexInput: React.RefObject<HTMLInputElement>;
};

export type FormProps = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  state: FormState;
  refs: FormRefs;
};
