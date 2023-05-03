import React, { useEffect, useState } from "react";
import styles from "./ActorCardFilm.module.css";
import clsx from "clsx";
import { Info } from "./info/Info";
import { FormattedMessage } from "react-intl";
import { FilmWatchCardType } from "../../types/entities/FilmWatchCardType";
import { NavLink } from "react-router-dom";
import Loader from "../loader/Loader";
import { Button } from "../buttons/Button";

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

  const [currentFilm, setCurrentFilm] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    film.id && getCurrentFilm(film.id)
  }, [])

  const getCurrentFilm = async (id: number) => {
    setLoading(true)
    await fetch(`http://188.120.248.77/films/${id}`)
      .then(res => res.json())
      .then(data => setCurrentFilm(data))
      .then(() => setLoading(false))
  }


  return (
    loading ?
      <Loader />
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
          <Info year={film.year} title={film.name} rating={film.rating ? film.rating.ivi : 7.1} />
          <Button size="large">
            <NavLink to={`/movies/${film.name}`} state={currentFilm}>
              <FormattedMessage id="actor_card_film_detailed" />
            </NavLink>
          </Button>
        </div>
      </div>
  );
};
