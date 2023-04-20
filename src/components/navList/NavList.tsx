import clsx from "clsx";
import styles from "./NavList.module.css";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

export type NavListPropsType = {
  links:Array<{
    href:string,
    translationId:string,
    marked?:boolean,
  }>,
  vertical?:boolean,
  headerTranslationId?:string
}

const NavList = ({
  links, 
  vertical=false,
  headerTranslationId=''
}:NavListPropsType) => {
  const headerId = headerTranslationId === '' ? "empty_string" : headerTranslationId
  
  const items = links.map((link,index) => {
    const {href,translationId,marked} = link;
    return( 
      <li className={clsx(styles.link, link.marked && styles["item-marked"])} 
      key={index}>
        <Link 
          className={marked ? styles['link-marked'] : ''} 
          to={href}>
            {<FormattedMessage id={translationId} />}
        </Link>
      </li>
    )
  }) 
  return (
    <nav className={styles["nav-list"]}>
      <ul className={clsx(styles.links, vertical ? styles['links-vertical'] : styles['links-horizontal'])}>
        {<FormattedMessage id={headerId} />}
        {items}
      </ul>
    </nav>
  )
}

export default NavList;