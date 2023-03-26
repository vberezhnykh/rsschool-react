import React from 'react';
import searchImg from '../assets/search.svg';
import { SearchInputProps } from '../types';

const SearchInput: React.FC<SearchInputProps> = ({ value, onChange }) => {
  return (
    <div className="search-container">
      <img src={searchImg} alt="Image of a magnifying glass." className="search__img" />
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="search__input"
        placeholder="Type here..."
      />
    </div>
  );
};

export default SearchInput;
