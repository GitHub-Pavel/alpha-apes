import classNames from 'classnames';
import styles from '../../styles/components/UI/Polyhedron.module.scss';

export default function Polyhedron({
  size = 40,
  color = '#DC41A0',
  children,
  className
}) {
  return (
    <>
      <span className={classNames(styles.wrap, 'polyhedron', className)}>
        <span className={styles.box}>{children}</span> 
        <svg className={classNames(styles.polyhedron, 'polyhedron__icon')} width={size} height={size} viewBox="0 0 300 300" fill={color} xmlns="http://www.w3.org/2000/svg">
          <path d="M150 0L225 20.0962L279.904 75L300 150L279.904 225L225 279.904L150 300L75 279.904L20.0962 225L0 150L20.0962 75L75 20.0962L150 0Z" />
        </svg>
      </span>
      <style jsx>{`
        .polyhedron {
          width: ${size}px;
          height: ${size}px;
        }
      `}</style>
    </>
  );
}