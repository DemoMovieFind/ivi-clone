import React from "react";
import styles from "./hoardsContainer.module.css";
import clsx from "clsx";
import { FontIcon } from "../../icons/FontIcon";

export interface HoardsContainerProps {
  className?: string;
}

export const HoardsContainer: React.FC<HoardsContainerProps> = ({
  className,
}) => {
  return (
    <div className={clsx(styles.posterHoards, className)}>
      <FontIcon appearance="posterFavorite" toollip="Смотреть позже" />
      <FontIcon appearance="posterSimilar" toollip="Похожее" />
      <FontIcon appearance="posterEstimate" toollip="Уже смотрел, оценить" />
      <FontIcon appearance="posterDontLike" toollip="Не нравится такое" />
    </div>
  );
};
