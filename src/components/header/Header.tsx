import { ChangeEvent, useState } from "react";
import { useEffect } from "react";
import AuthIcon from "../AuthIcon/AuthIcon";
import NavList from "../navList/NavList";
import styles from "./Header.module.css";
import LanguageSwitch from "../languageSwitch/LanguageSwitch";

import HeaderDropDown from "../headerDropDown/HeaderDropDown";

export type HeaderPropsType = {
  languageSwitchHandler: (event: ChangeEvent<HTMLSelectElement>) => void;
};

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const leave = () => {
    setIsActive(false);
  };

  useEffect(() => {
    const filmsNavMenu = document.querySelector("#movies");

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
      <div className={styles.logo}></div>

      <div className={styles.menuWrapper}>
        <NavList
          links={[
            { href: "/", translationId: "nav_list_myIvi" },
            { href: "/", translationId: "nav_list_new" },
            { href: "movies", translationId: "nav_list_films" },
            { href: "/", translationId: "nav_list_series" },
            { href: "/", translationId: "nav_list_cartoons" },
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
            ? { visibility: "visible", opacity: "1" }
            : { visibility: "hidden", opacity: "0" }
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
