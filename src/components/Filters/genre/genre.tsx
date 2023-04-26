import { GenreList } from "./genreList/GenreList";
import { GenreSlider } from "./genreSlider/GenreSlider";
import styles from "./genre.module.css";
import { clsx } from "clsx";
import { useState, useRef } from "react";
import { FilterPlank } from "../../filterPlank/FilterPlank";
import { useClickAway } from "react-use";

export interface GenreProps {
  className?: string;
}

export const Genre = ({ className }: GenreProps) => {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => {
    setIsActive(false);
  });

  const open = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={clsx(styles.genreWrapper, className)} ref={ref}>
      <div onClick={open}>
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
