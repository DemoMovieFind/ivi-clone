import React from 'react'
import styles from './SelectCard.module.css'
import arrow from '../../image/selectIcon/arrow.svg'
import { FormattedMessage, useIntl } from 'react-intl';


export interface SelectCardPropsType {
  items: string[];
}

const SelectCard = ({
  items,
}: SelectCardPropsType) => {

  const intl = useIntl();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const addChecked = (e: any) => {
    document.querySelectorAll(`.${styles.checked}`).forEach(elem => elem.classList.remove(`${styles.checked}`));
    e.target?.classList.add(`${styles.checked}`)
  }


  return (
    <>
      <div className={styles.selectBox}>
        <div className={styles.selectBoxCurrent} tabIndex={0}>
          <div className={styles.selectBoxValue}>
            <input className={styles.selectBoxInput} type="radio" id="0" name='year' defaultChecked />
            <div className={styles.selectBoxInputText} >
              <div className={styles.selectBoxTitle}><FormattedMessage id='select_card_years' /></div>
            </div>
          </div>
          {items.map((item, index) => {
            return <div key={index} className={styles.selectBoxValue}>
              <input className={styles.selectBoxInput} type='radio' id={(index + 1).toString()} name='year' />
              <div className={styles.selectBoxInputText}>
                <div className={styles.selectBoxTitle}><FormattedMessage id='select_card_years' /></div>
                <div className={styles.selectBoxExtra}>
                  {item.trim().length == 4 ? `${item} ${intl.formatMessage({ id: `select_card_year` })}` : item}
                </div>
              </div>
            </div>
          })}
          <img className={styles.selectBoxIcon} src={arrow} alt="Arrow Icon" aria-hidden />
        </div>
        <ul className={styles.selectBoxList}>
          <li onClick={addChecked}>
            <label className={styles.selectBoxOption} htmlFor="0" aria-hidden>
              <div className={styles.selectBoxExtra}><FormattedMessage id='select_card_all_years' /></div>
            </label>
          </li>
          {items.map((item, index) => {
            return <li key={index} onClick={addChecked}>
              <label className={styles.selectBoxOption} htmlFor={(index + 1).toString()} aria-hidden>
                <div className={styles.selectBoxExtra}>
                  {item.trim().length == 4 ? `${item} ${intl.formatMessage({ id: `select_card_year` })}` : item}
                </div>
              </label>
            </li>
          })}
        </ul>
      </div>
    </>
  )
}

export default SelectCard