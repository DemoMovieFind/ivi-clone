import React from "react";
import styles from "./Properties.module.css";
import clsx from "clsx";

export interface PropertiesProps {
  className?: string;
  years: number;
  country: string;
  genre: string;
  duration?: string;
}

export const Properties: React.FC<PropertiesProps> = ({
  className,
  years,
  country,
  genre,
  duration,
}) => {
  return (
    <div className={clsx(styles.propertiesInfo, className)}>
      <div className={styles.propertiesRow}>
        {years}, {country}, {genre}
      </div>
      <div className={styles.propertiesRowDown}>{duration}</div>
    </div>
  );
};
