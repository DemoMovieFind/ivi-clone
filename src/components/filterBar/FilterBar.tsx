import styles from "./FilterBar.module.css";
import clsx from "clsx";
import { Genre } from "../Filters/genre/genre";
import { Country } from "../Filters/countriesFilter/Country";

export interface FilterBarProps {
  className?: string;
}

export const FilterBar: React.FC<FilterBarProps> = ({ className }) => {
  return (
    <div className={clsx(styles.filterBar, className)}>
      <Genre />
      <Country />
    </div>
  );
};
