import styles from './TimeRender.module.scss';
import { useEffect, useState } from "react";

const TimeRender = () => {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(null);
    useEffect(() => {
      let interval;
      if (running) {
        interval = setInterval(() => {
          setTime((prevTime) => prevTime + 10);
        }, 10);
      } else if (!running) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [running]);
    return (
      <div className="stopwatch">
        <div className="numbers">
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </div>
        <div className="buttons">
          <button className={styles.button} onClick={() => setRunning(true)}>Start</button>
          <button className={styles.button} onClick={() => setRunning(false)}>Stop</button>
          <button className={styles.button} onClick={() => setTime(0)}>Reset</button>       
        </div>
      </div>
    );
  };

export default TimeRender;