import React from "react";
import styles from "./cardFilm.module.css";
import clsx from "clsx";
import { HoardsContainer } from "./hoardsContainer/hoardsContainer";
import { Rating } from "./rating/Rating";
import { BarChart } from "./barChart/BarChart";
import { Properties } from "./properties/Properties";
import { NameFilm } from "./nameFilm/NameFilm";
import { Price } from "./price/Price";

export interface CardFilmProps {
  appearance?: "default";
  className?: string;
  img?: string;
}

export const CardFilm = ({
  appearance = "default",
  className,
  img,
  ...props
}: CardFilmProps) => {
  return (
    <div
      className={clsx(styles.card, styles[appearance], className)}
      {...props}
    >
      <div className={styles.imageWrapper}>
        <div className={styles.posterWrapper}>
          <div className={styles.propertiesInner}>
            <Rating rating="8,5" />
            <BarChart count="сюжет" value="70" />
            <Properties
              years="2007-2014"
              country="Россия"
              genre="Ужасы"
              duration="4 сезона"
              className={styles.propertiesWrapper}
            />
          </div>
          <HoardsContainer className={styles.posterHoardsWrapper} />
        </div>

        <img src={img} alt="img_film" className={styles.filmImage} />
      </div>

      <div className={styles.nameWrapper}>
        <NameFilm name="Колобок" />
        <Price price={false} />
      </div>
    </div>
  );
};
