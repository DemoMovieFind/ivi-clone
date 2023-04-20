import React, { useState } from "react";
import styles from "./LiElement.module.css";
import { clsx } from "clsx";

export interface LiElementProps {
  appearance?: "";
  className?: string;
  value?: string;
}

export const LiElement = ({
  appearance = "",
  className,
  value,
}: LiElementProps) => {
  const [isChecked, setIsChecked] = useState(false);
  function handleChange() {
    setIsChecked(!isChecked);
  }
  return (
    <li className={clsx(styles.itemCheckbox, styles[appearance], className)}>
      <label className={styles.label} onChange={handleChange}>
        <input
          className={styles.input}
          type="checkbox"
          name="checked"
          value={value}
          checked={isChecked}
        />
        <div className={clsx(styles.inputText, isChecked ? styles.active : "")}>
          {value}
        </div>
        <div className={styles.checkbox}>
          <div
            className={clsx(styles.icon, isChecked ? styles.active : "")}
          ></div>
        </div>
      </label>
    </li>
  );
};
