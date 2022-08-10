import Image from "next/image";
import { useSpring, animated } from 'react-spring';
import { useSelector } from "react-redux";

import Container from "../../Container";
import Section from "../Section";
import AboutSlider from "./AboutSlider";

import { ANIMATED_TITLE } from "../../../constants/variables";

import styles from '../../../styles/components/Sections/About.module.scss';

import glases from '../../../public/img/about/glases.png';
import neck from '../../../public/img/about/neck.png';
import smoke from '../../../public/img/about/smoke.png';

export default function About() {
  const aboutID = "about";

  const currentSection = useSelector((state) => state.common.currentSection) === aboutID;

  const animatedText = useSpring({
    from: { opacity: 1, translateY: 0 },
    opacity: 0,
    translateY: 100,
    reverse: currentSection
  })

  return (
    <Section menuTitle="About" id={aboutID} className={styles.about}>
      <div className={styles.about__glases}>
        <Image 
          width="140"
          height="140"
          src={glases}
          alt="Glases"
        />
      </div>
      <div className={styles.about__neck}>
        <Image 
          width="260"
          height="177"
          src={neck}
          alt="Neck"
        />
      </div>
      <div className={styles.about__smoke}>
        <Image 
          width="160"
          height="160"
          src={smoke}
          alt="Smoke"
          
        />
      </div>
      <Container>
        <animated.h2
          className={styles.about__title}
          style={ANIMATED_TITLE(currentSection)}
        >
          <span className="text-cherry">WHAT IS</span> alpha apes need text here?
        </animated.h2>
        <animated.div 
          className="entry-content text-center"
          style={animatedText}
        >
          <p>The world of Alpha Apes is filled with fun and excitement. But the story of how they came to be is a tale as old as time! It all started when Momma Ape and Poppa Ape met, fell in love, and decided to start a family. </p>
          <p>We can&apos;t say who exactly Momma and Poppa Ape are (yet), but you definitely don&apos;t want to pass up on the opportunity to hang out with their kids! The Alpha Apes are the newest and most fun NFT collection to hit the Metaverse. This blinged-out party pack takes life by the horns – but they&apos;re always ultra chill. </p>
        </animated.div>
      </Container>
      <AboutSlider />
    </Section>
  );
}