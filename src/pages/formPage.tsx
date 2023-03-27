import Header from '../components/header';
import Form from '../components/form';
import { SubmitHandler } from 'react-hook-form';
import { useEffect, useState } from 'react';
import React from 'react';
import FormCards from '../components/formCards';
import { FormInputs, FormCardData } from '../types';

const FormPage = () => {
  const formRef = React.createRef<HTMLFormElement>();
  const cardsInLocalStorage = localStorage.getItem('cards');
  const [cards, updateCards] = useState<FormCardData[]>(
    cardsInLocalStorage ? JSON.parse(cardsInLocalStorage) : []
  );

  const saveCardsToLocalStorage = () => localStorage.setItem('cards', JSON.stringify(cards));

  useEffect(() => {
    window.addEventListener('beforeunload', saveCardsToLocalStorage);
    return () => {
      saveCardsToLocalStorage();
      window.removeEventListener('beforeunload', saveCardsToLocalStorage);
    };
  });

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    updateCards([
      ...cards,
      {
        name: data.name,
        surname: data.surname,
        dateOfBirth: data.dateOfBirth,
        fileUrl: URL.createObjectURL(data.file[0]),
        residence: data.residence,
        sex: data.sex,
        consents: data.consents,
      },
    ]);
    formRef.current?.reset();
  };

  const handleCardClose = (card: FormCardData): void => {
    updateCards(cards.filter((cardEl) => cardEl !== card));
  };

  return (
    <>
      <Header page="New Form Page" />
      <main className="main">
        <Form submitHandler={onSubmit} formRef={formRef} />
        <FormCards cards={cards} clickHandler={handleCardClose} />
      </main>
    </>
  );
};

export default FormPage;
