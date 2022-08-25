import './App.css';
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [isRed, setIsRed] = useState(false);
  const handleIncrement = () => {
    setCount(count + 1);
    setIsRed(!isRed);
  }
  return (
    <div className="app">
      <button className='btn' onClick={handleIncrement}>Increment</button>
      <h1>{count}</h1>
      <h1 className={isRed ? 'red' : null}>Change My Color!</h1>
    </div>
  );
}

export default App;
