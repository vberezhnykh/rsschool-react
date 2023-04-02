import React from 'react';
import searchImg from '../assets/search.svg';
import { SearchInputProps } from '../types';

const SearchInput: React.FC<SearchInputProps> = ({ onKeyDown }) => {
  return (
    <div className="search-container">
      <img src={searchImg} alt="Image of a magnifying glass." className="search__img" />
      <input
        type="text"
        onKeyDown={onKeyDown}
        className="search__input"
        placeholder="Type here..."
        defaultValue={localStorage.getItem('search') ?? ''}
      />
    </div>
  );
};

export default SearchInput;
