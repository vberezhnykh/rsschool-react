import React from 'react';
import searchImg from '../assets/search.svg';
import { SearchInputProps } from '../types';

class SearchInput extends React.Component<SearchInputProps> {
  constructor(props: SearchInputProps) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <div className="search-container">
        <img src={searchImg} alt="Image of a magnifying glass." className="search__img" />
        <input
          type="text"
          value={this.props.value}
          onChange={this.props.onChange}
          className="search__input"
          placeholder="Type here..."
        />
      </div>
    );
  }
}

export default SearchInput;
