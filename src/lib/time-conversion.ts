const convertTime = (time: number) => {
  let minutes: number;
  let seconds: number;

  if (time >= 60) {
    minutes = Math.floor(time / 60);
    seconds = time - minutes * 60;
  } else {
    minutes = 0;
    seconds = time;
  }

  return { minutes, seconds };
};

const timeToString = (minutes: number, seconds: number) => {
  return `${minutes.toString().padStart(2, '0')}:${seconds
    .toString()
    .padStart(2, '0')}`;
};

export { convertTime, timeToString };
