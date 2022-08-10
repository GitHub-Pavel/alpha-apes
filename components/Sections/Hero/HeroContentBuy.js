import classNames from "classnames";
import { animated } from "react-spring";
import { useSelector } from "react-redux";
import { useRef } from 'react';

import NumberField from "../../Fields/NumberField";
import ApeButton from "../../Buttons/ApeButton";

import { HERO_ANIMATED_VARIATIONS } from "../../../constants/variables";

import styles from '../../../styles/components/Sections/Hero.module.scss';

export default function HeroContentBuy() {
  const isLoading = useSelector((state) => state.common.isLoading);

  const lines = {
    one: useRef(),
    two: useRef(),
    three: useRef()
  };

  const svg = {
    one: HERO_ANIMATED_VARIATIONS.lines.one(isLoading),
    two: HERO_ANIMATED_VARIATIONS.lines.two(isLoading),
    three: HERO_ANIMATED_VARIATIONS.lines.three(isLoading)
  };
  
  const length = {
    one: lines.one.current?.getTotalLength() || 0,
    two: lines.two.current?.getTotalLength() || 0,
    three: lines.three.current?.getTotalLength() || 0
  };

  return (
    <div className={styles.hero__content}>
      <form className={styles["hero-box"]}>
        <div className={styles["hero-box__flex-end"]}>
          <animated.h2 
            className={classNames(['h2', 'text-uppercase', styles["hero-box__title"]])} 
            style={HERO_ANIMATED_VARIATIONS.h2(isLoading)}
          >
            mint live
            <span className="text-cherry"> now!</span>
          </animated.h2>
        </div>
        <div className={styles["hero-box__line_one"]}>
          <animated.svg 
            width="216" 
            height="63" 
            viewBox="0 0 216 63" 
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            strokeDasharray={length.one}
            strokeDashoffset={svg.one.x.to(x => (1 - x) * length.one)}
          >
            <path 
              ref={lines.one} 
              d="M215 1C215 1 209.503 18.4205 197 29C190.5 34.5 183.5 39 174 42C168.883 43.6158 160.31 44.5477 151.5 45C130.62 46.0719 114 44 98 43C82 42 71.6407 39.7467 55 42C45.7021 43.259 40.4978 44.34 31.5 47C23.9169 49.2418 16 52.75 12.5 54.5C9 56.25 1 62 1 62"
              stroke="#121212" 
              strokeWidth="2"
            />
          </animated.svg>
        </div>
        <animated.div 
          className={styles.hero__desc} 
          style={HERO_ANIMATED_VARIATIONS.desc(isLoading)}
        >
          The core team is born in Los Angeles, CA - a team of human beans with backgrounds in crypto, technology, and gaming working to build a decentralized brand of the future.
        </animated.div>
        <div className={styles["hero-box__line_two"]}>
          <animated.svg 
            width="203" 
            height="50" 
            viewBox="0 0 203 50" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            strokeDasharray={length.two}
            strokeDashoffset={svg.two.x.to(x => (1 - x) * length.two)}
          >
            <path 
              ref={lines.two} 
              d="M1 1C1 1 16 26 51 29.5C61.5 30.55 66.5 30 83 28C99.5 26 104.5 22.5 127 22.5C149.5 22.5 169 26 185 34C201 42 202 49 202 49" 
              stroke="#121212" 
              strokeWidth="2"
            />
          </animated.svg>
        </div>
        <div className={styles["hero-box__flex-end"]}>
          <animated.div 
            className={styles["hero-box__number-wrap"]}
            style={HERO_ANIMATED_VARIATIONS.numberWrap(isLoading)}
          >
            <NumberField />
            <span className={styles["hero-box__number-text"]}>
              <span className="text-semibold">1 NFT Alpha Apes costs 0.1 ETH </span>
              (Max 10)
            </span>
          </animated.div>
        </div>
        <div className={styles["hero-box__line_three"]}>
          <animated.svg 
            width="15" 
            height="26" 
            viewBox="0 0 15 26" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            strokeDasharray={length.three}
            strokeDashoffset={svg.three.x.to(x => (1 - x) * length.three)}
          >
            <path 
              ref={lines.three} 
              d="M14 0.5C10.5 15 7.5 19 1.5 24.5"
              stroke="#121212"
              strokeWidth="2"
            />
          </animated.svg>
        </div>
        <animated.div 
          style={HERO_ANIMATED_VARIATIONS.btnWrap(isLoading)}
        >
          <ApeButton
            title="click buy to mint"
            description="Available 3, 546 Ape’s"
            tagName="a"
            href="#"
            onClick={(e) => e.preventDefault()}
          />
        </animated.div>
      </form>
    </div>
  );
}