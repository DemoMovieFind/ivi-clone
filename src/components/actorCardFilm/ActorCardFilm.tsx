import React, { useEffect, useState } from "react";
import styles from "./ActorCardFilm.module.css";
import clsx from "clsx";
import { Info } from "./info/Info";
import { FormattedMessage } from "react-intl";
import { FilmWatchCardType } from "../../types/entities/FilmWatchCardType";
import { NavLink } from "react-router-dom";
import Loader from "../loader/Loader";
import { Button } from "../buttons/Button";
import { FilmMainCard } from "../../types/entities/FilmMainCard";
import axios from "axios";

export interface ActorCardFilmProps {
  appearance?: "default";
  className?: string;
  film: FilmWatchCardType;
}

export const ActorCardFilm = ({
  appearance = "default",
  className,
  film,
  ...props
}: ActorCardFilmProps) => {

  const [currentFilm, setCurrentFilm] = useState<FilmMainCard>()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    film?.id && getCurrentFilm(film.id)
  }, [])

  const getCurrentFilm = async (id: number) => {
    setLoading(true)
    await axios.get(`http://188.120.248.77/films/${id}`)
      .then(data => setCurrentFilm(data.data))
      .then(() => setLoading(false))
  }

  const ratingNum = currentFilm?.scoreAVG?.toFixed(1) ?? 1.1
  const lang = localStorage.getItem('lang')

  return (
    loading ?
      <Loader filmLoader />
      :
      <div
        className={clsx(styles.card, styles[appearance], className)}
        {...props}
      >
        <img
          src={film?.mainImg}
          alt="img_film"
          className={styles.filmImage}
        />
        <div className={styles.main}>
          <Info year={film?.year} title={lang == 'ru-RU' ? film?.name : film.name_en} rating={+ratingNum} />
          <Button size="large">
            <NavLink to={`/movies/${film?.name}`} state={currentFilm}>
              <FormattedMessage id="actor_card_film_detailed" />
            </NavLink>
          </Button>
        </div>
      </div>
  );
};
