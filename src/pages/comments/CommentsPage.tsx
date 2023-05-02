import React, { useEffect, useState } from 'react'
import styles from './CommentsPage.module.css'
import FilmWatchCard from '../../components/filmWatchCard/FilmWatchCard'
import { useLocation, useNavigate } from 'react-router'
import { FontIcon } from '../../components/icons/FontIcon'
import { useIntl } from 'react-intl'
import { SubmitHandler, useForm } from 'react-hook-form'

type Inputs = {
  userName?: string,
  text?: string,
};

const CommentsPage = () => {

  const { state } = useLocation();

  useEffect(() => {
    document.getElementsByTagName('html')[0].style.overflow = 'hidden'
  }, [])

  const navigate = useNavigate();
  const intl = useIntl();

  let currentFilmType = "";
  state?.type == "фильм"
    ? (currentFilmType = "movies")
    : state?.type == "сериал"
      ? (currentFilmType = "series")
      : (currentFilmType = "animations");

  const { register, handleSubmit, formState: { errors } } = useForm({ mode: "all", });

  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(data);
  }



  return (
    <>
      <FilmWatchCard film={state} />
      <div className={styles.container}>
        <div className={styles.commentsPageContainer}>
          <div className={styles.back}>
            <div className={styles.backCenter} onClick={() => navigate(-1)}>
              <FontIcon appearance='leftArrow' className={styles.arrowBack} />
              К фильму
            </div>
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
            <div className={styles.line}></div>
            <div className={styles.formContainer}>
              <div className={styles.noImage}></div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input className={styles.inputText} {...register('comment', { required: true, minLength: 10 })} placeholder='Написать отзыв' />
                {
                  errors.comment &&
                  <span className={styles.commentError}>
                    Минимум 10 символов
                  </span>
                }
                <button disabled={errors.comment ? true : false}>Отправить</button>
              </form>
            </div>
          </div>
          <div className={styles.filmCard}>

          </div>
        </div>
      </div>
    </>
  )
}

export default CommentsPage