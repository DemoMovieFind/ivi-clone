import clsx from "clsx";
import { useEffect, useState } from "react";
import { FilterPlank } from "../../filterPlank/FilterPlank";
import styles from "./Country.module.css";
import { useSearchParams } from "react-router-dom";
import { CountrySlider } from "./countrySlider/CountrySlider";
import { CounterList } from "./counterList/CounterList";

export interface CountryProps {
  className?: string;
}

export const Country = ({ className }: CountryProps) => {
  const [searchParams] = useSearchParams();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const src = searchParams.toString();
    console.log(decodeURI(src));
    // fetch(`http://localhost:3000/films/?${decodeURI(src).toLowerCase()}`)
    //   .then((response) => response.json())
    //   .then((data) => console.log(data, "data"));
  }, [searchParams]);

  const openList = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={clsx(styles.countryWrapper, className)}>
      <div onClick={openList}>
        <FilterPlank text="Страны" isActive={isActive} />
      </div>

      <div
        className={styles.dropListWrapper}
        style={isActive ? { display: "block" } : { display: "none" }}
      >
        <CountrySlider />
        <CounterList />
      </div>
    </div>
  );
};
