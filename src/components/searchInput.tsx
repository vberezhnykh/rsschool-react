import React from 'react';
import searchImg from '../assets/search.svg';
import { SearchInputProps } from '../types';
import { useAppSelector } from '../store/hooks';

const SearchInput: React.FC<SearchInputProps> = ({ onKeyDown }) => {
  const searchValue = useAppSelector((state) => state.search.value);

  return (
    <div className="search-container">
      <img src={searchImg} alt="Image of a magnifying glass." className="search__img" />
      <input
        type="text"
        onKeyDown={onKeyDown}
        className="search__input"
        placeholder="Type here..."
        defaultValue={searchValue}
      />
    </div>
  );
};

export default SearchInput;
