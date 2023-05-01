import React, { useState } from "react";
import styles from "./FilmWatchCard.module.css";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FontIcon } from "../icons/FontIcon";
import { Button } from "../buttons/Button";
import clsx from "clsx";
import { FilmWatchCardType } from "../../types/entities/FilmWatchCardType";
import PersonCardMini from "../personCardMini/PersonCardMini";
import { FormattedMessage, useIntl } from "react-intl";
import IviRatingCard from "../iviRatingCard/IviRatingCard";
import PersonContainer from "../personContainer/PersonContainer";
import { GalleryCarousel } from "../galleryCarousel/GalleryCarousel";
import CommentCard from "../commentCard/CommentCard";

export interface FilmWatchCardPropsType {
  film?: FilmWatchCardType;
}

const FilmWatchCard = ({ film }: FilmWatchCardPropsType) => {
  const { state } = useLocation();
  film = state;

  const intl = useIntl();

  const [showDetails, setShowDetails] = useState(false);

  const btnTrailerContent = (
    <div className={styles.btnTrailerContent}>
      <FontIcon appearance="play" />
      <FormattedMessage id="film_watch_trailer" />
    </div>
  );

  let currentFilmType = "";
  film?.type == "фильм"
    ? (currentFilmType = "movies")
    : film?.type == "сериал"
      ? (currentFilmType = "series")
      : (currentFilmType = "animations");


  film?.genres.forEach((genre) => {
    if (genre.name == "мультфильм") {
      currentFilmType = "animations";
    }
  })

  const personsArray: string[] = [];
  film?.actors?.forEach((actor) => {
    personsArray.push(actor.name)
  })

  const toggle = () => setShowDetails(!showDetails);

  const more = showDetails ? (
    <div className={styles.filmWatchDetailsBtn} onClick={toggle}>
      <FormattedMessage id={`film_watch_collapse_details`} />
    </div>
  ) : (
    <div className={styles.filmWatchDetailsBtn} onClick={toggle}>
      <FormattedMessage id={`film_watch_expand_details_${currentFilmType}`} />
    </div>
  );

  const commentsCards = [
    <CommentCard text="" />,
    <CommentCard text="" />,
    <CommentCard text="" />,
    <CommentCard text="" />,
    <CommentCard text="" />,
    <CommentCard text="" />,
    <CommentCard text="" />,
    <CommentCard text="" />,
    <CommentCard text="" />,
    <CommentCard text="" />,
    <CommentCard text="" />,
    <CommentCard text="" />,
  ];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const CardCommentItem: React.FC<{ item: any }> = () => <CommentCard />;

  return (
    <div className={styles.filmWatchCardContainer}>
      <nav className={styles.filmWatchCardBreadCrumbsContainer}>
        <Link to={`/${currentFilmType}`} className={styles.breadCrumbsItem}>
          {currentFilmType == "animations" ? (
            <FormattedMessage id="film_watch_cartoons" />
          ) : (
            <FormattedMessage id={`film_watch_${currentFilmType}`} />
          )}
        </Link>
        <Link
          to={`/${currentFilmType}/${film?.genres[0]}`}
          className={styles.breadCrumbsItem}
        >
          {currentFilmType == "animations"
            ? film?.genres &&
            film?.genres[1].name.slice(0, 1).toUpperCase() + film?.genres[1].name.slice(1)
            : film?.genres &&
            film?.genres[0].name.slice(0, 1).toUpperCase() +
            film?.genres[0].name.slice(1)}
        </Link>
      </nav>
      <div className={styles.filmWathMainContainer}>
        <div className={styles.filmWatchMovieSide}>
          <div className={clsx(styles.filmWatchMovieContainer, styles.noFilm)}>
            <img src={film?.mainImg} alt="" />
            {/* Movie */}
          </div>
          <div className={styles.filmWatchButtonsContainer}>
            <Button
              size="small"
              appearance="movie"
              children={btnTrailerContent}
            />
            <Button
              size="small"
              appearance="movie"
              children={<FontIcon appearance="favorite" />}
            />
            <Button
              size="small"
              appearance="movie"
              children={<FontIcon appearance="notification" />}
            />
            <Button
              size="small"
              appearance="movie"
              children={<FontIcon appearance="download" />}
            />
          </div>
        </div>
        <div className={styles.filmWatchInfoSide}>
          <div className={styles.filmWatchTitle}>
            {currentFilmType == "movies"
              ? `${film?.name.split(" ").slice(0, -1).join(" ")} 
              (${intl.formatMessage({ id: "film_watch_movies" }).slice(0, -1)} 
              ${film?.year})`
              : currentFilmType == "series"
                ? `${film?.name} 
              (${intl
                  .formatMessage({ id: "film_watch_series" })
                  .slice(0, -2)}al 
              ${film?.year})`
                : currentFilmType == "animations"
                  ? `${film?.name.split(" ").slice(0, -1).join(" ")} 
              (${intl
                    .formatMessage({ id: "film_watch_cartoons" })
                    .slice(0, -1)} 
              ${film?.year})`
                  : ""}
          </div>
          <div className={styles.filmWatchParamsContainer}>
            <div className={styles.filmWatchMovieInfo}>
              <Link
                className={styles.filmWatchYear}
                to={`/${currentFilmType}/${film?.year}`}
              >
                {film?.year}
              </Link>
              {film?.time && film?.time?.length <= 7
                ? ` ${film?.time}.`
                : `
              ${Number(film?.time?.split(":")[0].split(" ")[3])}
              ч.
              ${Number(film?.time?.split(":")[1])}
              мин.
              ${film?.age}`}
            </div>
            <nav className={styles.filmWatchGenreNav}>
              {film?.countries.map((country, index) => {
                return (
                  <Link
                    key={index}
                    className={clsx(
                      styles.filmWatchGenreNavCountry,
                      styles.breadCrumbsItem
                    )}
                    to={`/movies?countries=${country.name}`}
                  >
                    {country.name}
                  </Link>
                );
              })}
              {film?.genres.map((genre, index) => {
                return (
                  <Link
                    className={styles.breadCrumbsItem}
                    key={index}
                    to={`/movies?genres=${genre.name.slice(0, 1).toUpperCase() + genre.name.slice(1)
                      }`}
                  >
                    {genre.name.slice(0, 1).toUpperCase() + genre.name.slice(1)}
                  </Link>
                );
              })}
            </nav>
            <div className={styles.filmWatchQualityContainer}>
              <div className={styles.filmWatchQuality}>FullHD</div>
              <div className={styles.filmWatchAudio}>
                <FontIcon appearance="audio" />
                <FormattedMessage id="film_watch_rus" />
              </div>
              <div className={styles.filmWatchText}>
                <FontIcon appearance="text" />
                <FormattedMessage id="film_watch_rus" />
              </div>
            </div>
          </div>
          <div className={styles.filmWatchActorsContainer}>
            <PersonCardMini rating="8,9" />
            {film?.actors &&
              film?.actors.slice(0, 4).map((actor, index) => {
                return (
                  <NavLink to={`/persons/${actor.name}`} state={actor.name} key={index}>
                    <PersonCardMini
                      name={actor.name}
                      img="https://thumbs.dfs.ivi.ru/storage38/contents/b/c/45102370a23e374f4146fe2d106f26.jpeg/88x88/?q=85"
                    />
                  </NavLink>
                );
              })}
          </div>
          <div className={styles.filmWatchDescription}>{film?.description}</div>
          {showDetails && (
            <div className={styles.filmWatchParamsBottomContainer}>
              <div className={styles.filmWatchLangContainer}>
                <div className={styles.filmWatchLangTitle}>
                  <FormattedMessage id="film_watch_lang" />
                </div>
                <div className={styles.filmWatchLang}>
                  <FormattedMessage id="film_watch_russian" />
                </div>
              </div>
              <div className={styles.filmWatchSubContainer}>
                <div className={styles.filmWatchSubTitle}>
                  <FormattedMessage id="film_watch_subtitles" />
                </div>
                <div className={styles.filmWatchSub}>
                  <FormattedMessage id="film_watch_russian" />
                </div>
              </div>
              <div className={styles.filmWatchQualityContainer}>
                <div className={styles.filmWatchQualityDesc}>
                  <span>
                    <FormattedMessage id="film_watch_img_audio" />
                  </span>
                  <FormattedMessage id="film_watch_quality_desc" />
                </div>
                <div className={styles.filmWatchQualityContainer}>
                  <div className={styles.filmWatchQuality}>4К</div>
                  <div className={styles.filmWatchQuality}>FullHD</div>
                  <div className={styles.filmWatchQuality}>HD</div>
                  <div className={styles.filmWatchQuality}>1080</div>
                  <div className={styles.filmWatchQuality}>720</div>
                  <div className={styles.filmWatchQuality}>5.1</div>
                </div>
              </div>
            </div>
          )}
          {more}
          <IviRatingCard rating="8,9" />
        </div>
      </div>
      <PersonContainer persons={personsArray} />
      <GalleryCarousel
        typeFilm={currentFilmType}
        filmName={film?.name}
        items={commentsCards}
        itemComponent={CardCommentItem}
        nameCategory="Отзывы"
        typeSlider="comment"
      />
    </div>
  );
};

export default FilmWatchCard;
