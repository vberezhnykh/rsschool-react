import Header from '../components/header';
import SearchInput from '../components/searchInput';
import React, { useEffect, useState } from 'react';
import Cards from '../components/cards';
import Loader from '../components/loader';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { saveValue, savePosts } from '../store/features/searchReducer';

const SERVER_URL = 'https://dummyjson.com/';

const MainPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const searchValue = useAppSelector((state) => state.search.value);
  const posts = useAppSelector((state) => state.search.posts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const data = await fetch(`${SERVER_URL}posts/search?q=${searchValue}&limit=0`);
      if (data.ok) {
        console.log('fetching data...');
        const res = await data.json();
        dispatch(savePosts(res));
        setIsLoading(false);
      }
    };

    fetchData();
  }, [searchValue]);

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') dispatch(saveValue(event.currentTarget.value));
  }

  if (isLoading) return <Loader />;

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
