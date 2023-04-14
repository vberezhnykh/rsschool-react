import loaderSrc from '../assets/loader.svg';

const Loader = () => {
  return (
    <div className="loader">
      <h2>Loading...</h2>
      <img src={loaderSrc} alt="" />
    </div>
  );
};

export default Loader;
