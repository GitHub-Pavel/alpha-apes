import Container from "./Container";
import styles from "/styles/ComingSoon/ComingSoon.module.scss";
import back from "../public/img/comingsoon/back.png";
import ape2 from "../public/img/comingsoon/ape2.png";
import ape_1 from "../public/img/comingsoon/apes/ape_1.png";
import ape_2 from "../public/img/comingsoon/apes/ape_2.png";
import ape_3 from "../public/img/comingsoon/apes/ape_3.png";
import ape_4 from "../public/img/comingsoon/apes/ape_4.png";
import ape_5 from "../public/img/comingsoon/apes/ape_5.png";
import nft_calendar from "../public/img/comingsoon/nft-calendar-transparent.png";
import Image from "next/image";

export default function ComingSoon() {
  return (
    <section
      className={styles.coming__soon}
      style={{ backgroundImage: `url(${back.src})` }}
    >
      <Container type="large">
        <div className={styles.coming__soon_wrap}>
          <div className={styles.coming__soon_image}>
            <div className={styles.coming__soon_image__wrap}>
              <Image
                className={styles.coming__soon_image__image}
                src={ape2}
                alt="Ape"
                title="Ape"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div className={styles.coming__soon_content}>
            <h1 className={styles.coming__soon_content__title}>
              alpha apes
              <span>coming soon</span>
            </h1>
            <div className={styles.coming__soon_content__content}>
              <p>
                The world of Alpha Apes is filled with fun and excitement. But
                the story of how they came to be is a tale as old as time! It
                all started when Momma Ape and Poppa Ape met, fell in love, and
                decided to start a family.
              </p>
              <p>
                We can’t say who exactly Momma and Poppa Ape are (yet), but you
                definitely don’t want to pass up on the opportunity to hang out
                with their kids! The Alpha Apes are the newest and most fun NFT
                collection to hit the Metaverse. This blinged-out party pack
                takes life by the horns – but they’re always ultra chill.
              </p>
            </div>
            <a
              className={styles.coming__soon__link}
              href="https://nftcalendar.io/"
            >
              <div className={styles.coming__soon__link_calendar}>
                <Image src={nft_calendar} width={120} height={120} />
              </div>
              <span className={styles.coming__soon__link_text}>See on</span>
            </a>
            <div className={styles.coming__soon_content__images}>
              <Image src={ape_1} width={120} height={120} />
              <Image src={ape_2} width={120} height={120} />
              <Image src={ape_3} width={120} height={120} />
              <Image src={ape_4} width={120} height={120} />
              <Image src={ape_5} width={120} height={120} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
