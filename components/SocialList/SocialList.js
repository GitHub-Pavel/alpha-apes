import SocialListItem from "./SocialListItem";
import { socialList } from "../../constants/social-list";
import styles from '../../styles/components/SocialList.module.scss';
import classNames from "classnames";

export default function SocialList({
  list = socialList,
  className
}) {
  return (
    <>
      <ul className={classNames(styles.list, 'social-list', className)}>
        {list.map((item, i) => <SocialListItem href={item.link} icon={item.icon} alt={item.alt} key={i}/>)}
      </ul>
      <style jsx>{`
        .social-list {
          grid-template-columns: repeat(${list.length}, 1fr);
        }
      `}</style>
    </>
  );
}