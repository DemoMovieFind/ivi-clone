import React from 'react'
import styles from './SortPlank.module.css'
import { FontIcon } from '../../icons/FontIcon';
import clsx from 'clsx';


export interface SortPlankPropsType {
  className?: string;
  isActive?: boolean;
  text: string;
  id?: string;
}

const SortPlank = ({
  className,
  isActive,
  text,
  id,
}: SortPlankPropsType) => {
  return (
    <div className={clsx(styles.plankWrapper, className)} id={id}>
      <div className={clsx(styles.plank, isActive ? styles.active : "")}>
        <div className={styles.textWrapper}>
          <div className={styles.text}>{text}</div>
        </div>
        <div
          className={clsx(styles.dropdownIcon, isActive ? styles.active : "")}
        >
          <FontIcon appearance="dropDownArrow" />
        </div>
      </div>
    </div>
  )
}

export default SortPlank