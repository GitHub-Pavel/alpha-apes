import { Swiper, SwiperSlide } from 'swiper/react';
import { Lazy, Autoplay } from 'swiper';

import AboutSliderItem from './AboutSliderItem';

import { useWindowSize } from '../../../hooks/useWindowSize';
import { endpoints } from '../../../constants/endpoints';

import styles from '../../../styles/components/Sections/About.module.scss';

const initialList = [
  {img: "/img/about/slider/0.png", alt: "Сyberpunk"},
  {img: "/img/about/slider/1.png", alt: "Sailor"},
  {img: "/img/about/slider/2.png", alt: "Rocker"},
  {img: "/img/about/slider/3.png", alt: "Jazzman"},
  {img: "/img/about/slider/4.png", alt: "Сyber Hippie"},
  {img: "/img/about/slider/5.png", alt: "Zombie"}
]

export default function AboutSlider({
  list = initialList
}) {
  let coefficient = 4.5;

  const [innerWidth, innerHeight] = useWindowSize();
  const initHandler = (swiper) => swiper.lazy.loadInSlide(swiper.activeIndex-1);
  const slideChangeHandler = (swiper) => swiper.update();

  if (innerWidth >= endpoints.sm)
    coefficient = 9;
  
  if (innerWidth >= endpoints.lg)
    coefficient = 11;

  return (
    <Swiper
      modules={[Lazy, Autoplay]}
      lazy={true}
      loop={true}
      grabCursor={true}
      spaceBetween={20}
      slidesPerView={2}
      slidesOffsetBefore={innerWidth/coefficient}
      initialSlide={1}
      autoplay={true}
      delay={4000}
      loopAdditionalSlides={10}
      className={styles["about-slider"]}
      onInit={initHandler}
      onSlideChange={slideChangeHandler}
      breakpoints={{
        [endpoints.sm]: {
          slidesPerView: 4
        },
        [endpoints.lg]: {
          slidesPerView: 5
        },
      }}
    >
      {list.map((item, i) => 
        <SwiperSlide key={i} className={styles["about-slider__slide"]}>
          <AboutSliderItem img={item.img} alt={item.alt} number={i}/>
        </SwiperSlide>
      )}
    </Swiper>
  );
}