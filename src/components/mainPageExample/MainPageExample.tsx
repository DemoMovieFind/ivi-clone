import React from "react";
import styles from "./MainPageExample.module.css";
import clsx from "clsx";
import { GalleryCarousel } from "../galleryCarousel/GalleryCarousel";
import { OnlineIvi } from "../onlineIvi/OnlineIvi";
import { FilmMainCard } from "../../types/entities/FilmMainCard";
import { CardFilm } from "../cardFilm/cardFilm";
import films from "../../miniDb";

export interface MainPageExampleProps {
  className?: string;
}

const CardFilmItem: React.FC<{ item: FilmMainCard }> = ({ item }) => (
  <CardFilm film={item} />
);

export const MainPageExample: React.FC<MainPageExampleProps> = ({
  className,
}) => {
  return (
    <div className={clsx(styles.seoBlock, className)}>
      <GalleryCarousel
        items={films.slice(0, 20)}
        itemComponent={CardFilmItem}
        nameCategory="Зарубежное кино"
      />
      <OnlineIvi />
    </div>
  );
};
