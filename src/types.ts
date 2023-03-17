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

export type SearchInputEventHandler = (event: React.ChangeEvent<HTMLInputElement>) => void;

export type SearchInputProps = {
  value: string;
  onChange: SearchInputEventHandler;
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
