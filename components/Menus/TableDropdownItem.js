import classNames from "classnames";
import { useSelector } from "react-redux";

import styles from "../../styles/components/Menus/TableDropdown.module.scss";

export default function TableDropdownItem({
  section,
  close
}) {
  const currentSection = useSelector((state) => state.common.currentSection);
  const clickHandler = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: section.target.offsetTop - document.querySelector('header').offsetHeight,
      behavior: "smooth"
    });
    close();
  }
  const buttonClasses = classNames(styles["table-dropdown__button"], {
    [styles["table-dropdown__button_active"]]: section.target.getAttribute('id') === currentSection
  });

  return (
    <li className={styles["table-dropdown__item"]}>
      <button onClick={clickHandler} className={buttonClasses}>{section.name}</button>
    </li>
  );
}