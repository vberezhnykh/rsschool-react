import MainPage from './pages/mainPage';
import AboutPage from './pages/aboutPage';
import FormPage from './pages/formPage';
import ErrorPage from './pages/errorPage';
import { Route, Routes } from 'react-router';
import './styles/index.scss';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/form" element={<FormPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
