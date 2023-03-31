import Header from '../components/header';
import pageNotFoundImg from '../assets/404.png';

const ErrorPage = () => {
  return (
    <>
      <Header page="Error Page" />
      <main className="main main--flex">
        <img src={pageNotFoundImg} alt="Not found image" className="error-image" />
        <h1>Oops...page not found.</h1>;
      </main>
    </>
  );
};

export default ErrorPage;
