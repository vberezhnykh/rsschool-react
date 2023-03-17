import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import AboutPage from './pages/aboutPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './pages/mainPage';
import ErrorPage from './pages/errorPage';
import FormPage from './pages/formPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
  { path: '/form', element: <FormPage /> },
  {
    path: '/about',
    element: <AboutPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
