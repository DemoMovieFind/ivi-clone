import React from 'react'
import styles from './CommentCard.module.css'

export interface CommentCardPropsType {
  userId?: number;
  name?: string;
  text?: string;
  date?: string;
}

const CommentCard = ({
  userId = 0,
  name,
  text = `После просмотра фильма понял, в чем суть рынка акций.
  Все просто: человеку продают идею, что у компании все будет хорошо.
  Кто считает, что в фильме слишком много секса и наркотиков, почитайте книгу.
  Вот там их действительно дофига.`,
  date
}: CommentCardPropsType) => {

  const lang = localStorage.getItem('lang') ?? 'ru-RU';
  date = new Date(date ?? '').toLocaleDateString(lang, { year: "numeric", month: "long", day: "numeric" })


  let currentText = '';
  if (text.length > 75) {
    currentText = text.slice(0, 76) + '...'
  } else {
    currentText = text
  }


  return (
    <div className={styles.commentContainer} id={userId.toString()}>
      <div>
        <div className={styles.commentName}>{name ? name : 'Anonim'}</div>
        <div className={styles.commentText}>{currentText}</div>
      </div>
      <div className={styles.commentBottom}>
        <div className={styles.commentDate}>{date ? date : '00.00.0000'}</div>
        <div className={styles.commentLikesContainer}>
          <div className={styles.like}></div>
          <span className={styles.totalLikes}>36</span>
          <div className={styles.dislike}></div>
        </div>
      </div>
    </div>
  )
}

export default CommentCard