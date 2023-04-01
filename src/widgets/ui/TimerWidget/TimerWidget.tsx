import React, { useState, useEffect } from 'react';
import styles from './TimerWidget.module.css';
import { TimerWidgetProps } from './TimerWidget.typings';

const TimerWidget: React.FC<TimerWidgetProps> = () => {
  const [totalSeconds, setTotalSeconds] = useState<number>(86400);

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalSeconds(totalSeconds => totalSeconds - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return (
    <div className={styles.timerWidget}>
      <div> Осталось времени до удаления персонажа:</div>
      <h1>{hours.toString().padStart(2, '0')}:{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}</h1>
    </div>
  );
};

export default TimerWidget;