import { useState } from "react";
import classNames from "classnames";
import Image from 'next/image';

import Polyhedron from "../../UI/Polyhedron";

import { endpoints } from "../../../constants/endpoints";
import { discord } from "../../../constants/social-list";

import styles from '../../../styles/components/Sections/Community.module.scss';

import arrowright from '../../../public/img/arrow-right.svg';
import discordSvg from '../../../public/img/discord.svg';

export default function CommunityButton() {
  const [btnHover, setBtnHover] = useState(false);
  const btnClasses = classNames(styles["community-btn"], "community-btn", {
    ["community-btn_active"]: btnHover
  });
  const btnColor = btnHover ? "#5865F2" : "#262626";
  const btnHoverHandler = () => setBtnHover(!btnHover);

  return (
    <>
      <a
        href={discord}
        className={btnClasses}
        onMouseEnter={btnHoverHandler}
        onMouseLeave={btnHoverHandler}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Polyhedron
          color={btnColor}
          size={300}
        >
          <span className={styles["community-btn__wrap"]}>
            <span className={styles["community-btn__arrow"]}>
              <Image 
                width={30}
                height={20}
                src={arrowright}
                alt="Discord button arrow"
              />
            </span>
            <span className={styles["community-btn__title"]}>join to community</span>
            <span className={styles["community-btn__desc"]}>10k members</span>
            <span className={styles["community-btn__icon"]}>
              <Image 
                width={30}
                height={30}
                src={discordSvg}
                alt="Discord"
              />
            </span>
          </span>
        </Polyhedron>
      </a>
      <style jsx>{`
        @media screen and (min-width: ${endpoints.md}px) {
          .community-btn_active :global(.polyhedron__icon) {
            animation: spin 4s linear infinite;
          }
        } 

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
}