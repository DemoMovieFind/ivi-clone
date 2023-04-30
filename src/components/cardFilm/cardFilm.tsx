import styles from "./cardFilm.module.css";
import clsx from "clsx";
import { HoardsContainer } from "./hoardsContainer/hoardsContainer";
import { Rating } from "./rating/Rating";
import { BarChart } from "./barChart/BarChart";
import { Properties } from "./properties/Properties";
import { NameFilm } from "./nameFilm/NameFilm";
import { Price } from "./price/Price";
import { FilmMainCard } from "../../types/entities/FilmMainCard";

export interface CardFilmProps {
  appearance?: "default";
  className?: string;
  img?: string;
  film: FilmMainCard;
}

export const CardFilm = ({
  appearance = "default",
  className,
  film,
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
              years={film.year}
              country={film.countries[0].name}
              genre={film.genres[0].name}
              duration="4 сезона"
              className={styles.propertiesWrapper}
            />
          </div>
          <HoardsContainer className={styles.posterHoardsWrapper} />
        </div>

        <img src={film.mainImg} alt={film.name} className={styles.filmImage} />
      </div>

      <div className={styles.nameWrapper}>
        <NameFilm name={film.name} />
        <Price price={false} />
      </div>
    </div>
  );
};
