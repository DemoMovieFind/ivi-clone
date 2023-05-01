import styles from "./FilterBar.module.css";
import clsx from "clsx";
import { Genre } from "../Filters/genre/genre";
import { Country } from "../Filters/countriesFilter/Country";
import YearsFilter from "../Filters/yearsFilter/YearsFilter";
import RatingFilter from "../Filters/ratingFilter/RatingFilter";
import PersonsFilter from "../Filters/personsFilter/PersonsFilter";
import { DefaultFilter } from "../Filters/defaultFilter/DefaultFilter";

export interface FilterBarProps {
  className?: string;
}

export const FilterBar: React.FC<FilterBarProps> = ({ className }) => {
  return (
    <div className={clsx(styles.filterBar, className)} id="filterBar">
      <Genre />
      <Country />
      <YearsFilter />
      <PersonsFilter placeholder="actor" />
      <PersonsFilter placeholder="director" />
      {/* <RatingFilter /> */}
      <DefaultFilter />
    </div>
  );
};
