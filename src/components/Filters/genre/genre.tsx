import { useSearchParams } from "react-router-dom";
import { GenreList } from "./genreList/GenreList";
import { GenreSlider } from "./genreSlider/GenreSlider";
import styles from "./genre.module.css";
import { clsx } from "clsx";
import { useEffect, useState } from "react";
import { FilterPlank } from "../../filterPlank/FilterPlank";

export interface GenreProps {
  className?: string;
}

export const Genre = ({ className }: GenreProps) => {
  const [searchParams] = useSearchParams();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const src = searchParams.toString();
    console.log(decodeURI(src));
    // fetch(`http://localhost:3000/films/?${decodeURI(src).toLowerCase()}`)
    //   .then((response) => response.json())
    //   .then((data) => console.log(data, "data"));
  }, [searchParams]);

  const openList = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={clsx(styles.genreWrapper, className)}>
      <div onClick={openList}>
        <FilterPlank text="Жанры" isActive={isActive} />
      </div>

      <div
        className={styles.dropListWrapper}
        style={isActive ? { display: "block" } : { display: "none" }}
      >
        <GenreSlider />
        <GenreList />
      </div>
    </div>
  );
};
