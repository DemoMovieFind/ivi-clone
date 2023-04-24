import { ChangeEvent } from 'react';
import AuthIcon from '../AuthIcon/AuthIcon';
import NavList from '../navList/NavList';
import styles from './Header.module.css';
import LanguageSwitch from '../languageSwitch/LanguageSwitch';

export type HeaderPropsType = {
  languageSwitchHandler:(event:ChangeEvent<HTMLSelectElement>)=>void
}

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
      <div className={styles.wrapper}>
        <LanguageSwitch/>
        <AuthIcon/>
      </div>
    </header>
  )
}

export default Header;