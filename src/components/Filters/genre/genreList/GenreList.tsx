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

  const arrayQueryParams: string[] = searchParams.getAll("genres") || [];

  const handleOnChange = (event: any) => {
    if (searchParams.getAll("genres").indexOf(event.target.value) === -1) {
      arrayQueryParams.push(event.target.value);
    } else {
      arrayQueryParams.splice(
        searchParams.getAll("genres").indexOf(event.target.value),
        1
      );
    }
    setSearchParams({ genres: arrayQueryParams });
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
            return <LiElement value={nameGenre} argument={"genres"} />;
          })}
        </ul>
      </form>
    </div>
  );
};
