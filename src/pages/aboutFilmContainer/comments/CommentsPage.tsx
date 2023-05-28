import React, { useEffect, useState } from 'react'
import styles from './CommentsPage.module.css';
import CommentFullCard from '../../../components/commentFullCard/CommentFullCard';
import { useLocation } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AuthService } from '../../../services/AuthService';
import Loader from '../../../components/loader/Loader';
import { api } from '../../../services/HttpService';

type Inputs = {
  comment?: string;
};

export interface CurrentReviewsType {
  text?: string;
  user_id?: number;
  user_email?: string;
  filmId?: number;
  createdAt?: string;
  parent?: number;
  id?: number;
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
    await api.get(`/reviews/film/${id}`)
      .then(res => {
        setCurrentReviews(res.data)
      })
      .then(() => setLoading(false))
  }

  const postReview = async (commentText: Inputs, userId: number, filmId: number, token: string, parent?: number,) => {
    await api.post(`/reviews`,
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
      const userId = decoded?.id??0;
      const filmId = state.id;

      postReview(commentText, userId, filmId, token, userId)

    } else {
      location.href = `/auth`
    }
  }


  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dict: any = {}


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
            if (item.user_id != item.parent) {
              const elem =
                <CommentFullCard
                  key={index}
                  text={item.text}
                  userId={item.user_id}
                  name={item.user_email}
                  filmId={state.id}
                  date={item.createdAt}
                  parentId={item.parent}
                  children={true}
                  commentId={item.id}
                />
              if (dict[item.parent ?? 0]) {
                dict[item.parent ?? 0] = [...dict[item.parent ?? 0], elem]
              }
            } else {
              const elem =
                <CommentFullCard
                  key={index}
                  text={item.text}
                  userId={item.user_id}
                  name={item.user_email}
                  filmId={state.id}
                  date={item.createdAt}
                  parentId={item.parent}
                  children={false}
                  commentId={item.id}
                />
              if (dict[item.parent ?? 0] == undefined) {
                dict[item.parent ?? 0] = [elem]
              } else {
                dict[`${(item.parent ?? 0) + Math.random()}`] = [elem]
              }
            }
          })
      }
      {Object.entries(dict).map((item) => item[1])}
    </>
  )
}

export default CommentsPage