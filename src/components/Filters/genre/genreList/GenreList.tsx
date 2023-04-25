/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from "./GenreList.module.css";
import { clsx } from "clsx";
import { LiElement } from "../../liElement/LiElement";
import { useSearchParams } from "react-router-dom";

export interface GenreListProps {
  appearance?: "";
  className?: string;
}

export const GenreList = ({ appearance = "", className }: GenreListProps) => {
  const genre = [
    "Артхаус",
    "Вестерн",
    "Для\u00A0детей",
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
    "По\u00A0комиксам",
    "Семейные",
    "Триллеры",
    "Фэнтези",
  ];

  const [, setSearchParams] = useSearchParams();
  const urlParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlParams.entries())

  const handleOnChange = (e: any) => {
    if (params["genres"] && params["genres"].split(' ').includes(e.target.value)) {
      const currentParams = params["genres"].split(' ');
      currentParams.splice(currentParams.indexOf(e.target.value), 1);
      currentParams.length != 0 ?
        setSearchParams({ ...params, genres: currentParams.join(' ') })
        :
        setSearchParams({ ...params, genres: [] })
    } else {
      let currentValue = '';
      if (params["genres"]) {
        currentValue = `${params["genres"]} ${e.target.value}`
      } else {
        currentValue = `${e.target.value}`
      }
      setSearchParams({ ...params, genres: currentValue })
    }
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
          {genre.map((nameGenre, index) => {
            return <LiElement key={index} value={nameGenre} argument={"genres"} />;
          })}
        </ul>
      </form>
    </div>
  );
};
