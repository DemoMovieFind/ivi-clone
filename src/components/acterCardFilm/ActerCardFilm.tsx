import React from "react";
import styles from "./ActerCardFilm.module.css";
import clsx from "clsx";
import { Info } from "./info/Info";
import { Button } from "../buttons/Button";

export interface ActerCardFilmProps {
  appearance?: "default";
  className?: string;
  img?: string;
  year: string;
  title: string;
  rating: string;
}

export const ActerCardFilm = ({
  appearance = "default",
  className,
  img,
  year,
  title,
  rating,

  ...props
}: ActerCardFilmProps) => {
  return (
    <div
      className={clsx(styles.card, styles[appearance], className)}
      {...props}
    >
      <img src={img} alt="img_film" className={styles.filmImage} />
      <div className={styles.main}>
        <Info year={year} title={title} rating={rating} />
        <Button size="large">Подробнее</Button>
      </div>
    </div>
  );
};
