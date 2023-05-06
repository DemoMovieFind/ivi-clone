import { FormattedMessage } from "react-intl";
import styles from "./HeaderDropDown.module.css";
import NavList from "../navList/NavList";
import clsx from "clsx";

type Column = {
  href: string;
  translationId: string;
};
interface HeaderDropDownProps {
  className?: string;
  doubleColumn: Column[];
  singleColumnСountries: Column[];
  singleColumnYears: Column[];
  sideContent: Column[];
}

export default function HeaderDropDown({
  className,
  doubleColumn,
  singleColumnСountries,
  singleColumnYears,
  sideContent,
}: HeaderDropDownProps) {
  return (
    <div className={clsx(styles.headerDropdownBody, className)}>
      <div className={styles.notify}>
        <div className={styles.body}>
          <div className={styles.grid}></div>
        </div>
      </div>
      <div className={styles.movies_menu_item}>
        <div className={styles.body} id="dropDownBody">
          <div className={styles.grid}>
            <div className={styles.dropdownContent}>
              <div className={styles.doubleColumn}>
                <div className={styles.dropdownLinksList}>
                  <div className={styles.filmsNavList_title}>
                    <FormattedMessage id="films_nav_list_title" />
                  </div>
                  <NavList
                    links={doubleColumn}
                    vertical={true}
                    headerTranslationId=""
                    className={styles.filmsNavList_element}
                    ulClassName={styles.doubleList}
                  />
                </div>
              </div>
              <div className={styles.singleColumn}>
                <div className={styles.dropdownLinksList}>
                  <div className={styles.filmsNavList_title}>
                    <FormattedMessage id="countries_nav_list_title" />
                  </div>
                  <NavList
                    links={singleColumnСountries}
                    vertical={true}
                    headerTranslationId=""
                    className={styles.filmsNavList_element}
                    ulClassName={styles.singleList}
                  />
                </div>
                <div
                  className={styles.dropdownLinksList}
                  style={{ marginTop: "24px" }}
                >
                  <div className={styles.filmsNavList_title}>
                    <FormattedMessage id="select_card_years" />
                  </div>
                  <NavList
                    links={singleColumnYears}
                    vertical={true}
                    headerTranslationId=""
                    className={styles.filmsNavList_element}
                    ulClassName={styles.singleList}
                  />
                </div>
              </div>
              <div className={styles.sideContent}>
                <div>
                  <div className={styles.gutter}>
                    <div
                      className={styles.gutterStripe}
                      style={{ transform: "translateY(0px)" }}
                    ></div>
                  </div>
                  <NavList
                    links={sideContent}
                    vertical={true}
                    headerTranslationId=""
                    className={styles.filmsNavList_element}
                    ulClassName={styles.singleList}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
