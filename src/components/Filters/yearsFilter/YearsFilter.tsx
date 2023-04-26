/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useState } from "react";
import styles from "./YearsFilter.module.css";
import { FormattedMessage, useIntl } from "react-intl";
import { FontIcon } from "../../icons/FontIcon";
import clsx from "clsx";
import { useSearchParams } from "react-router-dom";

export interface YearsFilterPropsType {
  items?: string[];
}

const YearsFilter = ({
  items = [
    "2023",
    "2022",
    "2021",
    "2020",
    "2019",
    "2018",
    "2017",
    "2016",
    "2022-2023",
    "2021-2022",
    "2020-2022",
    "2019-2020",
    "2010-2020",
    "2010-2015",
    "2000-2010",
    "1990-2000",
    "1980-1990",
    "до 1980",
  ],
}: YearsFilterPropsType) => {
  const [, setSearchParams] = useSearchParams();
  const urlParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlParams.entries());

  const [isActive, setIsActive] = useState(false);
  const refUl = useRef<HTMLUListElement>(null);
  const refInputText = useRef<HTMLDivElement>(null);

  const openList = (e: any) => {
    let list = [];
    let dropDownArrow: any = "";

    setIsActive(!isActive);
    if (isActive) {
      refUl.current ? (refUl.current.style.display = `none`) : "";
      refInputText.current
        ? (refInputText.current.style.backgroundColor = `#312b45`)
        : "";
      if (
        e.target.classList[0] == styles.selectBoxTitle ||
        e.target.classList[0] == styles.selectBoxExtra ||
        e.target.classList[2] == styles.selectBoxIcon
      ) {
        list =
          e.target.parentElement.parentElement.parentElement.parentElement
            .parentElement.children;
      } else {
        list =
          e.target.parentElement.parentElement.parentElement.parentElement
            .children;
      }
      for (let i = 0; i < list.length; i++) {
        if (i == 0 || i == 1) {
          list[i].children[1].style.display = "none";
          list[i].children[0].children[0].children[0].classList.remove(
            styles.nonActiveColor
          );
          dropDownArrow =
            list[i].children[0].children[0].children[0].children[1];
          if (dropDownArrow.classList.length > 1) {
            dropDownArrow.classList.remove(styles.nonActiveColor);
            dropDownArrow.classList.remove(styles.nonActiveRotate);
          }
        }
      }
    } else if (!isActive) {
      refUl.current ? (refUl.current.style.display = `flex`) : "";
      refInputText.current
        ? (refInputText.current.style.backgroundColor = `#7e798f`)
        : "";
      if (
        e.target.classList[0] == styles.selectBoxTitle ||
        e.target.classList[0] == styles.selectBoxExtra ||
        e.target.classList[2] == styles.selectBoxIcon
      ) {
        list =
          e.target.parentElement.parentElement.parentElement.parentElement
            .parentElement.children;
      } else {
        list =
          e.target.parentElement.parentElement.parentElement.parentElement
            .children;
      }
      for (let i = 0; i < list.length; i++) {
        if (i == 0 || i == 1) {
          list[i].children[1].style.display = "none";
          list[i].children[0].children[0].children[0].classList.add(
            styles.nonActiveColor
          );
          dropDownArrow =
            list[i].children[0].children[0].children[0].children[1];
          if (dropDownArrow.classList.length > 1) {
            dropDownArrow.classList.add(styles.nonActiveColor);
            dropDownArrow.classList.add(styles.nonActiveRotate);
          }
        }
      }
    }
  };

  const intl = useIntl();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const addChecked = (e: any) => {
    document
      .querySelectorAll(`.${styles.checked}`)
      .forEach((elem) => elem.classList.remove(`${styles.checked}`));
    e.target?.classList.add(`${styles.checked}`);

    if (
      e.target.textContent == "Все годы" ||
      e.target.textContent == "All years"
    ) {
      setSearchParams({ ...params, year: "all" });
    } else if (
      e.target.textContent.length == 8 ||
      e.target.textContent.length == 9
    ) {
      setSearchParams({ ...params, year: e.target.textContent.split(" ")[0] });
    } else if (e.target.textContent.length == 7) {
      setSearchParams({ ...params, year: e.target.textContent.split(" ")[1] });
    }
  };

  return (
    <>
      <div className={styles.selectBox}>
        <div
          className={styles.selectBoxCurrent}
          tabIndex={1}
          onClick={openList}
        >
          <div className={styles.selectBoxValue}>
            <input
              className={styles.selectBoxInput}
              type="radio"
              id="0"
              name="year"
              defaultChecked
            />
            <div className={styles.selectBoxInputText} ref={refInputText}>
              <div className={styles.selectBoxTitle}>
                <FormattedMessage id="select_card_years" />
              </div>
              <FontIcon
                appearance="dropDownArrow"
                className={clsx(
                  styles.selectBoxIcon,
                  isActive ? styles.active : ""
                )}
              />
            </div>
          </div>
          {items.map((item, index) => {
            return (
              <div key={index} className={styles.selectBoxValue}>
                <input
                  className={styles.selectBoxInput}
                  type="radio"
                  id={(index + 1).toString()}
                  name="year"
                />
                <div className={styles.selectBoxInputText}>
                  <div className={styles.selectBoxTitle}>
                    <FormattedMessage id="select_card_years" />
                  </div>
                  <div className={styles.selectBoxExtra}>
                    {item.trim().length == 4
                      ? `${item} ${intl.formatMessage({
                          id: `select_card_year`,
                        })}`
                      : item}
                  </div>
                  <FontIcon
                    appearance="dropDownArrow"
                    className={clsx(
                      styles.selectBoxIcon,
                      isActive ? styles.active : ""
                    )}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <ul className={styles.dropListWrapper} id="ul" ref={refUl}>
          <li onClick={addChecked}>
            <label className={styles.selectBoxOption} htmlFor="0" aria-hidden>
              <div className={styles.selectBoxExtra}>
                <FormattedMessage id="select_card_all_years" />
              </div>
            </label>
          </li>
          {items.map((item, index) => {
            return (
              <li key={index} onClick={addChecked}>
                <label
                  className={styles.selectBoxOption}
                  htmlFor={(index + 1).toString()}
                  aria-hidden
                >
                  <div className={styles.selectBoxExtra}>
                    {item.trim().length == 4
                      ? `${item} ${intl.formatMessage({
                          id: `select_card_year`,
                        })}`
                      : item}
                  </div>
                </label>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default YearsFilter;
