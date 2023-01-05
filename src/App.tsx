import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './layouts/home/Home';
import Quizs from './layouts/quiz/Quizs';
import { GlobalStyle } from './GlobalStyle';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: ':quiz_id',
    element: <Quizs />,
  },
]);

const App: React.FC = () => {
  return (
    <>
      <RouterProvider router={router} />
      <GlobalStyle />
    </>
  );
};

export default App;
