import styles from "./NavList.module.css";
import { Link } from "react-router-dom";

export type NavListPropsType = {
  links:Array<{
    href:string,
    text:string,
  }>,
}

const NavList = (props:NavListPropsType) => {
  const {links} = props;
  const items = links.map((link,index)=>{
    return( 
      <li className={styles.item} key={index}>
        <Link to={link.href}>{link.text}</Link>
      </li>
    )
  }) 
  return (
    <nav className={styles["nav-list"]}>
      <ul>
        {items}
      </ul>
    </nav>
  )
}

export default NavList;