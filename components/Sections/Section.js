import { useRef, useEffect } from 'react';
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import * as actionsCommon from "../../redux/actions/common";

export default function Section({
  id,
  menuTitle,
  children,
  className,
  color = "transparent",
  tagName = "section",
  onMouseDown = () => {},
  onMouseMove = () => {}
}) {
  const CustomTag = tagName;
  const sectionRef = useRef();

  const dispatch = useDispatch();
  const sections = useSelector((state) => state.common.sections);
  const handleLoaded = () => {
    let isset = false;

    const section = {
      target: sectionRef.current,
      name: menuTitle
    };
  
    sections.map((item, i) => {
      if (item.menuTitle === section.menuTitle)
        isset = true;
    });

    if (!menuTitle || isset)
      return;

    dispatch(actionsCommon.setSections(section));
  } 

  const sectionProps = {
    className: classNames(className, 'section'),
    id,
    onMouseDown,
    onMouseMove,
    style: {
      backgroundColor: color
    }
  }

  useEffect(() => {
    handleLoaded();
  }, []);

  return (
    <CustomTag {...sectionProps} ref={sectionRef}>
      {children}
    </CustomTag>
  )
}