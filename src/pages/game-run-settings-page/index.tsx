import { useState } from 'react';
import { Toaster, toast } from 'sonner';

import { Header } from '../components/header';

import { questionThemes } from '../../mocks/question-themes';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../../lib/quiz-context';
import { getQuestionsByTheme } from '../../mocks/questions';

function GameRunSettingsPage() {
  const navigate = useNavigate();
  const { setQuestions } = useQuiz();
  const [selectedThemes, setSelectedThemes] = useState<string[]>([]);
  const [numberOfQuestions, setNumberOfQuestions] = useState(5);
  const [totalTime, setTotalTime] = useState(60);

  const handleThemeClick = (code: string) => {
    const index = selectedThemes.findIndex((themeCode) => themeCode === code);

    if (index === -1) {
      setSelectedThemes((prev) => {
        return [...prev, code];
      });
    } else {
      setSelectedThemes((prev) => {
        const newSelectedThemes = [...prev];
        newSelectedThemes.splice(index, 1);

        return newSelectedThemes;
      });
    }
  };

  const handleReturn = () => {
    navigate('/', { state: { selectedThemes: selectedThemes } });
  };

  const handleGameStart = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (selectedThemes.length == 0) {
      toast.warning('Should select at least one theme');
      return;
    }

    const questions = selectedThemes
      .map((theme) => {
        return getQuestionsByTheme(theme, numberOfQuestions);
      })
      .flat();
    setQuestions(questions);

    navigate('/quiz', {
      state: {
        totalTime,
      },
    });
  };

  return (
    <>
      <Toaster
        toastOptions={{
          classNames: {
            warning: 'text-yellow-400',
            title: 'text-gray-700',
          },
        }}
        visibleToasts={2}
        position='top-right'
        duration={2000}
      />

      <div className='w-full flex flex-col items-center justify-start relative'>
        <Header />
        <div className='bg-white w-2/4 h-max p-8 rounded-sm absolute top-20 shadow-cardShadow'>
          <div className='flex flex-col gap-4 sm:gap-2 lg:gap-6 xl:gap-8 2xl:gap-12'>
            <div className='flex flex-col px-4 gap-2'>
              <div className='flex items-center justify-between'></div>
              <h1 className='text-gray-500 text-2xl leading-7'>Settings</h1>
            </div>
            <div className='flex flex-col gap-8'>
              <div className='flex flex-col gap-4 text-gray-500 px-4'>
                <h2 className='text-xl'>Themes</h2>

                <div className='flex gap-2 flex-wrap'>
                  {questionThemes.map((theme) => {
                    return (
                      <button
                        key={theme.code}
                        onClick={() => {
                          handleThemeClick(theme.code);
                        }}
                        className={`${
                          selectedThemes.includes(theme.code)
                            ? theme.color
                            : 'bg-slate-400'
                        } w-fit rounded-md px-2`}
                      >
                        <p className='text-white text-sm font-semibold'>
                          {theme.name}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className='flex flex-col gap-4 text-gray-500 px-4'>
                <h2 className='text-xl'>Rules</h2>
                <form
                  id='ruleForm'
                  className='flex gap-8 flex-wrap'
                  onSubmit={handleGameStart}
                >
                  <div className='flex gap-2'>
                    <p className=' text-gray-400'>Number of Questions</p>
                    <input
                      type='number'
                      form='ruleForm'
                      name='numberOfQuestions'
                      min={5}
                      max={10}
                      value={numberOfQuestions}
                      onChange={(input) => {
                        setNumberOfQuestions(parseInt(input.target.value));
                      }}
                      className='bg-gray-300 text-gray-600 rounded px-2'
                    />
                  </div>
                  <div className='flex gap-2'>
                    <p className='text-gray-400'>Total Time (sec)</p>
                    <input
                      type='number'
                      form='ruleForm'
                      name='totalTime'
                      min={60}
                      max={300}
                      value={totalTime}
                      onChange={(input) => {
                        setTotalTime(parseInt(input.target.value));
                      }}
                      className='bg-gray-300 text-gray-600 rounded px-2'
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className='flex gap-4 items-end justify-center'>
              <button
                onClick={() => {
                  handleReturn();
                }}
                className='flex-1 py-2 border-2 rounded-lg border-blue-400 text-blue-400 font-medium'
              >
                Back
              </button>
              <div className='flex flex-1 flex-col items-center'>
                <button
                  form='ruleForm'
                  type='submit'
                  className='w-full py-2 border-2 rounded-lg border-blue-400 text-white bg-blue-400 font-medium'
                >
                  Start
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { GameRunSettingsPage };
