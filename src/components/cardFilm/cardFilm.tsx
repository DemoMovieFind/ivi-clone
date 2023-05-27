import styles from "./cardFilm.module.css";
import clsx from "clsx";
import { HoardsContainer } from "./hoardsContainer/hoardsContainer";
import { Rating } from "./rating/Rating";
import { BarChart } from "./barChart/BarChart";
import { Properties } from "./properties/Properties";
import { NameFilm } from "./nameFilm/NameFilm";
import { Price } from "./price/Price";
import { FilmMainCard } from "../../types/entities/FilmMainCard";
import { useAppSelector } from "../../store/hooks";
import { selectLang } from "../../store/langState";

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
  const langState = useAppSelector(selectLang);

  const ratingNum = film.scoreAVG?.toFixed(1) ?? 1.1;
  const ratingFirstNum = ratingNum.toString()[0] ?? '0';
  const ratingSecondNum = ratingNum.toString()[2] == '0' ? '1' : ratingNum.toString()[2] ?? '0';


  return (
    <div
      className={clsx(styles.card, styles[appearance], className)}
      {...props}
    >
      <div className={styles.imageWrapper}>
        <div className={styles.posterWrapper}>
          <div className={styles.propertiesInner}>
            <Rating rating={`${+ratingFirstNum},${+ratingSecondNum}`} />
            <BarChart count="сюжет" value={`${+ratingFirstNum}${+ratingSecondNum}`} />
            <Properties
              years={film.year}
              country={film.countries[0]?.name}
              genre={film.genres[0]?.name}
              className={styles.propertiesWrapper}
            />
          </div>
          <HoardsContainer className={styles.posterHoardsWrapper} />
        </div>

        <img src={film.mainImg} alt={film.name} className={styles.filmImage} />
      </div>

      <div className={styles.nameWrapper}>
        <NameFilm
          name={
            langState.lang === 'ru-RU'
              ? film.name : (film.name_en !== undefined ? film.name_en : film.name)
          } />
        <Price price={false} />
      </div>
    </div>
  );
};
