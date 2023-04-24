import Header from '../components/header';
import SearchInput from '../components/searchInput';
import React, { useState } from 'react';
import Cards from '../components/cards';
import Loader from '../components/loader';
import { useGetPostsQuery } from '../store/features/apiSlice';
import { useAppDispatch } from '../store/hooks';
import { saveValue } from '../store/features/searchReducer';

const MainPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { data: posts, isFetching } = useGetPostsQuery(searchTerm);
  const dispatch = useAppDispatch();

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      setSearchTerm(event.currentTarget.value);
      dispatch(saveValue(event.currentTarget.value));
    }
  }

  if (isFetching) return <Loader />;

  return (
    <>
      <Header page="Main Page"></Header>
      <main className="main">
        <SearchInput onKeyDown={handleKeyDown} />
        <Cards posts={posts} />
      </main>
    </>
  );
};

export default MainPage;
