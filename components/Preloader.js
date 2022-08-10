import classNames from 'classnames';
import { useSpring, animated } from "react-spring";
import { useSelector, useDispatch } from "react-redux";
import * as actionsCommon from "../redux/actions/common";

import preloader from "../public/img/preloader.svg";

export default function Preloader() {
  const dispatch = useDispatch();
  
  const isLoading = useSelector((state) => state.common.isLoading);
  const loadingSteps = useSelector((state) => state.common.loadingSteps);
  
  const currentPercent = 100 / loadingSteps[1] * loadingSteps[0];
  
  const preloaderClasses = classNames("preloader", {
    ["preloader_none"]: isLoading
  });

  const handleLoading = () => dispatch(actionsCommon.setLoading(true));

  const { number } = useSpring({
    from: { number: 0 },
    number: currentPercent,
    delay: 200,
    config: {
      duration: 600
    },
    onRest: () => loadingSteps[0] === loadingSteps[1] && !isLoading && handleLoading()
  });

  return (
    <>
      <div className={preloaderClasses}>
        <img width="120" height="120" src={preloader.src} className="preloader__img" alt="preloader" title="preloader" />
        <div className="preloader__text">
          <animated.span>{number.to(n => parseInt(n))}</animated.span>%
        </div>
      </div>
      <style jsx>{`
          .preloader {
            height: 100vh;
            z-index: 9999;
            position: fixed;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 100%;
            content: "";
            background-color: #FFEC00;
            transition: opacity .4s ease-out .6s;
          }

          .preloader_none {
            opacity: 0;
            pointer-events: none;
          }

          .preloader__text {
            font-weight: 700;
            font-size: 12px;
            line-height: 20px;
            text-align: center;
            text-transform: uppercase;
          }

          .preloader__img {
            animation: preloaderImg 3s ease-in infinite;
            display: block;
            margin-bottom: 40px
          }

          @keyframes preloaderImg {
            0% {
              opacity: 1;
            }

            40% {
              opacity: .2;
            }

            70% {
              opacity: 1;
            }
            
            100% {
              opacity: 1;
            }
          }
      `}</style>
    </>
  );
}
