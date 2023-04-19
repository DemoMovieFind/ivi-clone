import styles from "./GenreList.module.css";
import { clsx } from "clsx";
import { LiElement } from "./liElement/LiElement";
import { Formik, Field, Form } from "formik";
import { useState } from "react";
import { Router, Routes, useSearchParams } from "react-router-dom";

export interface GenreListProps {
  appearance?: "";
  className?: string;
}

export const GenreList = ({ appearance = "", className }: GenreListProps) => {
  const genre = [
    "Артхаус",
    "Вестерн",
    "Для детей",
    "Зарубежные",
    "Комедии",
    "Мистические",
    "Приключения",
    "Советские",
    "Ужасы",
    "Биография",
    "Военные",
    "Документальные",
    "Исторические",
    "Криминал",
    "Музыкальные",
    "Русские",
    "Спорт",
    "Фантастика",
    "Боевики",
    "Детективы",
    "Драмы",
    "Катастрофы",
    "Мелодрамы",
    "По комиксам",
    "Семейные",
    "Триллеры",
    "Фэнтези",
  ];

  const [searchParams, setSearchParams] = useSearchParams();

  const a: string[] = searchParams.getAll("genre") || [];

  const handleOnChange = (event: any) => {
    if (searchParams.getAll("genre").indexOf(event.target.value) === -1) {
      a.push(event.target.value);
    } else {
      console.log("Такой уже есть");
      a.splice(searchParams.getAll("genre").indexOf(event.target.value), 1);
    }

    // event.preventDefault();

    setSearchParams({ genre: a });
    console.log(searchParams.getAll("genre"));
    // console.log("Form::onChange", event.target.value);
    // console.log("Form::onChange", event.target.checked);
  };

  return (
    <div
      className={clsx(
        styles.filterDropdown_container,
        styles[appearance],
        className
      )}
    >
      <form onChange={handleOnChange}>
        <ul className={styles.list}>
          {genre.map((nameGenre) => {
            return <LiElement value={nameGenre} />;
          })}
        </ul>
      </form>
    </div>
  );
};
