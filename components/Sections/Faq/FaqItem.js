import { useState, useRef } from "react";
import { romanize } from "romans";
import { animated, useSpring } from "react-spring";
import classNames from "classnames";
import Image from 'next/image';

import Polyhedron from "../../UI/Polyhedron";

import styles from '../../../styles/components/Sections/Faq.module.scss';

import plus from '../../../public/img/plus.svg';


export default function FaqItem({
  heading,
  body,
  index,
  visible = false
}) {
  const [active, setActive] = useState(false);
  
  const bodyRef = useRef();

  const bodyProps = useSpring({
    reverse: active,
    height: 0,
    from: {height: bodyRef?.current?.offsetHeight}
  });

  const animatedLi = useSpring({
    from: { opacity: 1, translateY: 0 },
    opacity: 0,
    translateY: 50,
    reverse: visible,
    delay: index*100
  })

  const currentNumber = romanize(index+1);

  const clickHandler = () => setActive(!active); 

  const color = active ? 'rgba(18, 18, 18, .2)' : '#DC41A0';

  const itemClasses = classNames(styles.faq__item, {
    [styles.faq__item_active]: active
  });
  const headingClasses = classNames(styles.faq__heading, 'h3');
  const wrapClasses = classNames(styles.faq__wrap, 'entry-content');
  
  return (
    <animated.li 
      className={itemClasses}
      style={animatedLi}
    >
      <button
        onClick={clickHandler}
        className={styles.faq__button}
      >
        <h3 className={headingClasses}>
          <span className="text-lighter text-center">{currentNumber}.</span>
          <span>{heading}</span>
        </h3>
        <Polyhedron
          color={color}
          className={styles.faq__icon}
        >
          <Image 
            width={20}
            height={20}
            src={plus}
            alt="Plus"
          />
        </Polyhedron>
      </button>
      <animated.div style={bodyProps} className={wrapClasses}>
        <div className={styles.faq__body} ref={bodyRef} dangerouslySetInnerHTML={{ __html: body.toString() }}/>
      </animated.div>
    </animated.li>
  );
}