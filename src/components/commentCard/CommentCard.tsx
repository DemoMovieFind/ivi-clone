import React from 'react'
import styles from './CommentCard.module.css'

export interface CommentCardPropsType {
  id?: number;
  name?: string;
  text?: string;
  date?: string;
}

const CommentCard = ({
  id = 0,
  name = 'zshvetsik',
  text = `После просмотра фильма понял, в чем суть рынка акций.
  Все просто: человеку продают идею, что у компании все будет хорошо.
  Кто считает, что в фильме слишком много секса и наркотиков, почитайте книгу.
  Вот там их действительно дофига.`,
  date = '27 февраля 2016'
}: CommentCardPropsType) => {

  let currentText = '';
  if (text.length > 95) {
    currentText = text.slice(0, 96) + '...'
  } else {
    currentText = text
  }


  return (
    <div className={styles.commentContainer} id={id.toString()}>
      <div className={styles.commentName}>{name}</div>
      <div className={styles.commentText}>{currentText}</div>
      <div className={styles.commentBottom}>
        <div className={styles.commentDate}>{date}</div>
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