import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(3);

  // let counter = 5;

  // const addValue = () => {
  //   console.log(counter);
  //   counter = counter + 1;
  // };

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };
  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h1>React Js</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add</button>
      <br />
      <button onClick={removeValue}>remove</button>
    </>
  );
}

export default App;
