import MainPage from './pages/mainPage';
import AboutPage from './pages/aboutPage';
import FormPage from './pages/formPage';
import ErrorPage from './pages/errorPage';
import { Route, Routes } from 'react-router';
import './styles/index.scss';

export default function App() {
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/close.svg" />
        <link rel="stylesheet" href="/src/styles/index.scss" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>RSSchool</title>
      </head>
      <body>
        <div>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/form" element={<FormPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </body>
    </html>
  );
}
