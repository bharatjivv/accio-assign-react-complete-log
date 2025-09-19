import React, { useState, useEffect, useRef } from "react";

const formatTime = (time) => {
  const minutes = Math.floor(time / 6000);
  const seconds = Math.floor((time % 6000) / 100);
  const centiseconds = time % 100;

  const pad = (num) => String(num).padStart(2, "0");

  return `${pad(minutes)}:${pad(seconds)}:${pad(centiseconds)}`;
};

const App = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [lap, setLap] = useState([]);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 100); 
    }
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
  }

  const recordLap = () => {
    setLap(prev => [...prev, time]);
  }

  const resetTimer = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setTime(0);
    setLap([]);
  }

  useEffect(() => {
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);


  return (
    <div>
      <div>
      <p>{formatTime(time)}</p>
      <button onClick={startTimer}> Start</button>
      <button onClick={stopTimer}> Stop</button>
      <button onClick={recordLap}>Lap</button>
      <button onClick={resetTimer}>Reset Timer</button>

      <ul>
        {lap.map((lap, index) => (
          <li key={index}> {formatTime(lap)} </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default App;
