import React, { useEffect, useState } from 'react'
import styles from './CommentsPage.module.css'
import FilmWatchCard from '../../components/filmWatchCard/FilmWatchCard'
import { useLocation, useNavigate } from 'react-router'
import { FontIcon } from '../../components/icons/FontIcon'
import { FormattedMessage, useIntl } from 'react-intl'
import { SubmitHandler, useForm } from 'react-hook-form'
import { CardFilm } from '../../components/cardFilm/cardFilm'
import { NavLink } from 'react-router-dom'
import CommentFullCard from '../../components/commentFullCard/CommentFullCard'
import Loader from '../../components/loader/Loader'
import { AuthService } from '../../services/AuthService'
import axios from 'axios'

type Inputs = {
  userName?: string,
  text?: string,
};

const CommentsPage = () => {

  const { state } = useLocation();

  const [currentReviews, setCurrentReviews] = useState<object[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    document.getElementsByTagName('html')[0].style.overflow = 'hidden';

    state.id && getReviews(state.id)
  }, [])

  const getReviews = async (id: number) => {
    setLoading(true)
    await fetch(`http://188.120.248.77/reviews/film/${id}`)
      .then(res => res.json())
      .then(data => setCurrentReviews(data))
      .then(() => setLoading(false))
  }

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
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token') ?? '';
      const decoded = AuthService.getDecodedToken(token);

      const commentText = data;
      const userId = decoded.id;
      const filmId = state.id;

      axios.post(`http://188.120.248.77/reviews`, { "text": commentText, "user_id": userId, "film_id": filmId })

    } else {
      location.href = `/auth`
    }
  }



  return (
    <>
      <FilmWatchCard film={state} />
      <div className={styles.container}>
        <div className={styles.commentsPageContainer}>
          <div className={styles.back}>
            <div className={styles.backCenter} onClick={() => navigate(-1)}>
              <FontIcon appearance='leftArrow' className={styles.arrowBack} />
              <FormattedMessage id='comment_to_film' />
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
                <div className={styles.inputContainer}>
                  <input
                    className={styles.inputText}
                    {...register('comment', { required: true, minLength: 10 })}
                    style={errors.comment ? { backgroundColor: '#fff3f0', color: '#ff542e' } : {}}
                  />
                  <div
                    className={styles.placeholder}
                    style={errors.comment ? { color: '#ff542e' } : {}}
                  >
                    <FormattedMessage id='comment_leave_review' />
                  </div>
                  <button
                    className={styles.submitComment}
                    style={errors.comment ? { opacity: .32 } : {}}
                    disabled={errors.comment ? true : false}
                  >
                    <FormattedMessage id='comment_send' />
                  </button>
                </div>
                {
                  errors.comment &&
                  <span className={styles.commentError}>
                    <FormattedMessage id='comment_error_text_1' />
                  </span>
                }
              </form>
            </div>
            {
              loading ? <Loader />
                :
                currentReviews.map((item: any, index) => {
                  return <CommentFullCard key={index} text={item.text} />
                })
            }
            <CommentFullCard />
          </div>
          <div className={styles.filmCard}>
            <NavLink to={`/movies/${state.name}`} state={state}><CardFilm film={state} /></NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default CommentsPage