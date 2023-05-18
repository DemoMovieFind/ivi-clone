import { GenreList } from "./genreList/GenreList";
import { GenreSlider } from "./genreSlider/GenreSlider";
import styles from "./genre.module.css";
import { clsx } from "clsx";
import { useState, useRef } from "react";
import { FilterPlank } from "../../filterPlank/FilterPlank";
import { useClickAway } from "react-use";
import { useIntl } from "react-intl";

export interface GenreProps {
  className?: string;
}

export const Genre = ({ className }: GenreProps) => {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef(null);
  const intl = useIntl();

  useClickAway(ref, () => {
    setIsActive(false);
  });

  const open = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={clsx(styles.genreWrapper, className)} ref={ref}>
      <div onClick={open}>
        <FilterPlank text={intl.formatMessage({id:'filters_genres'})} isActive={isActive} />
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
