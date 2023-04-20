import React from "react";
import styles from "./GenreIconCheckbox.module.css";
import { clsx } from "clsx";
import { FontIcon } from "../icons/FontIcon";

export interface GenreIconCheckboxProps {
  appearance?: "";
  className?: string;
  genre: "drama";
}

const genreName = {
  drama: "Драма",
};

export const GenreIconCheckbox = ({
  appearance = "",
  className,
  genre,
}: GenreIconCheckboxProps) => {
  return (
    <div className={clsx(styles.icon, styles[appearance], className)}>
      <div className={styles.iconWrapper}>
        <FontIcon appearance={"genre_drama"} />
      </div>
      <div className={styles.title}>{genreName[genre]}</div>
    </div>
  );
};
