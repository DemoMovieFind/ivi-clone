import React from "react";
import styles from "./ActorCardFilm.module.css";
import clsx from "clsx";
import { Info } from "./info/Info";
import { ButtonLink } from "../buttons/ButtonLink";
import { Film } from "../../types/entities/Film";
import { FormattedMessage } from "react-intl";

export interface ActorCardFilmProps {
  appearance?: "default";
  className?: string;
  film: Film;
}

export const ActorCardFilm = ({
  appearance = "default",
  className,
  film,
  ...props
}: ActorCardFilmProps) => {
  const href = `https://www.ivi.ru/watch/${film.id}`;
  return (
    <div
      className={clsx(styles.card, styles[appearance], className)}
      {...props}
    >
      <img
        src={film?.posters?.small?.url}
        alt="img_film"
        className={styles.filmImage}
      />
      <div className={styles.main}>
        <Info year={film.year} title={film.title} rating={film.rating?.ivi} />
        <ButtonLink href={href} size="large">
          <FormattedMessage id="actor_card_film_detailed" />
        </ButtonLink>
      </div>
    </div>
  );
};
