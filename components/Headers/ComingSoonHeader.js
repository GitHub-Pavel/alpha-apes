import logo from "../../public/img/logo.svg";
import Image from "next/image";
import Container from "../Container";
import styles from "../../styles/components/Headers/ComingSoonHeader.module.scss";

export default function ComingSoonHeader() {
  return (
    <header className={styles.header__comingsoon}>
      <Container>
        <div className={styles.header__comingsoon_image}>
          <Image
            src={logo}
            width="295"
            height="60"
            alt="Alpha Apes"
            title="Alpha Apes"
          />
        </div>
      </Container>
    </header>
  );
}
