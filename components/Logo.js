import Image from "next/image";
import Link from "next/link";

import { endpoints } from '../constants/endpoints';

import logo from '../public/img/logo_second.svg';

export default function Logo() {
  return (
    <>
      <Link href="/">
        <a className="logo">
          <Image 
            src={logo}
            width="180"
            height="60"
            alt="Alpha Apes"
            title="Alpha Apes"
          />
        </a>
      </Link>
      <style jsx>{`
        .logo {
          pointer-events: all;
        }

        @media screen and (max-width: ${endpoints.lg}px) {
          .logo {
            width: 150px;
            height: 50px;
          }
        }
        
        @media screen and (max-width: ${endpoints.md}px) {
          .logo {
            width: 180px;
            height: 60px;
          }
        }
        
        @media screen and (max-width: ${endpoints.xs}px) {
          .logo {
            width: 150px;
            height: 50px;
          }
        }
        
        @media screen and (max-width: ${endpoints.el}px) {
          .logo {
            width: 130px;
            height: 43px;
          }
        }
      `}</style>
    </>
  );
}