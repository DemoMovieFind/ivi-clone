import React, { useEffect, useState } from "react";
import styles from "./GenreIcon.module.css";
import { clsx } from "clsx";
import { FontIcon } from "../../../icons/FontIcon";
import { useSearchParams } from "react-router-dom";

export interface GenreIconProps {
  className?: string;
  genre:
    | "Драмы"
    | "Комедии"
    | "Боевики"
    | "Триллеры"
    | "Приключения"
    | "Зарубежные"
    | "Мелодрамы"
    | "Фантастика"
    | "Фэнтези"
    | "Семейные";
}

export const GenreIcon = ({ className, genre }: GenreIconProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isActive, setIsActive] = useState(false);

  const arrayQueryParams: string[] = searchParams.getAll("genres") || [];

  const handleOnChange = () => {
    if (searchParams.getAll("genres").indexOf(genre) === -1) {
      arrayQueryParams.push(genre);
      setIsActive(true);
    } else {
      arrayQueryParams.splice(searchParams.getAll("genres").indexOf(genre), 1);
      setIsActive(false);
    }
    setSearchParams({ genres: arrayQueryParams });
  };

  useEffect(() => {
    if (searchParams.getAll("genres").indexOf(genre) === -1) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  }, [searchParams]);

  return (
    <div
      className={clsx(styles.icon, className, isActive ? styles.active : "")}
      onClick={handleOnChange}
    >
      <div className={styles.iconWrapper}>
        {genre === "Драмы" && <FontIcon appearance="genre_drama" />}
        {genre === "Комедии" && <FontIcon appearance="genre_comedy" />}
        {genre === "Боевики" && <FontIcon appearance="genre_action" />}
        {genre === "Триллеры" && <FontIcon appearance="genre_triller" />}
        {genre === "Приключения" && <FontIcon appearance="genre_adventure" />}
        {genre === "Зарубежные" && <FontIcon appearance="genre_foreign" />}
        {genre === "Мелодрамы" && <FontIcon appearance="genre_melodrama" />}
        {genre === "Фантастика" && <FontIcon appearance="genre_fantastic" />}
        {genre === "Фэнтези" && <FontIcon appearance="genre_fantasy" />}
        {genre === "Семейные" && <FontIcon appearance="genre_family" />}
      </div>
      <div className={styles.title}>{genre}</div>
    </div>
  );
};
