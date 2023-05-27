import React from "react";
import styles from "./Info.module.css";
import clsx from "clsx";
import { FormattedMessage } from "react-intl";

export interface InfoProps {
  className?: string;
  year?: string;
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
        <FormattedMessage id="person_card_rate" />:<div>{rating}</div>
      </div>
    </div>
  );
};
