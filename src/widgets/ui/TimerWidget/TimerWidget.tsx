import React, { useState, useEffect } from 'react';
import styles from './TimerWidget.module.scss';
import { TimerWidgetProps } from './TimerWidget.typings';

const TimerWidget: React.FC<TimerWidgetProps> = ( {time}) => {
  const [totalSeconds, setTotalSeconds] = useState<number>(time);

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
      <div className={styles.text}> Осталось времени до удаления персонажа:</div>
      <h1 className={styles.hours}>{hours.toString().padStart(2, '0')}:{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}</h1>
    </div>
  );
};

export default TimerWidget;