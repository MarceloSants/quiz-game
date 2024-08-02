import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

function Header({ children }: Props) {
  return (
    <div className='flex text-white bg-blueGradient w-full h-28 justify-center'>
      <div className='flex w-2/4 h-full items-center justify-between'>
        {children}
      </div>
    </div>
  );
}

export { Header };
