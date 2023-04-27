/* eslint-disable @typescript-eslint/no-explicit-any */
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
  const urlParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlParams.entries())
  const [isActive, setIsActive] = useState(false);


  const pick = (e: any) => {
    console.log(e.target);

    let currentTargetValue = '';
    e.target.textContent.length != 0 ?
      currentTargetValue = e.target.textContent
      :
      currentTargetValue = e.target.children[0].textContent;

    if (params["countries"] && params["countries"].split(' ').includes(currentTargetValue)) {
      const currentParams = params["countries"].split(' ');
      currentParams.splice(currentParams.indexOf(currentTargetValue), 1);

      currentParams.length != 0 ?
        setSearchParams({ ...params, countries: currentParams.join(' ') })
        :
        setSearchParams({ ...params, countries: [] })
    } else {
      let currentValue = '';
      if (params["countries"]) {
        currentValue = `${params["countries"]} ${currentTargetValue}`
      } else {
        currentValue = `${currentTargetValue}`
      }
      setSearchParams({ ...params, countries: currentValue })
    }
  };

  useEffect(() => {
    if (searchParams.getAll("countries").join(' ').split(' ').indexOf(country) === -1) {
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
