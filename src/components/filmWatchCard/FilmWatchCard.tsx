import React, { useState } from 'react'
import styles from './FilmWatchCard.module.css'
import { BrowserRouter, Link } from 'react-router-dom';
import { FontIcon } from '../icons/FontIcon';
import { Button } from '../buttons/Button';
import clsx from 'clsx';
import { FilmWatchCardType } from '../../types/entities/FilmWatchCardType';
import PersonCardMini from '../personCardMini/PersonCardMini';
import { FormattedMessage } from 'react-intl';
import IviRatingCard from '../iviRatingCard/IviRatingCard';

import data from "../../miniDb.json";



export interface FilmWatchCardPropsType {
  film?: FilmWatchCardType;
}

const FilmWatchCard = ({
  film = (data as FilmWatchCardType[]).slice(0, 1)[0]
}: FilmWatchCardPropsType) => {

  const [showDetails, setShowDetails] = useState(false)

  const btnTrailerContent = <div className={styles.btnTrailerContent}><FontIcon appearance='play' />Трейлер</div>

  let currentFilmType = ''
  film.type == 'фильм' ? currentFilmType = 'movie' :
    film.type == 'сериал' ? currentFilmType = 'series' :
      currentFilmType = 'animation';

  const toggle = () => setShowDetails(!showDetails)


  const more = showDetails ?
    <div className={styles.filmWatchDetailsBtn} onClick={toggle}>
      <FormattedMessage id={`film_watch_collapse_details`} />
    </div>
    :
    <div className={styles.filmWatchDetailsBtn} onClick={toggle}>
      <FormattedMessage id={`film_watch_expand_details_${currentFilmType}`} />
    </div>


  return (
    <BrowserRouter>
      <div className={styles.filmWatchCardContainer}>
        <nav className={styles.filmWatchCardBreadCrumbsContainer}>
          <Link to={`/${currentFilmType}`} className={styles.breadCrumbsItem}>
            {film.type && film.type.slice(0, 1).toUpperCase() + film.type.slice(1)}
          </Link>
          <Link to={`/${currentFilmType}/${film.genre[0]}`} className={styles.breadCrumbsItem}>
            {film.genre && film.genre[0].slice(0, 1).toUpperCase() + film.genre[0].slice(1)}
          </Link>
        </nav>
        <div className={styles.filmWathMainContainer}>
          <div className={styles.filmWatchMovieSide}>
            <div className={clsx(styles.filmWatchMovieContainer, styles.noFilm)}>
              {/* Movie */}
            </div>
            <div className={styles.filmWatchButtonsContainer}>
              <Button size='small' appearance='movie' children={btnTrailerContent} />
              <Button size='small' appearance='movie' children={<FontIcon appearance='favorite' />} />
              <Button size='small' appearance='movie' children={<FontIcon appearance='notification' />} />
              <Button size='small' appearance='movie' children={<FontIcon appearance='download' />} />
            </div>
          </div>
          <div className={styles.filmWatchInfoSide}>
            <div className={styles.filmWatchTitle}>
              {`${film.name.split(' ')[0]} 
              (${film.type && film.type.slice(0, 1).toUpperCase() + film.type.slice(1)} 
              ${film.year})`}
            </div>
            <div className={styles.filmWatchParamsContainer}>
              <div className={styles.filmWatchMovieInfo}>
                <Link className={styles.filmWatchYear} to={`/${currentFilmType}/${film.year}`}>{film.year}</Link>
                {`
              ${Number(film.time?.split(":")[0].split(' ')[3])}
              ч.
              ${Number(film.time?.split(":")[1])}
              мин.
              ${film.age}`}
              </div>
              <nav className={styles.filmWatchGenreNav}>
                <Link className={styles.filmWatchGenreNavCountry} to={`/${film.country}`}>{film.country}</Link>
                {film.genre.map((genre, index) => {
                  return <Link className={styles.breadCrumbsItem} key={index} to={`/`}>{genre.slice(0, 1).toUpperCase() + genre.slice(1)}</Link>
                })}
              </nav>
              <div className={styles.filmWatchQualityContainer}>
                <div className={styles.filmWatchQuality}>FullHD</div>
                <div className={styles.filmWatchAudio}>
                  <FontIcon appearance='audio' />
                  <FormattedMessage id='film_watch_rus' />
                </div>
                <div className={styles.filmWatchText}>
                  <FontIcon appearance='text' />
                  <FormattedMessage id='film_watch_rus' />
                </div>
              </div>
            </div>
            <div className={styles.filmWatchActorsContainer}>
              <PersonCardMini rating='8,9' />
              {film.actors && film.actors.slice(0, 4).map((actor, index) => {
                return <PersonCardMini key={index} name={actor} />
              })}
            </div>
            <div className={styles.filmWatchDescription}>
              {film.description}
            </div>
            {
              showDetails &&
              <div className={styles.filmWatchParamsBottomContainer}>
                <div className={styles.filmWatchLangContainer}>
                  <div className={styles.filmWatchLangTitle}><FormattedMessage id='film_watch_lang' /></div>
                  <div className={styles.filmWatchLang}><FormattedMessage id='film_watch_russian' /></div>
                </div>
                <div className={styles.filmWatchSubContainer}>
                  <div className={styles.filmWatchSubTitle}><FormattedMessage id='film_watch_subtitles' /></div>
                  <div className={styles.filmWatchSub}><FormattedMessage id='film_watch_russian' /></div>
                </div>
                <div className={styles.filmWatchQualityContainer}>
                  <div className={styles.filmWatchQualityDesc}>
                    <span><FormattedMessage id='film_watch_img_audio' /></span>
                    <FormattedMessage id='film_watch_quality_desc' />
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
            }
            {more}
            <IviRatingCard rating='8,9' />
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default FilmWatchCard