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
    "Зарубежный",
    "Комедия",
    "Мистический",
    "Приключения",
    "Советский",
    "Ужасы",
    "Биография",
    "Военный",
    "Документальные",
    "История",
    "Криминал",
    "Музыкальный",
    "Русский",
    "Спорт",
    "Фантастика",
    "Боевик",
    "Детектив",
    "Драма",
    "Катастрофа",
    "Мелодрама",
    "По\u00A0комиксам",
    "Семейный",
    "Триллер",
    "Фэнтези",
  ];

  const [, setSearchParams] = useSearchParams();
  const urlParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlParams.entries())

  const handleOnChange = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    if (params["genres"] && params["genres"].split(' ').includes(target.value)) {
      const currentParams = params["genres"].split(' ');
      currentParams.splice(currentParams.indexOf(target.value), 1);
      currentParams.length != 0 ?
        setSearchParams({ ...params, genres: currentParams.join(' ') })
        :
        setSearchParams({ ...params, genres: [] })
    } else {
      let currentValue = '';
      if (params["genres"]) {
        currentValue = `${params["genres"]} ${target.value}`
      } else {
        currentValue = `${target.value}`
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
