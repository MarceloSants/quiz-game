import { useLocation, useNavigate } from 'react-router-dom';
import { Header } from '../components/header';
import { AnswerResultButton } from './components/answer-result-button';
import { useQuiz } from '../../lib/quiz-context';

const handleFinish = () => {};

function ResultPage() {
  const navigate = useNavigate();
  const state = useLocation().state;
  const { questions } = useQuiz();
  const answers: number[] = state.answers;

  const handleReview = (questionIndex = 0) => {
    navigate('/answer-review', {
      state: { questionIndex: questionIndex, answers: answers },
    });
  };

  return (
    <div className='w-full flex flex-col items-center justify-start relative'>
      <Header>
        <p>You finished</p>
        <p>00:00</p>
      </Header>
      <div className='bg-white w-2/4 h-max p-8 rounded-sm absolute top-20 shadow-cardShadow'>
        <div className='flex flex-col items-center gap-6 lg:gap-6 xl:gap-8 2xl:gap-12'>
          <div className='flex flex-col gap-2 items-center px-4'>
            <h1 className='text-gray-500 text-2xl leading-7'>Results</h1>
            <p className='text-gray-400'>Check your results bellow</p>
          </div>

          <div className='w-1/2 flex items-start justify-center gap-2 flex-wrap'>
            {answers.map((answer, index) => {
              return (
                <AnswerResultButton
                  key={index}
                  answer={answer === questions[index].correctAnswer}
                  onClick={() => {
                    handleReview(index);
                  }}
                />
              );
            })}
          </div>

          <div className='w-full flex gap-4 items-center justify-between'>
            <button
              onClick={() => {
                handleReview();
              }}
              className='flex-1 py-2 border-2 rounded-lg border-blue-400 text-blue-400 font-medium'
            >
              Review
            </button>
            <button
              onClick={() => {
                handleFinish();
              }}
              className='flex-1 py-2 border-2 rounded-lg border-blue-400 text-white bg-blue-400 font-medium'
            >
              Finish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultPage;
