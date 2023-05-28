import React, { useState } from 'react'
import styles from './CommentAnswerForm.module.css'
import { useForm, SubmitHandler } from 'react-hook-form'
import CommentFullCard from '../commentFullCard/CommentFullCard';
import { FormattedMessage, useIntl } from 'react-intl';
import { AuthService } from '../../services/AuthService';
import { api } from '../../services/HttpService';

type Inputs = {
  text?: string
};

export interface CommentAnswerFromPropsType {
  parentId?: number;
  filmId?: number;
  userId?: number;
}

export interface CurrentReviewsType {
  text?: string;
  user_id?: number;
  user_email?: string;
  filmId?: number;
}

const monthNames = ["января", "февраля", "марта", "апреля", "мая", "июня",
  "июля", "августа", "сентября", "октября", "ноября", "декабря"
];

const CommentAnswerFrom = ({ parentId, filmId }: CommentAnswerFromPropsType) => {
  const [answer, setAnswer] = useState<JSX.Element[]>([])
  const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onBlur", });



  const postReview = async (commentText: Inputs, userId: number, filmId: number, token: string, parent?: number,) => {
    await api.post(`/reviews`,
      { "text": commentText.text, "user_id": userId, "film_id": filmId, "parent": parent },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(() => window.location.reload())
  }


  const onSubmit: SubmitHandler<Inputs> = data => {

    const today = new Date();
    const date = `${today.getDate()} ${monthNames[today.getMonth()]} ${today.getFullYear()}`

    const token = localStorage.getItem('token') ?? '';
    const decoded = AuthService.getDecodedToken(token);

    const email = decoded?.email??'';
    const text = data.text

    postReview(data, decoded?.id ?? 0, filmId ?? 0, token, parentId)

    setAnswer([...answer, <CommentFullCard userId={decoded?.id} name={email} text={text} date={date} parentId={parentId ?? 0} />])
  }

  const intl = useIntl()

  const forms = document.querySelectorAll<HTMLElement>(`.${styles.commentFormContainer}`);


  return (
    answer.length > 0 ? answer[0] : forms.length > 1 ? <></> :
      <div className={styles.commentFormContainer}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.commentForm}>
          <div className={styles.commentTextContainer}>
            {errors.text && <span className={styles.commentTextError}>
              <FormattedMessage id='comment_error_text_1' />
            </span>}
            <textarea className={styles.commentFormText} {...register('text', { required: true, minLength: 10 })} placeholder={intl.formatMessage({ id: 'comment_text_placeholder' })} ></textarea>
          </div>
          <input className={styles.commentFormSubmit} type="submit" value={intl.formatMessage({ id: 'comment_submit_value' })} />
        </form>
      </div>
  )
}

export default CommentAnswerFrom