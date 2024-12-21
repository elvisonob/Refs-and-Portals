import { useState, useRef } from 'react';
import ResultModal from './ResultModal';

const TimerChallenge = ({ title, targetTime }) => {
  const [timerExpired, setTimerExpired] = useState(false);
  const [timerStart, setTimerStart] = useState(false);

  const timer = useRef();
  const dialog = useRef();

  const handleStart = () => {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      dialog.current.showModal();
    }, targetTime * 1000);

    setTimerStart(true);
  };

  const handleStop = () => {
    clearTimeout(timer.current);
  };

  return (
    <>
      <ResultModal targetTime={targetTime} ref={dialog} result="lost" />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
          <button onClick={timerStart ? handleStop : handleStart}>
            {timerStart ? 'Stop' : 'Start'} Challenge
          </button>
        </p>
        <p className={timerStart ? 'active' : undefined}>
          {timerStart ? 'Time is running...' : 'Timer inactive'}
        </p>
      </section>
    </>
  );
};

export default TimerChallenge;
