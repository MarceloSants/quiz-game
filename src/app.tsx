import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './app.css';
import { HomePage } from './pages/home-page';
import { GameRunSettingsPage } from './pages/game-run-settings-page';
import { QuizPage } from './pages/quiz-page';
import { ResultPage } from './pages/result-page';
import { AnswerReviewPage } from './pages/answer-review-page';

import { QuizProvider } from './lib/quiz-context';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
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
  return (
    <QuizProvider>
      <RouterProvider router={router} />
    </QuizProvider>
  );
}

export default App;
