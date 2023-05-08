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
  comment?: string;
};

export interface CurrentReviewsType {
  text?: string;
  user_id?: number;
  user_email?: string;
  filmId?: number;
  createdAt?: string;
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
    await axios.get(`http://188.120.248.77/reviews/film/${id}`)
      .then(res => {
        res.data.reverse()
        setCurrentReviews(res.data)
        // console.log(res.data);

      })
      .then(() => setLoading(false))
  }

  const postReview = async (commentText: Inputs, userId: number, filmId: number, token: string, parent?: number,) => {
    await axios.post(`http://188.120.248.77/reviews`,
      { "text": commentText.comment, "user_id": userId, "film_id": filmId, "parent": parent },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }
    ).then(() => getReviews(state.id))
  }

  const { register, handleSubmit, formState: { errors } } = useForm({ mode: "all", });

  const onSubmit: SubmitHandler<Inputs> = data => {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token') ?? '';
      const decoded = AuthService.getDecodedToken(token);

      const commentText = data;
      const userId = decoded.id;
      const filmId = state.id;

      postReview(commentText, userId, filmId, token)

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
        loading ? <Loader filmLoader />
          :
          currentReviews.map((item, index) => {
            return <CommentFullCard key={index} text={item.text} userId={item.user_id} name={item.user_email} filmId={state.id} date={item.createdAt} />
          })
      }
    </>
  )
}

export default CommentsPage