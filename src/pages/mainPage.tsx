import Header from '../components/header';
import SearchInput from '../components/searchInput';
import React from 'react';
import Cards from '../components/cards';
import Loader from '../components/loader';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { saveValue } from '../store/features/searchReducer';
import { useGetPostsQuery } from '../store/features/apiSlice';

const MainPage = () => {
  const searchValue = useAppSelector((state) => state.search.value);
  const dispatch = useAppDispatch();
  const { data: posts, isFetching } = useGetPostsQuery(searchValue);

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
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
