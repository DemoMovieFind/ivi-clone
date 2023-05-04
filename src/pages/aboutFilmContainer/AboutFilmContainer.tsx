import React from 'react'
import styles from './AboutFilmContainer.module.css'
import FilmWatchCard from '../../components/filmWatchCard/FilmWatchCard'
import { useLocation } from 'react-router'
import { FontIcon } from '../../components/icons/FontIcon'
import { FormattedMessage, useIntl } from 'react-intl'
import { CardFilm } from '../../components/cardFilm/cardFilm'
import { NavLink } from 'react-router-dom'
import CommentsPage from './comments/CommentsPage'
import PersonsPage from './persons/PersonsPage'
import clsx from 'clsx'

export interface AboutFilmPropsType {
  props: 'comments' | 'persons';
}

const AboutFilmContainer = ({
  props = 'comments',
}: AboutFilmPropsType) => {

  const { state } = useLocation();


  let currentFilmType = "";
  state?.type == "фильм"
    ? (currentFilmType = "movies")
    : state?.type == "сериал"
      ? (currentFilmType = "series")
      : (currentFilmType = "animations");

  const intl = useIntl();

  return (
    <>
      <FilmWatchCard film={state} />
      <div className={styles.container}>
        <div className={styles.commentsPageContainer}>
          <div className={styles.back}>
            <NavLink to={`/movies/${state.name}`} state={state}>
              <div className={styles.backCenter}>
                <FontIcon appearance='leftArrow' className={styles.arrowBack} />
                <FormattedMessage id='comment_to_film' />
              </div>
            </NavLink>
          </div>
          <div className={styles.main}>
            <div className={styles.filmName}>
              {currentFilmType == "movies"
                ? `${state?.name.split("(")[0]} 
              (${intl.formatMessage({ id: "film_watch_movies" }).slice(0, -1)} 
              ${state?.year})`
                : currentFilmType == "series"
                  ? `${state?.name} 
              (${intl
                    .formatMessage({ id: "film_watch_series" })
                    .slice(0, -2)}al 
              ${state?.year})`
                  : currentFilmType == "animations"
                    ? `${state?.name.split(" ").slice(0, -1).join(" ")} 
              (${intl
                      .formatMessage({ id: "film_watch_cartoons" })
                      .slice(0, -1)} 
              ${state?.year})`
                    : ""}
            </div>
            <div className={styles.nav}>
              <NavLink
                to={`/movies/${state.name}/persons`}
                state={state}
                className={clsx(styles.link, props == 'persons' ? styles.active : '')}
              >Создатели
              </NavLink>
              <NavLink
                to={`/movies/${state.name}/comments`}
                state={state}
                className={clsx(styles.link, props == 'comments' ? styles.active : '')}
              >Отзывы
              </NavLink>
            </div>
            {props == 'comments' ? <CommentsPage /> : <PersonsPage />}
          </div>
          <div className={styles.filmCard}>
            <NavLink to={`/movies/${state.name}`} state={state}><CardFilm film={state} /></NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutFilmContainer