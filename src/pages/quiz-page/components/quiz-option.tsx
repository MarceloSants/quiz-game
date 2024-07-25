import { Check, X } from 'lucide-react';

interface QuizOptionProps {
  index: number;
  isAnswerConfirmed: boolean;
  rightAnswer: number;
  selectedAnswer: number;
  answer: string;
  handleAnswerSelect: (index: number) => void;
}

function QuizOption({
  isAnswerConfirmed,
  index,
  rightAnswer,
  selectedAnswer,
  answer,
  handleAnswerSelect,
}: QuizOptionProps) {
  const defaultClass = 'w-full px-4 py-2 rounded-lg text-gray-400';
  const hoverClass =
    'w-full px-4 py-2 rounded-lg text-gray-500 hover:bg-gray-200';

  const selectedClass =
    'w-full px-4 py-2 rounded-lg font-semibold text-white bg-blueGradient';
  const correctClass =
    'w-full px-4 py-2 rounded-lg font-semibold text-white bg-greenGradient';
  const incorrectClass =
    'w-full px-4 py-2 rounded-lg font-semibold text-white bg-redGradient';

  function getClassName() {
    if (isAnswerConfirmed) {
      if (index === rightAnswer) {
        return correctClass;
      } else if (index === selectedAnswer) {
        return incorrectClass;
      } else {
        return defaultClass;
      }
    } else {
      return selectedAnswer === index ? selectedClass : hoverClass;
    }
  }

  // Usage in your JSX or template
  const className = getClassName();

  return (
    <button
      onClick={() => {
        handleAnswerSelect(index);
      }}
      disabled={isAnswerConfirmed}
      className={className}
    >
      <div className="flex items-center justify-start text-wrap">
        <div className="flex items-center w-6 h-8 mr-4 text-2xl">
          {isAnswerConfirmed ? (
            index == rightAnswer ? (
              <Check />
            ) : index == selectedAnswer ? (
              <X />
            ) : (
              <p className="font-semibold">{String.fromCharCode(index + 65)}</p>
            )
          ) : (
            <p className="font-semibold">{String.fromCharCode(index + 65)}</p>
          )}
        </div>
        <p className="text-left leading-5 break-words overflow-hidden">
          {answer}
        </p>
      </div>
    </button>
  );
}

export { QuizOption };
