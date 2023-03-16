import Cards from '../components/cards';
import Header from '../components/header';
import SearchInput from '../components/input';
import React from 'react';
import { MainState } from '../types';

class Main extends React.Component<Record<string, never>, MainState> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = { value: localStorage.getItem('search') ?? '' };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: event.target.value });
  }

  componentWillUnmount(): void {
    localStorage.setItem('search', this.state.value);
  }

  render() {
    return (
      <>
        <Header page="Main Page"></Header>
        <main className="main">
          <SearchInput value={this.state.value} onChange={this.handleInputChange} />
          <Cards value={this.state.value} />
        </main>
      </>
    );
  }
}

export default Main;
