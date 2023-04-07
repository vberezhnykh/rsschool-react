import Header from '../components/header';
import Form from '../components/form';
import { SubmitHandler } from 'react-hook-form';
import React from 'react';
import FormCards from '../components/formCards';
import { FormInputs } from '../types';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { saveCard } from '../store/features/formReducer';
import { v4 as uuidv4 } from 'uuid';

const FormPage = () => {
  const formRef = React.createRef<HTMLFormElement>();
  const cards = useAppSelector((state) => state.form.cards);
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    dispatch(
      saveCard({
        name: data.name,
        surname: data.surname,
        dateOfBirth: data.dateOfBirth,
        fileUrl: URL.createObjectURL(data.file[0]),
        residence: data.residence,
        sex: data.sex,
        consents: data.consents,
        id: uuidv4(),
      })
    );
    formRef.current?.reset();
  };

  return (
    <>
      <Header page="Form Page" />
      <main className="main">
        <Form submitHandler={onSubmit} formRef={formRef} />
        <FormCards cards={cards} />
      </main>
    </>
  );
};

export default FormPage;
