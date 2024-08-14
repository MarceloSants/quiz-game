import { useState } from 'react';
import { convertTime, timeToString } from '../../../lib/time-conversion';

interface TimerProps {
  totalDuration: number;
  handleTimeOver: () => void;
  setTimer: (time: number) => void;
}

function Timer({ totalDuration, handleTimeOver, setTimer }: TimerProps) {
  const [time, setTime] = useState(0);

  const handleTime = () => {
    if (time >= totalDuration) {
      return;
    }
    setTimeout(() => {
      const newTime = time + 1;
      setTime(newTime);
      setTimer(newTime);
      checkTimeOver();
    }, 1000);
  };

  const checkTimeOver = () => {
    if (time >= totalDuration - 1) {
      handleTimeOver();
    }
  };

  const { minutes, seconds } = convertTime(totalDuration - time);
  const convertedTimeString = timeToString(minutes, seconds);

  handleTime();

  return <p>{convertedTimeString}</p>;
}

export { Timer };
