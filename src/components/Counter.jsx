import { useState } from 'react';

function Counter({
  minValue = Number.MIN_SAFE_INTEGER,
  maxValue = Number.MAX_SAFE_INTEGER,
  initialValue = 0,
  stepsValue = 1,
}) {
  const [counter, setCounter] = useState(initialValue);
  const add = () => {
    setCounter((counter) => counter + stepsValue);
  };
  const subtract = () => {
    setCounter((counter) => counter - stepsValue);
  };

  function setColor(counter) {
    if (counter < 0) return 'red';
    if (counter > 0 && counter < 10) return 'pink';
    if (counter > 10 && counter < 20) return 'green';
  }
  return (
    <>
      <p>
        From: {minValue}, To: {maxValue}
      </p>
      <p style={{ color: setColor(counter) }}>{counter}</p>
      <button disabled={counter === maxValue} onClick={add}>
        +
      </button>
      <button disabled={counter === minValue} onClick={subtract}>
        -
      </button>
    </>
  );
}
export default Counter;
