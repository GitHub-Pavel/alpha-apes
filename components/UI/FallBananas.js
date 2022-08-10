import classNames from 'classnames';
import { useRef, useEffect, useState } from 'react';
import random from 'random';

import { endpoints } from '../../constants/endpoints';

import styles from '../../styles/components/UI/FallBananas.module.scss';

export default function FallBananas({
  delay = 400,
  minDuration = 140,
  maxDuration = 290,
  easing = 'linear'
}) {
  const wrapRef = useRef();

  const createBanana = (duration) => {
    let minRand = 100,
        maxRand = wrapRef.current?.offsetWidth - 40,
        rand = random.float(minRand, maxRand);

    if (window.innerWidth <= endpoints.xs) {
      minRand = 40;
    }

    if (rand === NaN)
      rand = minRand;

    const banana = document.createElement('div');

    banana.classList.add(styles.banana);
    banana.style.transition = `all ${duration}ms ${easing}`;
    banana.style.left = rand+'px';

    wrapRef.current?.append(banana);

    return banana;
  }

  const startBanana = (banana, duration) => {
    banana.style.cssText = `
      --next-step-position: ${wrapRef.current?.offsetHeight}px;
      left: ${banana.style.left};
      transition: ${banana.style.transition};
    `;
    banana.classList.add(styles.banana_active);
    setTimeout(() => banana.remove(), duration);
  };

  useEffect(() => {
    const intv = setInterval(() => {
      let offset = 70, rand = offset;

      const wrapWidth = wrapRef.current?.offsetHeight || window.innerHeight;
      const innerMin = Math.trunc(minDuration*(wrapWidth/offset));
      const innerMax = Math.trunc(maxDuration*(wrapWidth/offset));

      const randDuration = random.float(innerMin, innerMax);

      if (randDuration !== NaN)
        rand = randDuration

      const el = createBanana(rand);

      setTimeout(() => startBanana(el, rand), 0);
    }, delay);

    return () => {
      clearInterval(intv);
    }
  }, []);

  return <div className={styles.wrap} ref={wrapRef} />;
}