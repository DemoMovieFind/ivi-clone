import clsx from "clsx";
import { useRef, useState } from "react";
import { FilterPlank } from "../../filterPlank/FilterPlank";
import styles from "./Country.module.css";
import { CountrySlider } from "./countrySlider/CountrySlider";
import { CounterList } from "./counterList/CounterList";
import { useClickAway } from "react-use";

export interface CountryProps {
  className?: string;
}

export const Country = ({ className }: CountryProps) => {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => {
    setIsActive(false);
  });

  const open = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={clsx(styles.countryWrapper, className)} ref={ref}>
      <div onClick={open}>
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
