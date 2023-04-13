import clsx from "clsx";
import styles from "./NavList.module.css";
import { Link, BrowserRouter } from "react-router-dom";
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
  links = [
    { href:'link1', translationId:'nav_list_films' },
    { href:'link2', translationId:'nav_list_series' },
    { href:'link3', translationId:'nav_list_certificate_activation', marked:true },
  ],
  vertical=false,
  headerTranslationId='nav_list_sections'
}:NavListPropsType) => {
  
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
      <BrowserRouter>
        <ul className={clsx(styles.links, vertical ? styles['links-vertical'] : styles['links-horizontal'])}>
          {<FormattedMessage id={headerTranslationId} />}
          {items}
        </ul>
      </BrowserRouter>
    </nav>
  )
}

export default NavList;