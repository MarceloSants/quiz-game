import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './app.css';
import QuizPage from './pages/quiz-page';
import ResultPage from './pages/result-page';
import { AnswerReviewPage } from './pages/answer-review-page';
import { GameRunSettingsPage } from './pages/game-run-settings-page';

const router = createBrowserRouter([
  {
    path: '/quiz',
    element: <QuizPage />,
  },
  {
    path: '/game-setting',
    element: <GameRunSettingsPage />,
  },
  {
    path: '/quiz-result',
    element: <ResultPage />,
  },
  {
    path: '/answer-review',
    element: <AnswerReviewPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
