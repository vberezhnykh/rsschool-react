import Cards from '../components/cards';
import Header from '../components/header';
import SearchInput from '../components/searchInput';
import React, { useEffect, useState } from 'react';

const MainPage = () => {
  const [value, setValue] = useState(localStorage.getItem('search') ?? '');

  useEffect(() => {
    return () => {
      localStorage.setItem('search', value);
    };
  });

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  return (
    <>
      <Header page="Main Page"></Header>
      <main className="main">
        <SearchInput value={value} onChange={handleInputChange} />
        <Cards value={value} />
      </main>
    </>
  );
};

export default MainPage;
