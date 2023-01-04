import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Quizs from './layouts/quiz/Quizs';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Quizs />,
  },
  {
    path: 'quiz',
    element: <div>About</div>,
  },
]);

createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />
);
