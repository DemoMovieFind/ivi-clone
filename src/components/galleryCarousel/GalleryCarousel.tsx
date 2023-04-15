import React, { useState, useEffect } from "react";
import styles from "./GalleryCarousel.module.css";
import clsx from "clsx";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { SlickArrowLeft } from "../buttons/SlickArrow/SlickArrowLeft";
import { SlickArrowRight } from "../buttons/SlickArrow/SlickArrowRight";
import { CardViewAll } from "./CardViewAll/CardViewAll";

export interface GalleryCarouselProps<T> {
  className?: string;
  nameCategory?: string;
  items?: T[];
  itemComponent?: React.FC<{ item: T }>;
}

export const GalleryCarousel = <T,>({
  className,
  nameCategory,
  items,
  itemComponent: ItemComponent,
}: GalleryCarouselProps<T>) => {
  const [valueTranslate, setValueTranslate] = useState(0);
  const [isVisible, setIsVisible] = useState(0.5);

  const goLeft = () => {
    if (valueTranslate === -2478) {
      setValueTranslate(valueTranslate + 354);
    } else if (valueTranslate !== 0) {
      setValueTranslate(valueTranslate + 1062);
    }
  };

  const goRight = () => {
    if (valueTranslate === -2124) {
      setValueTranslate(valueTranslate - 354);
    } else if (valueTranslate > -2124 && valueTranslate <= 0) {
      setValueTranslate(valueTranslate - 1062);
    }
  };

  useEffect(() => {
    if (valueTranslate === 0) {
      setIsVisible(0);
    } else if (valueTranslate === -2478) {
      setIsVisible(1);
    } else {
      setIsVisible(0.5);
    }
  }, [valueTranslate]);

  return (
    <div className={clsx(styles.pageSection__container, className)}>
      <BrowserRouter>
        <div className={styles.pageSection__containerInner}>
          <div className={styles.gallery}>
            <div className={styles.blockHeader}>
              <Link to={"#"} className={styles.nblBlockHeader}>
                <div className={styles.title}>
                  <div className={styles.titleText}>{nameCategory}</div>
                </div>
              </Link>
            </div>
            <div className={styles.carousel}>
              <div className={styles.viewport}>
                <div className={styles.viewportInner}>
                  <div className={styles.slickSlider}>
                    <div className={styles.slickList}>
                      <div
                        className={styles.slickTrack}
                        style={{
                          width: "3363px",
                          opacity: "1",
                          transform: `translateX(${valueTranslate}px)`,
                        }}
                      >
                        {ItemComponent &&
                          items?.map((item) => <ItemComponent item={item} />)}
                        <CardViewAll />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <span
                className={styles.slickPrev}
                onClick={goLeft}
                style={
                  isVisible === 0
                    ? { opacity: "0", pointerEvents: "none" }
                    : { opacity: "1", pointerEvents: "auto" }
                }
              >
                <div className={styles.iconWrapper}>
                  <SlickArrowLeft />
                </div>
              </span>
              <span
                className={styles.slickNext}
                onClick={goRight}
                style={
                  isVisible === 1
                    ? { opacity: "0", pointerEvents: "none" }
                    : { opacity: "1", pointerEvents: "auto" }
                }
              >
                <div className={styles.iconWrapper}>
                  <SlickArrowRight />
                </div>
              </span>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};
