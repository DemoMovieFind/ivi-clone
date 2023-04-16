import React, { useState } from 'react'
import styles from './CommentAnswerForm.module.css'
import { useForm, SubmitHandler } from 'react-hook-form'
import CommentFullCard from '../commentFullCard/CommentFullCard';
import { FormattedMessage, useIntl } from 'react-intl';

type Inputs = {
  userName?: string,
  text?: string,
};

const monthNames = ["января", "февраля", "марта", "апреля", "мая", "июня",
  "июля", "августа", "сентября", "октября", "ноября", "декабря"
];

const CommentAnswerFrom = () => {
  const [answer, setAnswer] = useState<JSX.Element[]>([])
  const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onBlur", });
  const onSubmit: SubmitHandler<Inputs> = data => {

    const today = new Date();
    const date = `${today.getDate()} ${monthNames[today.getMonth()]} ${today.getFullYear()}`

    setAnswer([...answer, <CommentFullCard id={Math.random()} name={data.userName} text={data.text} date={date} />])
  }

  const intl = useIntl()

  const forms = document.querySelectorAll<HTMLElement>(`.${styles.commentFormContainer}`);


  return (
    answer.length > 0 ? answer[0] : forms.length > 1 ? <></> :
      <div className={styles.commentFormContainer}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.commentForm}>
          <div className={styles.commentNameContainer}>
            <input className={styles.commentFormName} {...register('userName', { required: true, pattern: /^[A-Za-zА-Яа-я]+$/i })} placeholder={intl.formatMessage({ id: 'comment_username_placeholder' })} />
            {errors.userName && <span className={styles.commentNameError}>
              <FormattedMessage id='comment_error_username' />
            </span>}
          </div>
          <div className={styles.commentTextContainer}>
            <textarea className={styles.commentFormText} {...register('text', { required: true, minLength: 10, maxLength: 300 })} placeholder={intl.formatMessage({ id: 'comment_text_placeholder' })} ></textarea>
            {errors.text && <span className={styles.commentTextError}>
              <FormattedMessage id='comment_error_text_1' /><br />
              <FormattedMessage id='comment_error_text_2' />
            </span>}
          </div>
          <input className={styles.commentFormSubmit} type="submit" value={intl.formatMessage({ id: 'comment_submit_value' })} />
        </form>
      </div>
  )
}

export default CommentAnswerFrom