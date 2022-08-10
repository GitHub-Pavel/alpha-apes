import { useState } from 'react';
import classNames from 'classnames';

export default function ScrollToButton({
  className,
  to, // id
  children,
  hoverClass = "scroll-to-button_active"
}) {
  const [hover, setHover] = useState(false);

  const buttonClasses = classNames(className, {
    [hoverClass]: hover
  })

  const hoverHandler = () => setHover(!hover);
  const clickHandler = () => {
    const el = document.getElementById(to);
    window.scrollTo({
      top: el.offsetTop,
      behavior: "smooth"
    })
  }

  return (
    <button
      className={buttonClasses}
      onClick={clickHandler}
      onMouseEnter={hoverHandler}
      onMouseLeave={hoverHandler}
    >
      {children}
    </button>
  )
}