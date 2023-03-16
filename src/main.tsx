import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import About from './pages/aboutPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './pages/mainPage';
import ErrorPage from './pages/errorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/about',
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />;
  </React.StrictMode>
);
