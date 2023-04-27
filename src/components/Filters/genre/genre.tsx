/* eslint-disable @typescript-eslint/no-explicit-any */
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
    // const src = searchParams.toString();
    // console.log(decodeURI(src));
    // fetch(`http://localhost:3000/films/?${decodeURI(src).toLowerCase()}`)
    //   .then((response) => response.json())
    //   .then((data) => console.log(data, "data"));
  }, [searchParams]);

  const openList = (e: any) => {
    setIsActive(!isActive);

    let list = []
    let dropDownArrow: any = ''

    if (isActive) {
      if (e.target.classList[0].split('_')[1] == 'text' || e.target.classList[0].split('_')[1] == 'icon') {
        list = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children;
      } else {
        list = e.target.parentElement.parentElement.parentElement.parentElement.children;
      }
      for (let i = 0; i < list.length; i++) {
        if (i == 1) {
          list[i].children[1].style.display = 'none';
          list[i].children[0].children[0].children[0].classList.remove(styles.nonActiveColor);
          dropDownArrow = list[i].children[0].children[0].children[0].children[1]
          if (dropDownArrow.classList.length > 1) {
            dropDownArrow.classList.remove(styles.nonActiveColor);
            dropDownArrow.classList.remove(styles.nonActiveRotate);
          }
        } else if (i == 2) {
          list[i].children[1].style.display = 'none';
          const yearsList = list[i].children[0].children
          for (let j = 0; j < yearsList.length; j++) {
            yearsList[j].children[1].classList.remove(styles.nonActiveColor)
            yearsList[j].children[1].children[1].classList.remove(styles.nonActiveRotate)
          }
        }
      }
    } else if (!isActive) {
      if (e.target.classList[0].split('_')[1] == 'text' || e.target.classList[0].split('_')[1] == 'icon') {
        list = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children;
      } else {
        list = e.target.parentElement.parentElement.parentElement.parentElement.children;
      }
      for (let i = 0; i < list.length; i++) {
        if (i == 1) {
          list[i].children[1].style.display = 'none';
          list[i].children[0].children[0].children[0].classList.add(styles.nonActiveColor);
          dropDownArrow = list[i].children[0].children[0].children[0].children[1]
          if (dropDownArrow.classList.length > 1) {
            dropDownArrow.classList.add(styles.nonActiveColor);
            dropDownArrow.classList.add(styles.nonActiveRotate);
          }
        } else if (i == 2) {
          list[i].children[1].style.display = 'none';
          const yearsList = list[i].children[0].children
          for (let j = 0; j < yearsList.length; j++) {
            yearsList[j].children[1].classList.add(styles.nonActiveColor)
            yearsList[j].children[1].children[1].classList.add(styles.nonActiveRotate)
          }
        }
      }
    }
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
