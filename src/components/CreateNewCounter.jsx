import { useState } from 'react';
import Counter from './Counter';
import Button from './Button';

function CreateNewCounter({ configurations }) {
  const [counterList, setCounterList] = useState([]);
  function addCounter() {
    setCounterList(
      counterList.concat(
        <Counter
          minValue={Number(configurations.minValue)}
          maxValue={Number(configurations.maxValue)}
          key={counterList.length}
        />
      )
    );
  }

  return (
    <>
      <Button fn={addCounter} />
      <div>{counterList}</div>
    </>
  );
}
export default CreateNewCounter;
