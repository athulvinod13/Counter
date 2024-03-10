
import React, { useState, useEffect } from 'react';
import './App.css'

function App() {
  
  
    const [count, setCount] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
      let interval;
  
      if (!isPaused) {
        interval = setInterval(() => {
          setCount((prevCount) => prevCount + 1);
        }, 1000);
      }
  
      return () => clearInterval(interval);
    }, [isPaused]);
  
    const handleReset = () => {
      setCount(0);
      setIsPaused(false);
    };
  
    const handlePause = () => {
      setIsPaused((prevIsPaused) => !prevIsPaused);
    };
  
   
  
  return (
    <>
      
      <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handlePause}>{isPaused ? 'Resume' : 'Pause'}</button>
      
    </div>
  
        
    </>
  )
}

export default App
