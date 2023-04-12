import clsx from "clsx";
import styles from "./NavList.module.css";
import { Link, BrowserRouter } from "react-router-dom";

export type NavListPropsType = {
  links:Array<{
    href:string,
    text:string,
    marked?:boolean,
  }>,
  vertical?:boolean,
  header?:string
}

const NavList = ({
  links = [
    { href:'link1', text:'Фильмы' },
    { href:'link2', text:'Сериалы' },
    { href:'link3', text:'Активация сертификата', marked:true },
  ],
  vertical=false,
  header='Разделы'
}:NavListPropsType) => {
  
  const items = links.map((link,index) => {
    const {href,text,marked} = link;
    return( 
      <li className={clsx(styles.link, link.marked && styles["item-marked"])} 
      key={index}>
        <Link className={marked ? styles['link-marked'] : ''} to={href}>{text}</Link>
      </li>
    )
  }) 
  return (
    <nav className={styles["nav-list"]}>
      <BrowserRouter>
        <ul className={clsx(styles.links, vertical ? styles['links-vertical'] : styles['links-horizontal'])}>
          {header}
          {items}
        </ul>
      </BrowserRouter>
    </nav>
  )
}

export default NavList;