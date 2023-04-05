import Header from '../components/header';
import rsSchoolLogo from '../assets/rs_school.svg';
import gitHubLogo from '../assets/github-logo.svg';

const AboutPage = () => {
  return (
    <>
      <Header page="About Page" />
      <main className="main main--flex">
        <p className="about-text">This app is created by Valentin Berezhnykh in 2023.</p>
        <div className="icons-container">
          <a
            href="https://rs.school/"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="rs-school-link"
          >
            <img src={rsSchoolLogo} alt="Logo of RS School." className="icons__rsschool" />
          </a>
          <a
            href="https://github.com/vberezhnykh"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="github-link"
          >
            <img src={gitHubLogo} alt="Logo of GitHub." />
          </a>
        </div>
      </main>
    </>
  );
};

export default AboutPage;
