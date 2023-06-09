import React, { useState, useEffect } from "react";
import styles from "./GalleryCarousel.module.css";
import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { SlickArrowLeft } from "../buttons/SlickArrow/SlickArrowLeft";
import { SlickArrowRight } from "../buttons/SlickArrow/SlickArrowRight";
import { CardViewAll } from "./CardViewAll/CardViewAll";
import { FormattedMessage } from "react-intl";
import { Button } from "../buttons/Button";
import { FilmWatchCardType } from "../../types/entities/FilmWatchCardType";

export interface GalleryCarouselProps<T> {
  className?: string;
  typeFilm?: string;
  filmName?: string;
  nameCategory?: string;
  items?: T[];
  itemComponent?: React.FC<{ item: T, count?: number }>;
  typeSlider?: string;
  film?: FilmWatchCardType;
}

export const GalleryCarousel = <T,>({
  className,
  typeFilm,
  filmName,
  nameCategory,
  items,
  itemComponent: ItemComponent,
  typeSlider,
  film,
}: GalleryCarouselProps<T>) => {
  const [valueTranslate, setValueTranslate] = useState(0);
  const [isVisible, setIsVisible] = useState(0.5);
  const widthCarousel = typeSlider === "comment" ? "3696px" : typeSlider === "topFilms" ? '2444px' : "3363px";

  const goLeft = () => {
    if (typeSlider === "comment") {
      if (valueTranslate === -2480) {
        setValueTranslate(valueTranslate + 620);
      } else if (valueTranslate !== 0) {
        setValueTranslate(valueTranslate + 930);
      }
    } else {
      if (valueTranslate === -2478) {
        setValueTranslate(valueTranslate + 354);
      } else if (valueTranslate !== 0) {
        setValueTranslate(valueTranslate + 1062);
      }
    }
  };

  const goRight = () => {
    if (typeSlider === "comment") {
      if (valueTranslate === -1860) {
        setValueTranslate(valueTranslate - 620);
      } else if (valueTranslate <= 0) {
        setValueTranslate(valueTranslate - 930);
      }
    } else {
      if (valueTranslate === -2124) {
        setValueTranslate(valueTranslate - 354);
      } else if (valueTranslate > -2124 && valueTranslate <= 0) {
        setValueTranslate(valueTranslate - 1062);
      }
    }
  };

  useEffect(() => {
    if (valueTranslate === 0) {
      setIsVisible(0);
    } else if (valueTranslate === -2478 || valueTranslate === -2480 || valueTranslate === -2124) {
      setIsVisible(1);
    } else {
      setIsVisible(0.5);
    }
  }, [valueTranslate]);

  return (
    <div className={clsx(styles.pageSection__container, className)}>
      <div className={styles.pageSection__containerInner}>
        <div className={styles.gallery}>
          <div className={styles.blockHeader}>
            <div>
              <div style={{ display: "flex" }}>
                <NavLink to={typeSlider == 'comment' ? './comments' : "#"} state={typeSlider == 'comment' ? film : ''} className={styles.nblBlockHeader}>
                  <div className={styles.title}>
                    <div
                      className={
                        typeSlider === "comment"
                          ? clsx(styles.titleText, styles.commentShadow)
                          : styles.titleText
                      }
                    >
                      {typeSlider === "comment" ? (
                        <FormattedMessage id="comment_container_reviews" />
                      ) : (
                        nameCategory
                      )}
                    </div>
                  </div>
                </NavLink>
                {typeSlider === "comment" ? (
                  <div className={styles.allComment}>
                    <div className={styles.textCount}>63</div>
                  </div>
                ) : (
                  ""
                )}
              </div>
              {typeSlider === "comment" ? (
                <div className={styles.about}>
                  <FormattedMessage id={`comment_about_${typeFilm}`} /> «
                  {filmName}»
                </div>
              ) : (
                ""
              )}
            </div>
            {typeSlider === "comment" ? (
              <NavLink to={`./comments`} state={film}>
                <Button className={styles.buttonComment} size="large">
                  <FormattedMessage id="comment_leave_review" />
                </Button>
              </NavLink>
            ) : (
              ""
            )}
          </div>
          <div className={styles.carousel}>
            <div className={styles.viewport}>
              <div className={styles.viewportInner}>
                <div className={styles.slickSlider}>
                  <div className={styles.slickList}>
                    <div
                      className={styles.slickTrack}
                      style={{
                        width: `${widthCarousel}`,
                        opacity: "1",
                        transform: `translateX(${valueTranslate}px)`,
                      }}
                    >
                      {
                        typeSlider !== "comment" ?
                          // eslint-disable-next-line @typescript-eslint/no-explicit-any
                          ItemComponent && items?.map((item: any, index) => <NavLink key={index} to={`/movies/${item.name}`} state={item}><ItemComponent item={item} count={index} /></NavLink>)
                          :
                          items?.length == 0 ?
                            <div className={styles.noReviews}>Нет отзывов</div>
                            :
                            ItemComponent && items?.map((item: T, index) => <NavLink key={index} to={`./comments`} state={film}><ItemComponent item={item} /></NavLink>)
                      }
                      {typeSlider === "comment" || typeSlider == 'topFilms' ? "" : <CardViewAll />}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <span
              className={styles.slickPrev}
              onClick={goLeft}
              style={
                items?.length == 0
                  ? { display: 'none' }
                  : isVisible === 0
                    ? { opacity: "0", pointerEvents: "none" }
                    : { opacity: "1", pointerEvents: "auto" }
              }
            >
              <div className={styles.iconWrapper} style={
                items?.length == 0
                  ? { display: 'none' }
                  : {}
              }>
                <SlickArrowLeft />
              </div>
            </span>
            <span
              className={styles.slickNext}
              onClick={goRight}
              style={
                items?.length == 0
                  ? { display: 'none' }
                  : isVisible === 1
                    ? { opacity: "0", pointerEvents: "none" }
                    : { opacity: "1", pointerEvents: "auto" }
              }
            >
              <div className={styles.iconWrapper} style={
                items?.length == 0
                  ? { display: 'none' }
                  : {}
              }>
                <SlickArrowRight />
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
