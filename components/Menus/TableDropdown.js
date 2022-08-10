import classNames from "classnames";
import { useSelector } from "react-redux";

import Container from "../Container";
import FallBananas from "../UI/FallBananas";
import ClockwiseButton from "../Buttons/ClockwiseButton";

import { useWindowSize } from "../../hooks/useWindowSize";

import { endpoints } from "../../constants/endpoints";

import styles from "../../styles/components/Menus/TableDropdown.module.scss";

import logout from '../../public/img/logout.svg';
import TableDropdownItem from "./TableDropdownItem";

export default function TableDropdown({
  toggled = false,
  close
}) {
  const type = useSelector((state) => state.common.currentType);
  const sections = useSelector((state) => state.common.sections);

  const [innerWidth, innerHeight] = useWindowSize();

  const blockClasses = classNames(styles["table-dropdown"], {
    [styles["table-dropdown_active"]]: toggled
  });

  return (
    <div className={blockClasses}>
      <FallBananas />
      <div className={styles["table-dropdown__wrap"]}>
        <Container>
          {innerWidth <= endpoints.xs && <>
            {type === 'connect' ?
              <ClockwiseButton href="#" onClick={(e) => e.preventDefault()}>connect wallet</ClockwiseButton>
            :
              <ClockwiseButton icon={logout} alt="Logout" href="#" onClick={(e) => e.preventDefault()}>0x705d9...676197c</ClockwiseButton>
            }
          </>}
          <ul className={styles["table-dropdown__list"]}>
            {sections.map((section, i) => <TableDropdownItem close={close} section={section} key={i} />)}
          </ul>
        </Container>
      </div>
    </div>
  );
}