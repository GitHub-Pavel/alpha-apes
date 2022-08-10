import classNames from 'classnames';

import { endpoints } from '../../../constants/endpoints';

import styles from '../../../styles/components/Sections/About.module.scss';

export default function AboutSliderItem({
  img,
  alt,
  number
}) {
  let posY = 'var(--position-y-last)';

  const imgClasses = classNames('swiper-lazy', styles["about-slider__img"], 'about-slider-image');
  const order = number % 4;

  if (order === 1 || order === 3)
    posY = 'var(--position-y-middle)';

  if (order === 2)
    posY = 'var(--position-y-initial)';

  return (
    <>
      <img 
        width="345"
        height="345"
        data-src={img}
        alt={alt}
        className={imgClasses}
      />
      <div className={classNames("swiper-lazy-preloader", styles["about-slider__loader"])}/>
      <style jsx>{`
        .swiper-lazy-loaded {
          opacity: 1;
        }

        .about-slider-image {
          --position-y-last: 40px;
          --position-y-middle: 20px;
          --position-y-initial: 0px;

          transform: translateY(${posY});
        }

        @media screen and (max-width: ${endpoints.sm}px) {
          .about-slider-image {
            --position-y-last: 30px;
            --position-y-middle: 15px;
          }
        }
      `}</style>
    </>
  );
}