import React from 'react';
import { useTimer } from 'react-timer-hook';

import styles from '../../styles/components/UI/Timer.module.scss';

export default function Timer({
  expiryTimestamp,
  time
}) {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ 
    expiryTimestamp, 
    onExpire: () => console.warn('onExpire called'),
    autoStart: true
  });

  return (
    <div className={styles.timer}>
      <div className={styles.timer__timebox}>
        <div className={styles.timer__time}>
          {time}
          <span className="text-cherry"> UTC</span>
        </div>
      </div>

      <div className={styles.timer__item}>
        <div className={styles.timer__title}>{days}</div>
        <div className={styles.timer__desc}>Days</div>
      </div>
      
      <div className={styles.timer__item}>
        <div className={styles.timer__title}>{hours}</div>
        <div className={styles.timer__desc}>Hours</div>
      </div>
      
      <div className={styles.timer__item}>
        <div className={styles.timer__title}>{minutes}</div>
        <div className={styles.timer__desc}>Minutes</div>
      </div>
      
      <div className={styles.timer__item}>
        <div className={styles.timer__title}>{seconds}</div>
        <div className={styles.timer__desc}>Seconds</div>
      </div>
    </div>
  );
}