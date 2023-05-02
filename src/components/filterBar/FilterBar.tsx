import styles from "./FilterBar.module.css";
import clsx from "clsx";
import { Genre } from "../Filters/genre/genre";
import { Country } from "../Filters/countriesFilter/Country";
import YearsFilter from "../Filters/yearsFilter/YearsFilter";
import RatingFilter from "../Filters/ratingFilter/RatingFilter";
import PersonsFilter from "../Filters/personsFilter/PersonsFilter";
import { DefaultFilter } from "../Filters/defaultFilter/DefaultFilter";

const people = ["Россия", "China", "India", "United States", "Indonesia", "Pakistan", "Brazil", "Nigeria", "Bangladesh", "Russia", "Mexico", "Japan", "Ethiopia", "Philippines", "gypt", "Vietnam", "DR Congo", "Turkey", "Iran", "Germany", "Thailand", "United Kingdom", "France", "Italy", "Tanzania", "SouthAfrica", "Myanmar", "Kenya", "South Korea", "Colombia", "Spain", "Uganda", "Argentina", "Algeria", "Sudan", "Ukraine", "Iraq", "Afghanistan", "Poland", "Canada", "Moocco", "Saudi Arabia", "Uzbekistan", "Peru", "Angola", "Malaysia", "Mozambique", "Ghana", "Yemen", "Nepal", "Venezuela"];
const people2 = ["Россия", "China", "India", "United States", "Indonesia", "Pakistan", "Brazil", "Nigeria", "Bangladesh", "Russia", "Mexico", "Japan", "Ethiopia", "Philippines", "gypt", "Vietnam", "DR Congo", "Turkey", "Iran", "Germany", "Thailand", "United Kingdom", "France", "Italy", "Tanzania", "SouthAfrica", "Myanmar", "Kenya", "South Korea", "Colombia", "Spain", "Uganda", "Argentina", "Algeria", "Sudan", "Ukraine", "Iraq", "Afghanistan", "Poland", "Canada", "Moocco", "Saudi Arabia", "Uzbekistan", "Peru", "Angola", "Malaysia", "Mozambique", "Ghana", "Yemen", "Nepal", "Venezuela"];

export interface FilterBarProps {
  className?: string;
}

export const FilterBar: React.FC<FilterBarProps> = ({ className }) => {
  return (
    <div className={clsx(styles.filterBar, className)} id="filterBar">
      <Genre />
      <Country />
      <YearsFilter />
      <PersonsFilter placeholder="actor" suggestions={people} />
      <PersonsFilter placeholder="director" suggestions={people2} />
      <RatingFilter />
      <DefaultFilter />
    </div>
  );
};
