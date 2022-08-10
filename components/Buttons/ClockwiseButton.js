import { useRef, useState, useEffect } from "react";
import classNames from "classnames";
import Image from "next/image";
import _ from 'loadsh';

import styles from '../../styles/components/Buttons/ClockwiseButton.module.scss';

export default function ClockwiseButton({
  tagName = 'a',
  children,
  href,
  type,
  icon,
  alt,
  textStyle = 'text-bold text-small text-uppercase',
  onClick = () => {}
}) {
  const CustomTag = tagName;

  const [hover, setHover] = useState(false);
  const [endAnimation, setEndAnimation] = useState(false);

  const svgRef = useRef();
  const hoverRef = useRef(false);
  const endAnimationRef = useRef(false);
  const currentPercent = useRef(0).current;

  const buttonProps = {
    className: classNames(styles.button, {
      [styles.active]: endAnimation
    }),
    onMouseEnter: () => !hover && setHover(true),
    onMouseLeave: () => hover && setHover(false),
    onClick
  }

  const wrapProps = {
    className: classNames(styles.wrap, {
      [styles["wrap--icon"]]: icon
    })
  };

  const textProps = {
    className: classNames(textStyle, styles.text),
  };

  useEffect(() => {
    hoverRef.current = hover;
    
    const svgFrameFunction = () => {
      const svg = svgRef.current;
      const rects = svg?.querySelectorAll('path');

      if (!rects.length)
        return;

      _.map(rects, function(rect, i) {
        const speed = 2;
        const rectLength = rect.getTotalLength();

        
        const setProgress = (percent) => {
          if (percent < 5)
            percent = 0;

          const offset = rectLength - percent / 100 * rectLength;

          rect.style.strokeDashoffset = offset;
        }

        if (hoverRef.current) {
          currentPercent = currentPercent + speed;
        }
        else {
          currentPercent = currentPercent - speed;
        }

        if (currentPercent < 0)
          currentPercent = 0;

        if (currentPercent > 100)
          currentPercent = 100;

        setProgress(currentPercent);
      });

      if (currentPercent === 100) {
        if (!endAnimationRef.current) {
          setEndAnimation(true);
        }
      } else {
        if (endAnimationRef.current) {
          setEndAnimation(false);
        }
      }

      if (!hoverRef.current && currentPercent === 0)
        return;

      requestAnimationFrame(svgFrameFunction);
    }
    
    if (hoverRef.current)
      svgFrameFunction();
  }, [hover]);

  useEffect(() => {
    endAnimationRef.current = endAnimation;
  }, [endAnimation]);

  useEffect(() => {
    const svg = svgRef.current;
    const rects = svg.querySelectorAll('path');

    _.map(rects, function(rect, i) {
      const rectLength = rect.getTotalLength();

      rect.style.strokeDasharray = `${rectLength} ${rectLength}`;
      rect.style.strokeDashoffset = rectLength;
    });
  }, []);

  if (href)
    buttonProps.href = href;
  
  if (type)
    buttonProps.type = type;

  return (
    <CustomTag {...buttonProps}>
      <span {...wrapProps}>
        <span {...textProps}>{children}</span>
        {icon &&
          <Image 
            width="24"
            height="24"
            src={icon}
            alt={alt || "clockwise button icon"}
          />
        }
      </span>
      <span className={styles.animations}>
        <svg className={styles.svg} ref={svgRef} fill="none" xmlns="http://www.w3.org/2000/svg" >
          <path className={styles.svg__path_large} d="M90 1H135H150C166.016 1 179 13.9837 179 30C179 46.0163 166.016 59 150 59H30C13.9837 59 1 46.0163 1 30C1 13.9837 13.9837 1 30 1H45H90Z" strokeWidth="2"/>
          <path className={styles.svg__path_less} d="M90 1H155C168.255 1 179 11.7452 179 25C179 38.2548 168.255 49 155 49H25C11.7452 49 1 38.2548 1 25C1 11.7452 11.7452 1 25 1H45H90Z" strokeWidth="2"/>
        </svg>
      </span>
    </CustomTag>
  );
}