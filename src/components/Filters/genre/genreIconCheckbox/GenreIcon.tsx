/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import styles from "./GenreIcon.module.css";
import { clsx } from "clsx";
import { FontIcon } from "../../../icons/FontIcon";
import { useSearchParams } from "react-router-dom";

export interface GenreIconProps {
  className?: string;
  genre:
  | "Драма"
  | "Комедия"
  | "Боевик"
  | "Триллер"
  | "Приключения"
  | "Зарубежный"
  | "Мелодрама"
  | "Фантастика"
  | "Фэнтези"
  | "Семейный";
}

export const GenreIcon = ({ className, genre }: GenreIconProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlParams.entries());

  const [isActive, setIsActive] = useState(false);

  const handleOnChange = (e: any) => {
    let currentTargetValue = "";
    e.target.textContent.length != 0
      ? (currentTargetValue = e.target.textContent)
      : (currentTargetValue =
        e.target.parentElement.parentElement.children[1].textContent);

    if (
      params["genres"] &&
      params["genres"].split(" ").includes(currentTargetValue)
    ) {
      const currentParams = params["genres"].split(" ");
      currentParams.splice(currentParams.indexOf(currentTargetValue), 1);

      currentParams.length != 0
        ? setSearchParams({ ...params, genres: currentParams.join(" ") })
        : setSearchParams({ ...params, genres: [] });
    } else {
      let currentValue = "";
      if (params["genres"]) {
        currentValue = `${params["genres"]} ${currentTargetValue}`;
      } else {
        currentValue = `${currentTargetValue}`;
      }
      setSearchParams({ ...params, genres: currentValue });
    }
  };

  useEffect(() => {
    if (
      searchParams.getAll("genres").join(" ").split(" ").indexOf(genre) === -1
    ) {
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
        {genre === "Драма" && <FontIcon appearance="genre_drama" />}
        {genre === "Комедия" && <FontIcon appearance="genre_comedy" />}
        {genre === "Боевик" && <FontIcon appearance="genre_action" />}
        {genre === "Триллер" && <FontIcon appearance="genre_triller" />}
        {genre === "Приключения" && <FontIcon appearance="genre_adventure" />}
        {genre === "Зарубежный" && <FontIcon appearance="genre_foreign" />}
        {genre === "Мелодрама" && <FontIcon appearance="genre_melodrama" />}
        {genre === "Фантастика" && <FontIcon appearance="genre_fantastic" />}
        {genre === "Фэнтези" && <FontIcon appearance="genre_fantasy" />}
        {genre === "Семейный" && <FontIcon appearance="genre_family" />}
      </div>
      <div className={styles.title}>{genre}</div>
    </div>
  );
};
