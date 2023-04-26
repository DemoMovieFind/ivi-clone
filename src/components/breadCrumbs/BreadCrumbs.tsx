import clsx from "clsx";
import React from "react";
import styles from "./BreadCrumbs.module.css";
import { FormattedMessage } from "react-intl";

interface BreadCrumbsProps {
  className?: string;
  genre?: string[];
  country?: string[];
}

export const BreadCrumbs = ({
  className,
  genre,
  country,
}: BreadCrumbsProps) => {
  return (
    <div className={clsx(styles.wrapper, className)}>
      <a href="/" className={styles.link}>
        <FormattedMessage id="nav_list_myIvi" />
      </a>
      {genre || country ? (
        <span>
          <span className={styles.slash}>/</span>
          <a href="/" className={styles.link}>
            <FormattedMessage id="nav_list_films" />
          </a>
        </span>
      ) : (
        <span className={styles.filter}>
          <span className={styles.slash}>/</span>
          <FormattedMessage id="nav_list_films" />
        </span>
      )}

      {genre?.length ? (
        <span className={styles.filter}>
          <span className={styles.slash}>/</span>
          {genre}
        </span>
      ) : (
        ""
      )}
      {country?.length ? (
        <span className={styles.filter}>
          <span className={styles.slash}>/</span>
          {country}
        </span>
      ) : (
        ""
      )}
    </div>
  );
};
