import { useState } from 'react';

const TimerChallenge = ({ title, targetTime }) => {
  const [timerExpired, setTimerExpired] = useState(false);
  const [timerStart, setTimerStart] = useState(false);

  const handleStart = () => {
    setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);

    setTimerStart(true);
  };
  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You lost</p>}
      <p className="challenge-time">
        {targetTime} second {targetTime > 1 ? 's' : ''}
      </p>
      <p>
        <button onClick={handleStart}>
          {timerStart ? 'Stop' : 'Start'} Challenge
        </button>
      </p>
      <p className={timerStart ? 'active' : undefined}>
        {timerStart ? 'Time is running...' : 'Timer inactive'}
      </p>
    </section>
  );
};

export default TimerChallenge;
