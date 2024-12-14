import { useState, useRef } from 'react';

export default function Player() {
  //using Ref now
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);

  const playerName = useRef();

  const onSubmitName = () => {
    setEnteredPlayerName(playerName.current.value);
  };

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? 'unknown entity'}</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={onSubmitName}>Set Name</button>
      </p>
    </section>
  );
}
