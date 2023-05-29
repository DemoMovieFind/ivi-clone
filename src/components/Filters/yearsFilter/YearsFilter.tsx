import { useEffect, useRef, useState } from "react";
import styles from "./YearsFilter.module.css";
import { FormattedMessage, useIntl } from "react-intl";
import { FontIcon } from "../../icons/FontIcon";
import clsx from "clsx";
import { useSearchParams } from "react-router-dom";
import { useClickAway } from "react-use";

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
  ],
}: YearsFilterPropsType) => {
  const [, setSearchParams] = useSearchParams();
  const urlParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlParams.entries());

  useEffect(() => {
    params["year"] ? ''
      : document
        .querySelectorAll(`.${styles.checked}`)
        .forEach((elem) => elem.classList.remove(`${styles.checked}`));
  }, [params])

  const [isActive, setIsActive] = useState(false);

  const ref = useRef(null);

  useClickAway(ref, () => {
    setIsActive(false);
  });

  const openList = () => {
    setIsActive(!isActive);
  };

  const intl = useIntl();

  const addChecked = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLLIElement;
    document
      .querySelectorAll(`.${styles.checked}`)
      .forEach((elem) => elem.classList.remove(`${styles.checked}`));
    target?.classList.add(`${styles.checked}`);

    if (
      target.textContent == "Все годы" ||
      target.textContent == "All years"
    ) {
      setSearchParams({ ...params, year: "all" });
    } else if (
      target.textContent?.length == 8 ||
      target.textContent?.length == 9
    ) {
      setSearchParams({ ...params, year: target.textContent.split(" ")[0] });
    } else if (target.textContent?.length == 7) {
      setSearchParams({ ...params, year: target.textContent.split(" ")[1] });
    }
  };

  return (
    <>
      <div className={styles.selectBox} ref={ref}>
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
            <div
              className={styles.selectBoxInputText}
              style={isActive ? { backgroundColor: '#7e798f' } : { backgroundColor: '#312b45' }}
            >
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
                <div className={styles.selectBoxInputText}
                  style={isActive ? { backgroundColor: '#7e798f' } : { backgroundColor: '#312b45' }}
                >
                  <div className={styles.selectBoxTitle}
                  >
                    <FormattedMessage id="select_card_years" />
                  </div>
                  <div className={styles.selectBoxExtra}
                    style={params['year'] ? { display: 'flex' } : { display: 'none' }}
                  >
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
        <ul
          className={styles.dropListWrapper} id="ul"
          style={isActive ? { display: 'flex' } : { display: 'none' }}
        >
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
