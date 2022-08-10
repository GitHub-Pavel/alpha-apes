import classNames from 'classnames';
import Image from 'next/image';
import { useRef, useEffect } from 'react';

import { useWindowSize } from '../../../hooks/useWindowSize';
import { endpoints } from '../../../constants/endpoints';

import styles from '../../../styles/components/Sections/RoadMap.module.scss';

import firstlineDesktop from '../../../public/img/road-map/desktop/line-0.svg';
import firstlineLeptop from '../../../public/img/road-map/leptop/line-0.svg';

function ItemLineWrap({
  imgClass,
  line,
  lineWidth,
  lineHeight,
  lineTable,
  lineTableWidth,
  lineTableHeight,
  index,
  addItemRef
}) {
  const itemRef = useRef();

  const [innerWidth, innerHeight] = useWindowSize();

  useEffect(() => {
    addItemRef(itemRef.current);
  }, []);

  return (
    <div className={styles["roadmap-item__line-wrap"]}>
      <div className={styles["roadmap-item__circle-box"]} ref={itemRef}>
        <div className={styles["roadmap-item__circle"]}/>
      </div>
      {index === 0 &&
        <div className={styles["roadmap-item__line_first"]}>
          {innerWidth > endpoints.lg ?
            <Image 
              width="225"
              height="15"
              alt="First line"
              src={firstlineDesktop}
            />
          :
            <Image 
              width="72"
              height="10"
              alt="First line"
              src={firstlineLeptop}
            />
          }
        </div>
      }
      <div className={styles[imgClass]}>
        {innerWidth > endpoints.lg ?
          <Image 
            width={lineWidth}
            height={lineHeight}
            alt="Inner line"
            src={line}
          />
        :
          <Image 
            width={lineTableWidth}
            height={lineTableHeight}
            alt="Inner line"
            src={lineTable}
          />
        }
      </div>
    </div>
  );
}

export default function RoadMapItem({
  heading,
  desc,
  icon,
  color,
  line,
  lineWidth,
  lineHeight,
  lineTable,
  lineTableWidth,
  lineTableHeight,
  index,
  addItemRef
}) {
  const blockStyles = {
    ['--current-color']: color
  };

  const blockClasses = classNames(styles["roadmap-item"], {
    [styles["roadmap-item_even"]]: index%2 === 1
  });

  const titleClasses = classNames([styles["roadmap-item__title"], "h3"]);
  const descClasses = classNames([styles["roadmap-item__desc"], "entry-content"]);

  const itemFooterOdd = (
    <>
      <div className={styles["roadmap-item__icon-wrap"]}>
        <div className={styles["roadmap-item__icon"]}>
          <Image 
            width="40"
            height="40"
            src={icon}
            alt="icon"
          />
        </div>
      </div>
      <ItemLineWrap 
        imgClass="roadmap-item__line_odd"
        line={line}
        lineWidth={lineWidth}
        lineHeight={lineHeight}
        lineTable={lineTable}
        lineTableWidth={lineTableWidth}
        lineTableHeight={lineTableHeight}
        index={index}
        addItemRef={addItemRef}
      />
    </>
  );
  
  const itemFooterEven = (
    <>
      <ItemLineWrap 
        imgClass="roadmap-item__line_even"
        line={line}
        lineWidth={lineWidth}
        lineHeight={lineHeight}
        lineTable={lineTable}
        lineTableWidth={lineTableWidth}
        lineTableHeight={lineTableHeight}
        index={index}
        addItemRef={addItemRef}
      />
      <div className={styles["roadmap-item__icon-wrap"]}>
        <div className={styles["roadmap-item__icon"]}>
          <Image 
            width="40"
            height="40"
            src={icon}
            alt="icon"
          />
        </div>
      </div>
    </>
  );

  return (
    <div style={blockStyles} className={blockClasses}>
      {index%2 === 1 && itemFooterEven}
      <div className={styles["roadmap-item__content"]}>
        <h3 className={titleClasses}>{heading}</h3>
        <div className={descClasses}>{desc}</div>
      </div>
      {index%2 === 0 && itemFooterOdd}
    </div>
  );
}