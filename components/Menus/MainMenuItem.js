import classNames from "classnames";
import { useSelector } from "react-redux";

import styles from '../../styles/components/Menus/MainMenu.module.scss';

export default function MainMenuItem({
  section
}) {
  const currentSection = useSelector((state) => state.common.currentSection);
  const clickHandler = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: section.target.offsetTop - document.querySelector('header').offsetHeight,
      behavior: "smooth"
    });
  }
  const buttonClasses = classNames(["text-small","text-uppercase","text-bold", styles.button], {
    [styles.button_active]: section.target.getAttribute('id') === currentSection
  });

  return (
    <li>
      <button onClick={clickHandler} className={buttonClasses}>
        <span className={styles.button__box}>
          <span className={styles.button__black}>{section.name}</span>
          <span className={styles.button__cherry}>{section.name}</span>
        </span>
      </button>
    </li>
  );
}