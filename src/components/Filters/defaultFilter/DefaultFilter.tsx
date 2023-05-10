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

  const urlParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlParams.entries());

  const resetFilter = () => {
    if (
      document.URL === "http://localhost:3006/movies"
    ) {
      null;
    } else {
      setSearchParams("");
      setTimeout(() => {
        setSearchParams("");
      }, 600);
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
    if (/^(http|https):\/\/localhost:3006\/movies[^"]+(rating=1\+10)/gm.test(document.URL)) {
      delete params["rating"];
      setSearchParams({ ...params });
    }
    if (document.URL === "http://localhost:3006/movies") {
      setIsActive(false)
    }
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
