import { useEffect, useState } from 'react';
import Image from 'next/image';
import Polyhedron from '../UI/Polyhedron';

import plus from '../../public/img/plus.svg';
import minus from '../../public/img/minus.svg';

import styles from '../../styles/components/Fields/NumberField.module.scss';

function PlusMinusButton({
  onClick,
  icon,
  alt,
  className
}) {
  const [hover, setHover] = useState(false);
  const color = !hover ? '#DC41A0' : '#121212';
  const hoverHandler = () => setHover(!hover);
  const href = alt.replace(' ', '-').toLowerCase();
  const customClickHandler = (e) => {
    e.preventDefault();
    onClick(e);
  }

  return (
    <a 
      href={"#"+href}
      onClick={customClickHandler} 
      className={className}
      onMouseEnter={hoverHandler}
      onMouseLeave={hoverHandler}
    >
      <Polyhedron color={color}>
        <Image 
          width="20"
          height="20"
          src={icon}
          alt={alt}
        />
      </Polyhedron>
    </a>
  );
}

export default function NumberField({
  min = 1, 
  max = 10,
  value = 1,
  onChange,
  required,
  name
}) {
  const [count, setCount] = useState(value);

  const plusClickHandler = () => count < max && setCount(count+1);
  const minusClickHandler = () => count > min && setCount(count-1);
  const valueHandler = (e) => {
    const val = e.target.value;

    if (val > max && val !== "") return setCount(max);

    if (val < min && val !== "") return setCount(min);

    setCount(val);
  };

  useEffect(() => {
    if (typeof onChange === 'function')
      onChange(count);
  }, [count]);

  return (
    <span className={styles.wrap}>
      {count > min &&
        <PlusMinusButton 
          icon={minus}
          onClick={minusClickHandler}
          className={styles.button__minus}
          alt="Minus"
        />
      }
      <Polyhedron 
        color="#fff" 
        size="130"
      >
        <input 
          type="number" 
          autoComplete="off" 
          value={count} 
          name={name}
          required={required}
          onChange={valueHandler}
          className={styles.field}
        />
      </Polyhedron>
      {count < max &&
        <PlusMinusButton 
          icon={plus}
          onClick={plusClickHandler}
          className={styles.button__plus}
          alt="Plus"
        />
      }
    </span>
  );
}