import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './app.css';
import QuizPage from './pages/quiz-page';
import ResultPage from './pages/result-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <QuizPage />,
  },
  {
    path: '/quiz-result',
    element: <ResultPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
