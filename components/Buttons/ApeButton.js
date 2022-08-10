import classNames from "classnames";
import Image from "next/image";

import styles from '../../styles/components/Buttons/ApeButton.module.scss';

export default function ApeButton ({
  title,
  description,
  image = "/img/button-ape.png",
  onClick,
  tagName = 'button',
  href,
  type,
  alt = "Ape button",
  className
}) {
  const CustomTag = tagName;
  const buttonProps = {
    onClick,
    className: classNames(styles.button, className)
  };
  const titleClasses = classNames(styles.button__title, {
    [styles.button__title_alone]: !description
  });
  const contentClasses = classNames( styles.button__content, {
    [styles.button__content_alone]: !description
  });

  if (href)
    buttonProps.href = href;
  if (type)
    buttonProps.type = type;

  return (
    <CustomTag {...buttonProps}>
      <span className={contentClasses}> 
        <span className={titleClasses}>{title}</span>
        {description &&
          <span className={styles.button__desc}>{description}</span>
        }
      </span>
      <span className={styles.button__img}>
        <Image 
          width="190"
          height="160"
          src={image}
          alt={alt}
        />
      </span>
      <span className={styles.button__bg}/>
    </CustomTag>
  );
}