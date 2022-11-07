import { useState } from 'react';

function Counter({
  minValue = Number.MIN_SAFE_INTEGER,
  maxValue = Number.MAX_SAFE_INTEGER,
  initialValue = 0,
  stepsValue = 1,
}) {
  const [counter, setCounter] = useState(initialValue);
  const isNotAtMin = counter - stepsValue >= minValue;
  const isNotAtMax = counter + stepsValue <= maxValue;
  console.log(minValue, maxValue, initialValue, stepsValue);
  const add = () => {
    if (isNotAtMax) {
      setCounter((counter) => counter + stepsValue);
    }
  };
  const subtract = () => {
    if (isNotAtMin) {
      setCounter((counter) => counter - stepsValue);
    }
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
      <button disabled={!isNotAtMax} onClick={add}>
        +
      </button>
      <button disabled={!isNotAtMin} onClick={subtract}>
        -
      </button>
    </>
  );
}
export default Counter;
