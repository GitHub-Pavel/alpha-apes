import { useSelector } from "react-redux";
import classNames from 'classnames';
import MainMenuItem from "./MainMenuItem";

import styles from '../../styles/components/Menus/MainMenu.module.scss';

export default function MainMenu() {
  const sections = useSelector((state) => state.common.sections);

  const listProps = {
    className: classNames(styles.list, 'main-menu')
  }

  if (!sections.length)
    return false;
  
  return (
    <ul {...listProps}>
      {sections.map((section, i) => <MainMenuItem section={section} key={i} />)}
      <style jsx>{`
        .main-menu {
          grid-template-columns: repeat(${sections.length}, max-content);
        }
      `}</style>
    </ul>
  )
}