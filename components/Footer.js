import { useState } from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { useSpring, animated } from 'react-spring';

import Container from './Container';
import ScrollToButton from "./Buttons/ScrollToButton";
import Polyhedron from './UI/Polyhedron';

import { useWindowSize } from '../hooks/useWindowSize';
import { endpoints } from '../constants/endpoints';
import { discord } from '../constants/social-list';
import { ANIMATED_DELAY } from '../constants/variables';

import styles from '../styles/components/Footer.module.scss';

import arrowup from '../public/img/arrow-up.svg';
import discordSvg from '../public/img/discord.svg';
import discordText from '../public/img/discord-text.svg';

export default function Footer() {
  const [hoverBtn, setHoverBtn] = useState(false);
  
  const [innerWidth, innerHeight] = useWindowSize();

  const currentSection = useSelector((state) => state.common.currentSection);
  const isLoading = useSelector((state) => state.common.isLoading);
  const sections = useSelector((state) => state.common.sections);
  const menu = useSelector((state) => state.common.menu);

  const animatedDiscord = useSpring({
    delay: ANIMATED_DELAY,
    reverse: isLoading,
    from: { opacity: 1, translateX: 0 },
    translateX: -100,
    opacity: 0
  });

  const termsClasses = classNames(["text-semibold","text-center","text-small","text-underline"], styles.footer__link);
  const hoverBrnClasses = classNames(styles["footer-discord"], {
    [styles["footer-discord_active"]]: hoverBtn,
    [styles["footer-discord_disabled"]]: innerWidth <= endpoints.xs && currentSection === sections[sections.length-1]?.target.getAttribute('id') && !menu,
  });
  const wrapClasses = classNames(styles.footer__wrap, {
    [styles.footer__wrap_disabled]: menu
  });
  
  const hoverBtnHandler = () => setHoverBtn(!hoverBtn);

  return (
    <footer className={styles.footer}>
      <a 
        href={discord}
        className={hoverBrnClasses}
        onMouseEnter={hoverBtnHandler}
        onMouseLeave={hoverBtnHandler}
        target="_blank"
        rel="noopener noreferrer"
      >
        <animated.div style={animatedDiscord}>
          <Polyhedron 
            size={130}
            className={styles["footer-discord__wrap"]}
            color="#5865F2"
          >
            <div className={styles["footer-discord__text"]}>
              <Image 
                width="110"
                height="110" 
                src={discordText}
                alt="Discord"
              />
            </div>
            <Image 
              width="40"
              height="40"
              src={discordSvg}
              alt="Discord"
            />
          </Polyhedron>  
        </animated.div>
      </a>
      <div className={wrapClasses}>
        <Container type="fluid">
          <div className={styles.footer__row}>
            <div />
            <div className={styles.footer__desc}>
              <div>
                <div className="text-small text-center">© 2022 Alpha Apes.</div>
                <a href="#" className={termsClasses}>Terms of Service</a>
              </div>
            </div>
            <div className={styles["footer-scroll-wrap"]}>
              <ScrollToButton
                to="hero" 
                className={styles["footer-scroll"]}
                hoverClass={styles["footer-scroll_active"]}
              >
                <span className={styles["footer-scroll__img"]}>
                  <Image 
                    height="30"
                    width="20"
                    src={arrowup}
                    alt="Scroll up"
                  />
                </span>
              </ScrollToButton>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}