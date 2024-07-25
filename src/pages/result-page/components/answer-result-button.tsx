import { Check, X } from 'lucide-react';

const correctAnswerBackground =
  'flex w-8 h-8 items-center justify-center text-white bg-greenGradient rounded-full';
const wrongAnswerBackground =
  'flex w-8 h-8 items-center justify-center text-white bg-redGradient rounded-full';

interface AnswerResultButtonProps extends React.ComponentProps<'button'> {
  answer: boolean;
}

function AnswerResultButton({ answer, ...props }: AnswerResultButtonProps) {
  return (
    <button
      {...props}
      className={answer ? correctAnswerBackground : wrongAnswerBackground}
    >
      {answer ? <Check /> : <X />}
    </button>
  );
}

export { AnswerResultButton };
