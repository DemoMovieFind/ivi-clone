import React, { useEffect, useState } from 'react'
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

  const [userName, setUserName] = useState('')
  const [commentDate, setCommentDate] = useState('')

  const getUserName = async (userId: number) => {
    const token = localStorage.getItem('token') ?? '';
    const lang = localStorage.getItem('lang') ?? 'ru-RU';

    await fetch(`http://188.120.248.77/user/${userId}`, { headers: { Authorization: `Bearer ${token}` } })
      .then(res => res.json())
      .then(data => {
        date = new Date(data.createdAt).toLocaleDateString(lang, { year: "numeric", month: "long", day: "numeric" })
        setCommentDate(date)
        setUserName(data.email)
      })
  }

  useEffect(() => {
    getUserName(userId)
  }, [])


  let currentText = '';
  if (text.length > 95) {
    currentText = text.slice(0, 96) + '...'
  } else {
    currentText = text
  }


  return (
    <div className={styles.commentContainer} id={userId.toString()}>
      <div>
        <div className={styles.commentName}>{name ? name : userName ? userName : 'Anonim'}</div>
        <div className={styles.commentText}>{currentText}</div>
      </div>
      <div className={styles.commentBottom}>
        <div className={styles.commentDate}>{commentDate != 'Invalid Date' ? commentDate : '00.00.0000'}</div>
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