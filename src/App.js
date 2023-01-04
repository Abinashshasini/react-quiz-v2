import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './layouts/home/Home';
import Quizs from './layouts/quiz/Quizs';
import Header from './components/Header';
import { GlobalStyle } from './GlobalStyle';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'quiz',
    element: <Quizs />,
  },
]);

const App = () => {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
      <GlobalStyle />
    </>
  );
};

export default App;
