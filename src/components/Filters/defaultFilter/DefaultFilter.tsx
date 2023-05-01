import clsx from "clsx";
import React, { useEffect, useState } from "react";
import styles from "./DefaultFilter.module.css";
import { useSearchParams } from "react-router-dom";

interface DefaultFilterProps {
  className?: string;
}

export const DefaultFilter = ({ className }: DefaultFilterProps) => {
  const [, setSearchParams] = useSearchParams();
  const [isActive, setIsActive] = useState(false);

  const resetFilter = () => {
    if (
      document.URL === "http://localhost:3006/movies"
    ) {
      null;
    } else {
      setSearchParams("");
      setTimeout(() => {
        setSearchParams("");
      }, 100);
    }
  };

  useEffect(() => {
    if (
      document.URL === "http://localhost:3006/movies"
    ) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  }, [document.URL]);

  useEffect(() => {
    setSearchParams('');
    setIsActive(false);
  }, [])

  return (
    <div className={clsx(styles.wrapper, className)} onClick={resetFilter}>
      <div
        className={clsx(
          styles.button,
          isActive ? styles.active : styles.isActive
        )}
      >
        <div className={styles.icon}></div>
        Сбросить фильтры
      </div>
    </div>
  );
};
