import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Header } from '../components/header';
import { QuizOption } from '../quiz-page/components/quiz-option';

// import { questions } from '../../mocks/questions';
import { AnswerOption, QuestionTheme } from '../../types/types';
import { questionThemes } from '../../lib/question-themes';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useQuiz } from '../../lib/quiz-context';

function AnswerReviewPage() {
  const navigate = useNavigate();
  const { questions } = useQuiz();

  const state = useLocation().state;
  const answers: number[] = state?.answers ?? [-1, -1, -1, -1, -1, -1, -1, -1];

  const [currentQuestion, SetCurrentQuestion] = useState(
    state?.questionIndex ?? 0
  );

  const [selectedAnswer, SetSelectedAnswer] = useState(
    answers[state?.questionIndex] !== -1
      ? answers[state?.questionIndex]
      : questions[currentQuestion].options.length
  );

  const handleFinishReview = () => {
    navigate('/quiz-result', { state: { answers: answers } });
  };

  const handlePreviousQuestion = () => {
    let previousQuestionIndex = questions.length - 1;
    if (currentQuestion > 0) {
      previousQuestionIndex = currentQuestion - 1;
    }

    setQuestion(previousQuestionIndex);
  };

  const handleNextQuestion = () => {
    let nextQuestionIndex = 0;
    if (currentQuestion < questions.length - 1) {
      nextQuestionIndex = currentQuestion + 1;
    }

    setQuestion(nextQuestionIndex);
  };

  const setQuestion = (index: number) => {
    SetCurrentQuestion(index);
    const answerFixed = getAnswerFixed(index);
    SetSelectedAnswer(answerFixed);
  };

  const getAnswerFixed = (index: number) => {
    if (answers[index] !== -1) {
      return answers[index];
    } else {
      return questions[currentQuestion].options.length;
    }
  };

  const getQuestionTheme = (code: string) => {
    let currentTheme: QuestionTheme | undefined;
    questionThemes.forEach((theme) => {
      if (theme.code == code) {
        currentTheme = theme;
      }
    });
    return currentTheme;
  };

  const currentQuestionTheme = getQuestionTheme(
    questions[currentQuestion].theme
  );

  return (
    <div className='w-full flex flex-col items-center justify-start relative'>
      <Header>
        <p>Answer Review</p>
      </Header>
      <div className='bg-white w-2/4 h-max p-8 rounded-sm absolute top-20 shadow-cardShadow'>
        <div className='flex gap-4 items-center'>
          <button
            onClick={() => {
              handlePreviousQuestion();
            }}
            className='text-white px-1 py-4 bg-blue-400 rounded-md hover:bg-blue-500'
          >
            <ChevronLeft />
          </button>
          <div className='flex flex-col gap-4 sm:gap-2 lg:gap-6 xl:gap-8 2xl:gap-12'>
            <div className='flex flex-col px-4 gap-2'>
              <div className='flex items-center justify-between'>
                <p className='text-gray-400'>{`Question ${
                  currentQuestion + 1
                } (${questions.length} remaining)`}</p>
                <div className='flex gap-1'>
                  {currentQuestionTheme ? (
                    <div
                      className={`${currentQuestionTheme.color} rounded-md px-2`}
                    >
                      <p className='text-white text-sm font-semibold'>
                        {currentQuestionTheme.name}
                      </p>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <h1 className='text-gray-500 text-2xl leading-7'>
                {questions[currentQuestion].question}
              </h1>
            </div>
            <div className='flex flex-col gap-1'>
              <div className='text-gray-400 px-4'>
                <p>Answer options</p>
              </div>
              <div>
                {questions[currentQuestion].options.map(
                  (answer: AnswerOption) => {
                    return (
                      <QuizOption
                        key={answer.id}
                        index={answer.id}
                        isAnswerConfirmed={true}
                        rightAnswer={questions[currentQuestion].correctAnswer}
                        selectedAnswer={selectedAnswer}
                        answer={answer.text}
                        handleAnswerSelect={() => {}}
                      />
                    );
                  }
                )}
                <QuizOption
                  index={questions[currentQuestion].options.length}
                  isAnswerConfirmed={true}
                  rightAnswer={questions[currentQuestion].correctAnswer}
                  selectedAnswer={selectedAnswer}
                  answer={'None'}
                  handleAnswerSelect={() => {}}
                />
              </div>
            </div>
            <div className='flex gap-4 items-end justify-center'>
              <button
                onClick={() => {
                  handleFinishReview();
                }}
                className='flex-1 py-2 border-2 rounded-lg border-blue-400 text-blue-400 font-medium'
              >
                Finish Review
              </button>
            </div>
          </div>
          <button
            onClick={() => {
              handleNextQuestion();
            }}
            className='text-white px-1 py-4 bg-blue-400 rounded-md hover:bg-blue-500'
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export { AnswerReviewPage };
