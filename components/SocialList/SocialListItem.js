import styles from '../../styles/components/SocialList.module.scss';

export default function SocialListItem({
  icon,
  href,
  alt
}) {
  return (
    <li className={styles.item}>
      <a 
        href={href} 
        className={styles.link}
        target="_blank"
        rel="noopener noreferrer"
        title={alt}
      >
        {icon} 
      </a>
    </li>
  );
}