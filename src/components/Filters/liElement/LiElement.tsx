import React, { useState, useEffect } from "react";
import styles from "./LiElement.module.css";
import { clsx } from "clsx";
import { useSearchParams } from "react-router-dom";

export interface LiElementProps {
  appearance?: "";
  className?: string;
  value: string;
  argument: string;
}

export const LiElement = ({
  appearance = "",
  className,
  value,
  argument,
}: LiElementProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const [searchParams] = useSearchParams();

  function handleChange() {
    setIsChecked(!isChecked);
  }

  useEffect(() => {
    if (searchParams.getAll(argument).join(' ').split(' ').indexOf(value) === -1) {
      setIsChecked(false);
    } else {
      setIsChecked(true);
    }
  }, [searchParams]);

  return (
    <li className={clsx(styles.itemCheckbox, styles[appearance], className)}>
      <label className={styles.label} onChange={handleChange}>
        <input
          // onChange={() => { '' }}
          className={styles.input}
          type="checkbox"
          name="checked"
          value={value}
          defaultChecked={isChecked}
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
