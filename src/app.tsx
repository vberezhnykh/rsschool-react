import MainPage from './pages/mainPage';
import AboutPage from './pages/aboutPage';
import FormPage from './pages/formPage';
import ErrorPage from './pages/errorPage';
import { Route, Routes } from 'react-router';
import './styles/index.scss';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} errorElement={<ErrorPage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}
