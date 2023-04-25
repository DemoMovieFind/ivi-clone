import React, { useState } from "react";
import styles from "./CountrySlider.module.css";
import { clsx } from "clsx";

import { SlickArrowLeft } from "../../../buttons/SlickArrow/SlickArrowLeft";
import { SlickArrowRight } from "../../../buttons/SlickArrow/SlickArrowRight";
import SliderElement from "./sliderElement/SliderElement";

export interface CountrySliderProps {
  className?: string;
}

export const CountrySlider = ({ className }: CountrySliderProps) => {
  const [valueTranslate, setValueTranslate] = useState(0);

  const countries = [
    "Россия",
    "США",
    "Великобритания",
    "Франция",
    "СССР",
    "Канада",
    "Испания",
    "Германия",
    "Индия",
  ];

  const goLeft = () => {
    setValueTranslate(valueTranslate + 240);
  };

  const goRight = () => {
    setValueTranslate(valueTranslate - 240);
  };
  return (
    <div className={clsx(styles.carousel, className)}>
      <div className={styles.gallery}>
        <div className={styles.viewport}>
          <div className={styles.viewportInner}>
            <div className={styles.slickSlider}>
              <div className={styles.slickList}>
                <div
                  className={styles.slickTrack}
                  style={{
                    width: "1200px",
                    opacity: "1",
                    transform: `translateX(${valueTranslate}px)`,
                  }}
                >
                  {countries.map((country, index) => {
                    return <SliderElement key={index} country={country} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <span
          className={styles.leftArrowWrapper}
          onClick={goLeft}
          style={
            valueTranslate === 0 ? { display: "none" } : { display: "block" }
          }
        >
          <div className={styles.iconWrapper}>
            <SlickArrowLeft className={styles.arrow} />
          </div>
        </span>
        <span
          className={styles.rightArrowWrapper}
          onClick={goRight}
          style={
            valueTranslate === -720 ? { display: "none" } : { display: "block" }
          }
        >
          <div className={styles.iconWrapper}>
            <SlickArrowRight className={styles.arrow} />
          </div>
        </span>
      </div>
    </div>
  );
};
