import clsx from "clsx";
import { useEffect, useState } from "react";
import styles from "./SliderElement.module.css";
import { useSearchParams } from "react-router-dom";

export interface SliderElementProps {
  className?: string;
  country: string;
}

export default function SliderElement({
  className,
  country,
}: SliderElementProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isActive, setIsActive] = useState(false);

  const arrayQueryParams: string[] = searchParams.getAll("countries") || [];

  const pick = () => {
    if (searchParams.getAll("countries").indexOf(country) === -1) {
      arrayQueryParams.push(country);
      setIsActive(true);
    } else {
      arrayQueryParams.splice(
        searchParams.getAll("countries").indexOf(country),
        1
      );
      setIsActive(false);
    }
    setSearchParams({ countries: arrayQueryParams });
  };

  useEffect(() => {

    if (searchParams.getAll("countries").indexOf(country) === -1) {
  
      setIsActive(false);
    } else {
   
      setIsActive(true);
    }
  }, [searchParams]);

  return (
    <div
      className={clsx(styles.sausage, className, isActive ? styles.active : "")}
      onClick={pick}
    >
      <div className={styles.title}>{country}</div>
    </div>
  );
}
