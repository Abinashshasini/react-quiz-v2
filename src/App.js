import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './layouts/home/Home';
import Quizs from './layouts/quiz/Quizs';
import { GlobalStyle } from './GlobalStyle';

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

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <GlobalStyle />
    </>
  );
};

export default App;
