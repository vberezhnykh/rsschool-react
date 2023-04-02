import Header from '../components/header';
import SearchInput from '../components/searchInput';
import React, { useEffect, useState } from 'react';
import { Posts } from '../types';
import Cards from '../components/cards';

const SERVER_URL = 'https://dummyjson.com/';

const MainPage = () => {
  const [value, setValue] = useState(localStorage.getItem('search') ?? '');
  const [posts, setPosts] = useState<null | Posts>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`${SERVER_URL}posts/search?q=${value}&limit=0`);
      if (data.ok && !ignore) {
        console.log('fetching data...');
        const res = await data.json();
        console.log(res);
        setPosts(res);
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
