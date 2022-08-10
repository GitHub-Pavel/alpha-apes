import Preloader from "./Preloader";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actionsCommon from "../redux/actions/common";
import _ from 'loadsh';

import 'swiper/css';
import 'swiper/css/lazy';

export default function Layout({ 
  children,
  header,
  footer
}) {
  const dispatch = useDispatch();
  
  const currentSectionRef = useRef(null);
  const sectionsRef = useRef([]);

  const sections = useSelector((state) => state.common.sections);

  const stepLoadingHandler = () => {
    dispatch(actionsCommon.setStepLoading());
  };

  const scrollHandler = () => {
    _.map(sectionsRef.current, function(section) {
      const offset = 600;
      const scrollTop = window.scrollY;
      const offsetTop = section.target.offsetTop - offset;
      const endpoint = section.target.offsetTop + section.target.offsetHeight - offset;

      if (scrollTop >= offsetTop && scrollTop < endpoint) {
        if (currentSectionRef.current !== section.target.getAttribute('id')) {
          currentSectionRef.current = section.target.getAttribute('id');
          dispatch(actionsCommon.setCurrentSection(currentSectionRef.current));
        }
      }
    });
  };

  useEffect(() => {
    sectionsRef.current = sections;
    scrollHandler();
  }, [sections]);
  
  useEffect(() => {
    scrollHandler();

    window.addEventListener('scroll', scrollHandler);
    window.addEventListener('load', stepLoadingHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
      window.removeEventListener('load', stepLoadingHandler);
    };
  }, []);

  return (
    <div id="site">
      <Preloader />
      {header && header}
      <main id="site-main">{children}</main>
      {footer && footer}
    </div>
  );
}
