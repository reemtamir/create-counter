import './App.css';
import InputsList from './components/InputsList';
import Counter from './components/Counter';
import Header from './components/Header';
import { useState } from 'react';
import CreateNewCounter from './components/CreateNewCounter';


function App() {
  const [minValue, setMinValue] = useState(Number.MIN_SAFE_INTEGER);
  const [maxValue, setMaxValue] = useState(Number.MAX_SAFE_INTEGER);
  const [initialValue, setInitialValue] = useState(0);
  const [stepsValue, setStepsValue] = useState(1);
  let configurations = { minValue, maxValue, initialValue, stepsValue };
  let users;
  return (
    <div className="App m-auto text-center">
      <Header str={'Create counter'} />
      <Counter minValue={-2} maxValue={5} />
      <Header str={'Add counter'} />
      <InputsList
        setMinValue={setMinValue}
        setMaxValue={setMaxValue}
        setInitialValue={setInitialValue}
        setStepsValue={setStepsValue}
      />
      <CreateNewCounter configurations={configurations} />

     
    </div>
  );
}

export default App;
