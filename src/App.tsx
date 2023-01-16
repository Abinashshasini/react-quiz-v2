import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './layouts/home/Home';
import Quizs from './layouts/quiz/Quizs';
import GameOver from './components/GameOver';
import Error from './layouts/error/ErrorPage';
import { GlobalStyle } from './GlobalStyle';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: ':category/:quiz_id',
    element: <Quizs />,
  },
  {
    path: ':category/:quiz_id/game_over/:score',
    element: <GameOver />,
  },
  {
    path: '*',
    element: <Error />,
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
