import { FormattedMessage } from "react-intl";
import styles from "./HeaderDropDown.module.css";
import NavList from "../navList/NavList";
import clsx from "clsx";
import { useRef, useState } from "react";
import { useClickAway } from "react-use";

interface HeaderDropDownProps {
  className?: string;
}

export default function HeaderDropDown({ className }: HeaderDropDownProps) {
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
                    <FormattedMessage id="films_nav_list_title" />{" "}
                  </div>
                  <NavList
                    links={[
                      { href: "/", translationId: "films_nav_list_arthouse" },
                      { href: "/", translationId: "films_nav_list_action" },
                      { href: "/", translationId: "films_nav_list_western" },
                      { href: "/", translationId: "films_nav_list_military" },
                      { href: "/", translationId: "films_nav_list_detectives" },
                      {
                        href: "/",
                        translationId: "films_nav_list_for_the_whole_family",
                      },
                      {
                        href: "/",
                        translationId: "films_nav_list_for_children",
                      },
                      {
                        href: "/",
                        translationId: "films_nav_list_documentary",
                      },
                      { href: "/", translationId: "films_nav_list_dramas" },
                      { href: "/", translationId: "films_nav_list_historical" },
                      { href: "/", translationId: "films_nav_list_disasters" },
                      { href: "/", translationId: "films_nav_list_comedies" },
                      { href: "/", translationId: "films_nav_list_crime" },
                      { href: "/", translationId: "films_nav_list_melodramas" },
                      { href: "/", translationId: "films_nav_list_mystical" },
                      { href: "/", translationId: "films_nav_list_by_comics" },
                      { href: "/", translationId: "films_nav_list_adventures" },
                      { href: "/", translationId: "films_nav_list_sports" },
                      { href: "/", translationId: "films_nav_list_thrillers" },
                      { href: "/", translationId: "films_nav_list_horrors" },
                      { href: "/", translationId: "films_nav_list_fantatik" },
                      { href: "/", translationId: "films_nav_list_fantasy" },
                    ]}
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
                    <FormattedMessage id="films_nav_list_title" />{" "}
                  </div>
                  <NavList
                    links={[
                      { href: "/", translationId: "films_nav_list_arthouse" },
                      { href: "/", translationId: "films_nav_list_action" },
                      { href: "/", translationId: "films_nav_list_western" },
                      { href: "/", translationId: "films_nav_list_military" },
                    ]}
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
                    <FormattedMessage id="films_nav_list_title" />{" "}
                  </div>
                  <NavList
                    links={[
                      { href: "/", translationId: "films_nav_list_action" },
                      { href: "/", translationId: "films_nav_list_action" },
                      { href: "/", translationId: "films_nav_list_action" },
                      { href: "/", translationId: "films_nav_list_military" },
                    ]}
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
