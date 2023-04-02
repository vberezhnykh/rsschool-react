import Header from '../components/header';
import SearchInput from '../components/searchInput';
import React, { useEffect, useState } from 'react';
import { Posts } from '../types';
import Cards from '../components/cards';
import Loader from '../components/loader';

const SERVER_URL = 'https://dummyjson.com/';

const MainPage = () => {
  const [value, setValue] = useState(localStorage.getItem('search') ?? '');
  const [posts, setPosts] = useState<null | Posts>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const data = await fetch(`${SERVER_URL}posts/search?q=${value}&limit=0`);
      if (data.ok && !ignore) {
        console.log('fetching data...');
        const res = await data.json();
        setTimeout(() => {
          setPosts(res);
          setIsLoading(false);
        }, 400);
      }
    };

    let ignore = false;
    fetchData();
    return () => {
      ignore = true;
      localStorage.setItem('search', value);
    };
  }, [value]);

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      setValue(event.currentTarget.value);
    }
  }

  if (isLoading) return <Loader />;

  return (
    <>
      <Header page="Main Page"></Header>
      <main className="main">
        <SearchInput onKeyDown={handleKeyDown} value={value} />
        <Cards posts={posts} />
      </main>
    </>
  );
};

export default MainPage;
