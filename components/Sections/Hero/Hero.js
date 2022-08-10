import { useSelector } from "react-redux";
import { useSpring, animated } from "react-spring";
import classNames from "classnames";
import Image from "next/image";
import { useState, useEffect } from "react";

import Container from "../../Container";
import Section from "../Section";
import FallBananas from "../../UI/FallBananas";
import ScrollToButton from "../../Buttons/ScrollToButton";
import HeroContentConnect from "./HeroContentConnect";
import HeroContentBuy from "./HeroContentBuy";
import HeroContentConfirm from "./HeroContentConfirm";
import HeroContentSoon from "./HeroContentSoon";
import HeroContentSold from "./HeroContentSold";

import { ANIMATED_DELAY } from "../../../constants/variables";

import styles from '../../../styles/components/Sections/Hero.module.scss';

import arrowdown from '../../../public/img/arrow-down.svg';

export default function Hero() {
  const heroID = "hero";

  const [animatedDelay, setAnimatedDelay] = useState(ANIMATED_DELAY);

  const type = useSelector((state) => state.common.currentType);
  const isLoading = useSelector((state) => state.common.isLoading);
  const currentSection = useSelector((state) => state.common.currentSection) === heroID;

  const animatedImg = useSpring({
    from: { opacity: 1 },
    opacity: 0,
    reverse: isLoading && currentSection ? true : false,
    delay: animatedDelay,
    config: { duration: 400 }
  });
  
  const animatedScrollToButton = useSpring({
    from: { opacity: 1, translateX: 0 },
    opacity: 0,
    translateX: 100,
    reverse: isLoading && currentSection ? true : false,
    delay: animatedDelay
  });

  const animatedH1 = {
    one: useSpring({
      delay: animatedDelay+200,
      opacity: 0,
      translateX: -100,
      from: { opacity: 1, translateX: 0 },
      reverse: isLoading && currentSection ? true : false
    }),
    two: useSpring({
      delay: animatedDelay+200,
      opacity: 0,
      translateX: 100,
      from: { opacity: 1, translateX: 0 },
      reverse: isLoading && currentSection ? true : false
    })
  };

  const titleClasses = classNames(['h1', 'h1--large', 'text-white', 'text-uppercase', styles.hero__title]);

  useEffect(() => {
    if (isLoading)
      setTimeout(() => setAnimatedDelay(0), ANIMATED_DELAY);
  }, [isLoading]);

  return (
    <Section 
      className={styles.hero}
      menuTitle="mint" 
      color="#FFEC00" 
      id={heroID}
    >
      <h1 className={titleClasses}>
        <animated.span style={animatedH1.one}>this is</animated.span>
        <animated.span style={animatedH1.two}>alpha apes</animated.span>
      </h1>
      <FallBananas />
      <Container type="large">
        <div className={styles.hero__row}>
          <animated.div className={styles.hero__img} style={animatedImg}>
            <Image 
              width="870"
              height="980"
              src="/img/hero/ape.png"
              alt="This is alpha apes"
            />
          </animated.div>

          {type === 'connect' && <HeroContentConnect />}
          {type === 'buy' && <HeroContentBuy />}
          {type === 'confirm' && <HeroContentConfirm />}
          {type === 'soon' && <HeroContentSoon date={new Date("29 April 2022 10:00:00")} time="10:00 AM" />}
          {type === 'sold' && <HeroContentSold />}

        </div>
      </Container>
      <ScrollToButton
        to="about"
        className={styles["hero-scroll"]}
        hoverClass={styles["hero-scroll_active"]}
      >
        <animated.span 
          className={styles["hero-scroll__img"]}
          style={animatedScrollToButton}
        >
          <Image 
            height="30"
            width="20"
            src={arrowdown}
            alt="Scroll down"
          />
        </animated.span>
      </ScrollToButton>
    </Section>
  );
}