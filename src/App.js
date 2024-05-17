import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div>
      <h1>Counter App</h1>

      <div>
        <span>Count: </span>
        <span>{count}</span>
      </div>

      <span>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </span>
    </div>
  );
}

export default App;
