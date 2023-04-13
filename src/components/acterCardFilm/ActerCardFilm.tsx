import React from "react";
import styles from "./ActerCardFilm.module.css";
import clsx from "clsx";
import { Info } from "./info/Info";
import { Button } from "../buttons/Button";

export interface ActerCardFilmProps {
  appearance?: "default";
  className?: string;
  img?: string;
}

export const ActerCardFilm = ({
  appearance = "default",
  className,
  img,
  ...props
}: ActerCardFilmProps) => {
  return (
    <div
      className={clsx(styles.card, styles[appearance], className)}
      {...props}
    >
      <img src={img} alt="img_film" className={styles.filmImage} />
      <div className={styles.main}>
        <Info year="1999" title="Терминатор" rating="9,9" />
        <Button size="large">Подробнее</Button>
      </div>
    </div>
  );
};
