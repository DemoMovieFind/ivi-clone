import AuthIcon from '../AuthIcon/AuthIcon';
import NavList from '../navList/NavList';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}></div>
      <NavList 
        links = {[
          { href:'/', translationId:'nav_list_myIvi' },
          { href:'/', translationId:'nav_list_new' },
          { href:'/', translationId:'nav_list_films'},
          { href:'/', translationId:'nav_list_series'},
          { href:'/', translationId:'nav_list_cartoons'},
        ]}
        vertical={false}
        headerTranslationId=''
      />
      <AuthIcon/>
    </header>
  )
}

export default Header;