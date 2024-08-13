import { useNavigate } from 'react-router-dom';
import { Header } from '../components/header';

function HomePage() {
  const navigate = useNavigate();

  const startGame = () => {
    navigate('/game-setting');
  };

  return (
    <div className='w-full flex flex-col items-center justify-start relative'>
      <Header />
      <div className='bg-white w-2/4 h-96 min-h-[70vh] p-8 rounded-sm absolute top-20 shadow-cardShadow'>
        <div className='h-full flex flex-col gap-8 items-center justify-center'>
          <div className='flex flex-col gap-2 items-center'>
            <img
              src='icon.svg'
              alt='icon'
              className='size-8'
            />
            <h1 className='text-blue-400 font-bold text-5xl'>QUIZ</h1>
          </div>
          <button
            onClick={() => {
              startGame();
            }}
            className='w-fit px-8 py-2 border-2 rounded-lg border-blue-400 text-white bg-blue-400 font-medium'
          >
            Start Game
          </button>
        </div>
      </div>
    </div>
  );
}

export { HomePage };
