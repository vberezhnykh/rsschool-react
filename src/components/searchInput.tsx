import React, { useRef } from 'react';
import searchImg from '../assets/search.svg';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { saveValue } from '../store/features/searchReducer';

const SearchInput = () => {
  const searchValue = useAppSelector((state) => state.search.value);
  const searchRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter' && searchRef.current) {
      dispatch(saveValue(searchRef.current.value));
    }
  }

  return (
    <div className="search-container">
      <img src={searchImg} alt="Image of a magnifying glass." className="search__img" />
      <input
        ref={searchRef}
        type="text"
        onKeyDown={handleKeyDown}
        className="search__input"
        placeholder="Type here..."
        defaultValue={searchValue}
      />
    </div>
  );
};

export default SearchInput;
