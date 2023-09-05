import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    counter = counter + 1;
    setCounter(counter);
  };

  const decreaseValue = () => {
    counter = counter - 1;
    setCounter(counter);
  };

  return (
    <>
      <div className="container">
        <h1> React Counter </h1>
        <h2>Counter Value: {counter}</h2>
        <button onClick={addValue}>Add Value </button>
        <br />
        <button onClick={decreaseValue}>Decrease Value </button>
      </div>
    </>
  );
}

export default App;
