import React from "react";
import styles from "./Info.module.css";
import clsx from "clsx";

export interface InfoProps {
  className?: string;
  year?: number;
  title?: string;
  rating?: number | null;
}

export const Info: React.FC<InfoProps> = ({
  className,
  year,
  title,
  rating,
}) => {
  return (
    <div className={clsx(styles.info, className)}>
      <div className={styles.year}>{year}</div>
      <div className={styles.title}>{title}</div>
      <div className={styles.rating}>
        Рейтинг Иви:<div>{rating}</div>
      </div>
    </div>
  );
};
