import React, { useEffect, useState } from 'react'
import styles from './CommentsPage.module.css';
import CommentFullCard from '../../../components/commentFullCard/CommentFullCard';
import { useLocation } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AuthService } from '../../../services/AuthService';
import axios from 'axios';
import Loader from '../../../components/loader/Loader';

type Inputs = {
  userName?: string,
  text?: string,
};

export interface CurrentReviewsType {
  text?: string;
  userId?: number;
  filmId?: number;
}

const CommentsPage = () => {

  const { state } = useLocation();

  const [currentReviews, setCurrentReviews] = useState<CurrentReviewsType[]>([])
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
          currentReviews.map((item, index) => {
            return <CommentFullCard key={index} text={item.text} />
          })
      }
      <CommentFullCard />
    </>
  )
}

export default CommentsPage