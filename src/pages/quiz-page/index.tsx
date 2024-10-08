import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Check, X } from 'lucide-react';

import { QuizOption } from './components/quiz-option';
import { Timer } from './components/timer';
import { Header } from '../components/header';

// import { questionThemes } from '../../mocks/question-themes';
import { AnswerOption } from '../../types/types';
import { useQuiz } from '../../lib/quiz-context';

interface QuizPageLocationState {
  totalTime: number;
}

function QuizPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { questions } = useQuiz();
  const quizPageLocationState: QuizPageLocationState = location?.state;

  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [time, SetTime] = useState(0);

  const [answers, setAnswers] = useState<number[]>(
    Array.from({ length: questions.length }, () => -1)
  );

  const [skippedQuestions, setSkippedQuestions] = useState<number[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState(-1);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isAnswerConfirmed, setIsAnswerConfirmed] = useState(false);
  const [hasSeenAllQuestions, setHasSeenAllQuestions] = useState(false);

  const handleAnswerSelect = (index: number) => {
    if (isAnswerConfirmed) {
      return;
    }
    if (index == selectedAnswer) {
      return;
    }
    setSelectedAnswer(index);
  };

  const confirmAnswer = () => {
    if (selectedAnswer == -1) {
      return;
    }

    if (selectedAnswer == questions[currentQuestion].correctAnswer) {
      setCorrectAnswers(correctAnswers + 1);
    } else {
      setWrongAnswers(wrongAnswers + 1);
    }

    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedAnswer;
    setAnswers(newAnswers);
    setIsAnswerConfirmed(true);
  };

  const handleSkipQuestion = () => {
    setSkippedQuestions((prev) => [...prev, currentQuestion]);
    handleNextQuestion();
  };

  const handleNextQuestion = () => {
    if (hasSeenAllQuestions === false) {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        resetAnwserSelection();
      } else {
        setHasSeenAllQuestions(true);
        checkForSkippedQuestions();
      }
    } else {
      checkForSkippedQuestions();
    }
  };

  const checkForSkippedQuestions = () => {
    if (skippedQuestions.length > 0) {
      setCurrentQuestion(skippedQuestions[0]);

      setSkippedQuestions((prev) => {
        const newSkippedQuestionArray = [...prev];
        newSkippedQuestionArray.splice(0, 1);
        return newSkippedQuestionArray;
      });

      resetAnwserSelection();
    } else {
      handleGameFinish();
    }
  };

  const resetAnwserSelection = () => {
    setIsAnswerConfirmed(false);
    setSelectedAnswer(-1);
  };

  const handleTimeOver = () => {
    console.log('timer over');
    handleGameFinish();
  };

  const setTimer = (time: number) => {
    SetTime(time);
  };

  const timeLeft = quizPageLocationState.totalTime - time;

  const handleGameFinish = () => {
    navigate('/quiz-result', {
      state: { timeLeft, answers },
    });
  };

  console.log(questions[currentQuestion].theme);
  console.log(questions);

  return (
    <div className='w-full flex flex-col items-center justify-start relative'>
      <Header>
        <div className='flex gap-8'>
          <div className='flex items-center gap-2'>
            <Check />
            <div className='flex items-baseline gap-2'>
              <p className='font-semibold'>{correctAnswers}</p>
              <p className='text-sm'>CORRECT</p>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <X />
            <div className='flex items-baseline gap-2'>
              <p className='font-semibold'>{wrongAnswers}</p>
              <p className='text-sm'>WRONG</p>
            </div>
          </div>
        </div>
        <Timer
          totalDuration={quizPageLocationState.totalTime}
          handleTimeOver={handleTimeOver}
          setTimer={setTimer}
        />
      </Header>
      <div className='bg-white w-2/4 h-max min-h-[50vh] flex flex-col justify-between p-8 rounded-sm absolute top-20 shadow-cardShadow'>
        <div className='flex flex-col gap-4 sm:gap-2 lg:gap-6 xl:gap-8 2xl:gap-12'>
          <div className='flex flex-col px-4 gap-2'>
            <div className='flex items-center justify-between'>
              <p className='text-gray-400'>{`Question ${currentQuestion + 1} (${
                questions.length
              } remaining)`}</p>
              <div className='flex gap-1'>
                {questions[currentQuestion].theme ? (
                  <div
                    style={{
                      backgroundColor: questions[currentQuestion].theme.color,
                    }}
                    className={'rounded-md px-2'}
                  >
                    <p className='text-white text-sm font-semibold'>
                      {questions[currentQuestion].theme.name}
                    </p>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <h1 className='text-gray-500 text-2xl leading-7'>
              {questions[currentQuestion].title}
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
                      isAnswerConfirmed={isAnswerConfirmed}
                      rightAnswer={questions[currentQuestion].correctAnswer}
                      selectedAnswer={selectedAnswer}
                      answer={answer.text}
                      handleAnswerSelect={handleAnswerSelect}
                    />
                  );
                }
              )}
            </div>
          </div>
        </div>
        <div className='flex gap-4 items-end justify-center'>
          {!isAnswerConfirmed ? (
            <>
              <button
                onClick={() => {
                  handleSkipQuestion();
                }}
                className='flex-1 py-2 border-2 rounded-lg border-blue-400 text-blue-400 font-medium'
              >
                Skip
              </button>
              <div className='flex flex-1 flex-col items-center'>
                {hasSeenAllQuestions && (
                  <button
                    onClick={() => {
                      handleGameFinish();
                    }}
                    className='w-full text-blue-400'
                  >
                    Finish Quiz
                  </button>
                )}
                <button
                  onClick={() => {
                    confirmAnswer();
                  }}
                  className='w-full py-2 border-2 rounded-lg border-blue-400 text-white bg-blue-400 font-medium'
                >
                  Send Answer
                </button>
              </div>
            </>
          ) : (
            <button
              onClick={() => {
                handleNextQuestion();
              }}
              className='flex-1 py-2 border-2 rounded-lg border-blue-400 text-white bg-blue-400 font-medium'
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export { QuizPage };
