import classNames from 'classnames';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { useSpring, animated } from 'react-spring';

import Section from '../../Sections/Section';
import Container from '../../Container';
import FaqItem from './FaqItem';

import { faq } from '../../../constants/faq';
import { ANIMATED_TITLE } from '../../../constants/variables';

import styles from '../../../styles/components/Sections/Faq.module.scss';

import coffee from '../../../public/img/faq/coffee.png';
import ice from '../../../public/img/faq/ice.png';
import shot from '../../../public/img/faq/shot.png';

export default function Faq({
  list = faq
}) {
  const faqID = "faq";

  const currentSection = useSelector((state) => state.common.currentSection) === faqID;

  const titleClasses = classNames(styles.faq__title, 'h2', 'text-uppercase', 'text-center');

  return (
    <Section menuTitle="faq" id={faqID} className={styles.faq}>
      <div className={styles.faq__ice}>
        <Image 
          width="160"
          height="160"
          src={ice}
          alt="Ice cream"
        />
      </div>
      <div className={styles.faq__coffee}>
        <Image 
          width="160"
          height="160"
          src={coffee}
          alt="Coffee"
        />
      </div>
      <div className={styles.faq__shot}>
        <Image 
          width="160"
          height="160"
          src={shot}
          alt="Bullet"
        />
      </div>
      <Container>
        <animated.h2 
          className={titleClasses}
          style={ANIMATED_TITLE(currentSection)}
        >
          <span className='text-cherry'>FAQ</span> and need more text here
        </animated.h2>
        <ul className={styles.faq__list}>
          {list.map((item, i) => <FaqItem heading={item.heading} body={item.body} index={i} visible={currentSection} key={i}/>)}
        </ul>
      </Container>
    </Section>
  );
}