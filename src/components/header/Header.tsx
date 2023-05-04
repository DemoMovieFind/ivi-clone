import { ChangeEvent, useState } from "react";
import { useEffect } from "react";
import AuthIcon from "../AuthIcon/AuthIcon";
import NavList from "../navList/NavList";
import styles from "./Header.module.css";
import LanguageSwitch from "../languageSwitch/LanguageSwitch";

import HeaderDropDown from "../headerDropDown/HeaderDropDown";
import { Link } from "react-router-dom";

export type HeaderPropsType = {
  languageSwitchHandler: (event: ChangeEvent<HTMLSelectElement>) => void;
};

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const leave = () => {
    setIsActive(false);
  };

  useEffect(() => {
    const filmsNavMenu = document.querySelector("#nav_list_films");

    filmsNavMenu?.addEventListener("mouseenter", () => {
      setIsActive(true);
    });

    filmsNavMenu?.addEventListener("mouseleave", (event: any) => {
      const related = event.relatedTarget ? event.relatedTarget.id : "unknown";
      if (related === "dropDownBody") {
        return;
      } else {
        setIsActive(false);
      }
    });
  });

  return (
    <header className={styles.header}>
      <Link to="/" style={{ zIndex: "10" }}>
        <div className={styles.logo}></div>
      </Link>

      <div className={styles.menuWrapper}>
        <NavList
          links={[
            { href: "/", translationId: "nav_list_myIvi" },
            { href: "https://www.ivi.ru/new", translationId: "nav_list_new" },
            { href: "/movies", translationId: "nav_list_films" },
            { href: "/", translationId: "nav_list_series" },
            { href: "/", translationId: "nav_list_cartoons" },
            {
              href: "https://www.ivi.ru/tvchannels",
              translationId: "nav_list_TV",
            },
          ]}
          vertical={false}
          headerTranslationId=""
          className={styles.navList}
        />
      </div>
      <div
        className={styles.headerDropWrapper}
        style={
          isActive
            ? { display: "block", visibility: "visible", opacity: "1" }
            : { display: "none", visibility: "hidden", opacity: "0" }
        }
        onMouseLeave={leave}
      >
        <HeaderDropDown />
      </div>

      <div className={styles.wrapper}>
        <LanguageSwitch />
        <AuthIcon />
      </div>
    </header>
  );
};

export default Header;
