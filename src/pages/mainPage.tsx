import Header from '../components/header';
import SearchInput from '../components/searchInput';
import Cards from '../components/cards';

const MainPage = () => {
  return (
    <>
      <Header page="Main Page"></Header>
      <main className="main">
        <SearchInput />
        <Cards />
      </main>
    </>
  );
};

export default MainPage;
