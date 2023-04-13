import React from "react";
import styles from "./NameFilm.module.css";
import clsx from "clsx";

export interface NameFilmProps {
  className?: string;
  name: string;
}

export const NameFilm: React.FC<NameFilmProps> = ({ className, name }) => {
  return <div className={clsx(styles.name, className)}>{name}</div>;
};
