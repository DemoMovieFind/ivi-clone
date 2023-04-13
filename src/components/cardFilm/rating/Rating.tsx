import React from "react";
import styles from "./Rating.module.css";
import clsx from "clsx";

export interface RatingProps {
  className?: string;
  rating: string;
}

export const Rating: React.FC<RatingProps> = ({ className, rating }) => {
  return (
    <div className={clsx(styles.ratingValue, className)}>
      <div>{rating.split(",")[0]}</div>
      <div>,{rating.split(",")[1]}</div>
    </div>
  );
};
