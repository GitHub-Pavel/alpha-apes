import Image from 'next/image';
import classNames from "classnames";
import { useSelector } from 'react-redux';
import { useSpring, animated } from 'react-spring';

import Section from "../Section";
import Container from "../../Container";
import FallBananas from "../../UI/FallBananas";
import CommunityButton from "./CommunityButton";
import InfiniteComponent from "../../UI/InfiniteComponent";

import { ANIMATED_TITLE } from '../../../constants/variables';

import styles from '../../../styles/components/Sections/Community.module.scss';

import cards from '../../../public/img/community/cards.png';
import banana from '../../../public/img/community/banana.png';
import glasses from '../../../public/img/community/glasses.png';
import smoke from '../../../public/img/community/smoke.png';
import img from '../../../public/img/community/img.png';
import title from '../../../public/img/community/title.svg';


export default function Community() {
  const communityID = "community";

  const currentSection = useSelector((state) => state.common.currentSection) === communityID;

  const animatedImg = useSpring({
    from: { opacity: 1, translateY: 0 },
    opacity: 0,
    translateY: 100,
    reverse: currentSection
  });

  const titleClasses = classNames(["text-white","text-nowrap", "h1", "h1--large", styles.community__title]);

  return (
    <Section
      id={communityID}
      menuTitle="community"
      color="#FFEC00"
      className={styles.community}
    > 
      <InfiniteComponent className={styles.community__alphapes} reverse><h1 className={titleClasses}>ALPHA APES</h1></InfiniteComponent>
      <FallBananas />
      <div className={styles.community__yar}>
        <animated.div style={ANIMATED_TITLE(currentSection)}>
          <Image 
            width="560"
            height="190"
            src={title}
            alt="You are ready?"
          />
        </animated.div>
      </div>
      <div className={styles.community__img_cards}>
        <Image 
          width="160"
          height="160"
          src={cards}
          alt="Cards"
        />
      </div>
      <div className={styles.community__img_smoke}>
        <Image 
          width="160"
          height="160"
          src={smoke}
          alt="smoke"
        />
      </div>
      <div className={styles.community__img_glasses}>
        <Image 
          width="160"
          height="160"
          src={glasses}
          alt="glasses"
        />
      </div>
      <div className={styles.community__img_banana}>
        <Image 
          width="160"
          height="160"
          src={banana}
          alt="banana"
        />
      </div>
      <Container>
        <animated.div 
          className={styles.community__wrap}
          style={animatedImg}
        >
          <Image 
            width="860"
            height="734"
            src={img}
            alt="Alpha apes"
          />
          <CommunityButton />
        </animated.div>
      </Container>
    </Section>
  );
}