import { useRef, useState } from "react";

export default function Player() {
  const playerName = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);
  // const [submitted, setSubmitted] = useState(false)

  // function handleChange(event) {
  //   setSubmitted(false)
  //   setEnteredPlayerName(event.target.value)
  // }

  function handleClick() {
    // setSubmitted(true)
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = ' '  // This resets the input field after name has been entered or updated
  }
  return (
    <section id="player">
      {/* <h2>Welcome {enteredPlayerName ? enteredPlayerName : "unknown entity"}</h2>     instead of this write it like the one below  */}
      <h2>Welcome {enteredPlayerName ?? 'unknown entity'}</h2>
      <p>
        <input
          ref={playerName}
          type="text"
          // onChange={handleChange}
          // value={enteredPlayerName}
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
