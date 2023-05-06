import { ChangeEvent, useState } from "react";
import { useEffect } from "react";
import AuthIcon from "../AuthIcon/AuthIcon";
import NavList from "../navList/NavList";
import styles from "./Header.module.css";
import LanguageSwitch from "../languageSwitch/LanguageSwitch";

import HeaderDropDown from "../headerDropDown/HeaderDropDown";
import { Link } from "react-router-dom";
import {
  filmSingleColumnСountries,
  filmDoubleColumn,
  filmSingleColumnYears,
  sideContentSelections,
  seriesDoubleColumn,
  seriesSingleColumnYears,
  seriesSideContentSelections,
  seriesSingleColumnСountries,
} from "./list";
import { FormattedMessage } from "react-intl";
import clsx from "clsx";

export type HeaderPropsType = {
  languageSwitchHandler: (event: ChangeEvent<HTMLSelectElement>) => void;
};

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/" style={{ zIndex: "10" }}>
        <div className={styles.logo}></div>
      </Link>

      <div className={styles.menuWrapper}>
        <div className={clsx(styles.mainLink, styles.link)}>
          <Link to="/">
            {" "}
            <FormattedMessage id="nav_list_myIvi" />
          </Link>
        </div>

        <div className={clsx(styles.newLink, styles.link)}>
          <Link to="https://www.ivi.ru/new">
            <FormattedMessage id="nav_list_new" />
          </Link>
        </div>
        <div className={clsx(styles.filmsLink, styles.link)}>
          <Link to="/movies">
            <FormattedMessage id="nav_list_films" />
          </Link>

          <div className={styles.headerDropWrapper}>
            <HeaderDropDown
              doubleColumn={filmDoubleColumn}
              singleColumnСountries={filmSingleColumnСountries}
              singleColumnYears={filmSingleColumnYears}
              sideContent={sideContentSelections}
            />
          </div>
        </div>
        <div className={clsx(styles.seriesLink, styles.link)}>
          <Link to="/series">
            <FormattedMessage id="nav_list_series" />
          </Link>

          <div className={styles.headerDropWrapper}>
            <HeaderDropDown
              doubleColumn={seriesDoubleColumn}
              singleColumnСountries={seriesSingleColumnСountries}
              singleColumnYears={seriesSingleColumnYears}
              sideContent={seriesSideContentSelections}
            />
          </div>
        </div>
        <div className={clsx(styles.cartoonsLink, styles.link)}>
          <Link to="https://www.ivi.ru/animation">
            {" "}
            <FormattedMessage id="nav_list_cartoons" />
          </Link>

          <div className={styles.headerDropWrapper}>
            <HeaderDropDown
              doubleColumn={filmDoubleColumn}
              singleColumnСountries={filmSingleColumnСountries}
              singleColumnYears={filmSingleColumnYears}
              sideContent={sideContentSelections}
            />
          </div>
        </div>
        <div className={clsx(styles.TVLink, styles.link)}>
          <Link to="https://www.ivi.ru/tvchannels">
            <FormattedMessage id="nav_list_TV" />
          </Link>
        </div>
      </div>

      <div className={styles.wrapper}>
        <LanguageSwitch />
        <AuthIcon />
      </div>
    </header>
  );
};

export default Header;
