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
                      {
                        href: "/movies?genres=Артхаус",
                        translationId: "films_nav_list_arthouse",
                      },
                      {
                        href: "/movies?genres=Боевики",
                        translationId: "films_nav_list_action",
                      },
                      {
                        href: "/movies?genres=Вестерн",
                        translationId: "films_nav_list_western",
                      },
                      {
                        href: "/movies?genres=Военные",
                        translationId: "films_nav_list_military",
                      },
                      {
                        href: "/movies?genres=Детективные",
                        translationId: "films_nav_list_detectives",
                      },
                      {
                        href: "/movies?genres=Для\u00A0всей\u00A0семьи",
                        translationId: "films_nav_list_for_the_whole_family",
                      },
                      {
                        href: "/movies?genres=Для\u00A0детей",
                        translationId: "films_nav_list_for_children",
                      },
                      {
                        href: "/movies?genres=Документальные",
                        translationId: "films_nav_list_documentary",
                      },
                      {
                        href: "/movies?genres=Драмы",
                        translationId: "films_nav_list_dramas",
                      },
                      {
                        href: "/movies?genres=Исторические",
                        translationId: "films_nav_list_historical",
                      },
                      {
                        href: "/movies?genres=Катастрофы",
                        translationId: "films_nav_list_disasters",
                      },
                      {
                        href: "/movies?genres=Комедии",
                        translationId: "films_nav_list_comedies",
                      },
                      {
                        href: "/movies?genres=Криминал",
                        translationId: "films_nav_list_crime",
                      },
                      {
                        href: "/movies?genres=Мелодрамы",
                        translationId: "films_nav_list_melodramas",
                      },
                      {
                        href: "/movies?genres=Мистические",
                        translationId: "films_nav_list_mystical",
                      },
                      {
                        href: "/movies?genres=По комиксам",
                        translationId: "films_nav_list_by_comics",
                      },
                      {
                        href: "/movies?genres=Приключения",
                        translationId: "films_nav_list_adventures",
                      },
                      {
                        href: "/movies?genres=Спорт",
                        translationId: "films_nav_list_sports",
                      },
                      {
                        href: "/movies?genres=Триллеры",
                        translationId: "films_nav_list_thrillers",
                      },
                      {
                        href: "/movies?genres=Ужасы",
                        translationId: "films_nav_list_horrors",
                      },
                      {
                        href: "/movies?genres=Фантастика",
                        translationId: "films_nav_list_fantatik",
                      },
                      {
                        href: "/movies?genres=Фэнтезни",
                        translationId: "films_nav_list_fantasy",
                      },
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
                    <FormattedMessage id="countries_nav_list_title" />
                  </div>
                  <NavList
                    links={[
                      {
                        href: "/",
                        translationId: "countries_nav_list_russian",
                      },
                      {
                        href: "/",
                        translationId: "countries_nav_list_foreign",
                      },
                      {
                        href: "/",
                        translationId: "countries_nav_list_soviet_cinema",
                      },
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
