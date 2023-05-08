import React, { useEffect, useState } from 'react'
import styles from './CommentFullCard.module.css'
import { FormattedMessage } from 'react-intl';
import { Button } from '../buttons/Button';
import CommentAnswerFrom from '../commentAnswerForm/CommentAnswerFrom';

export interface CommentFullCardPropsType {
  userId?: number;
  name?: string;
  date?: string;
  text?: string;
  parentId?: number;
  filmId?: number;
}

const CommentFullCard = ({
  userId = 1,
  name,
  date = ``,
  text = `После просмотра фильма понял, в чем суть рынка акций.
  Все просто: человеку продают идею, что у компании все будет хорошо.
  Кто считает, что в фильме слишком много секса и наркотиков, почитайте книгу.
  Вот там их действительно дофига.`,
  parentId,
  filmId,
}: CommentFullCardPropsType) => {

  const [showMore, setShowMore] = useState(false)
  const [showExpandElem, setShowExpandElem] = useState(false)

  const lang = localStorage.getItem('lang') ?? 'ru-RU';
  date = new Date(date).toLocaleDateString(lang, { year: 'numeric', month: 'long', day: 'numeric' })

  // console.log(parentId);
  // console.log(userId);


  useEffect(() => {
    if (text.length < 145) {
      setShowExpandElem(false)
    } else {
      setShowExpandElem(true)
    }
  }, [])


  const textElem = document.getElementById(userId.toString())
  const toggle = () => {
    setShowMore(showMore ? false : true)
    showMore ? textElem?.classList.remove(styles.preLine) : textElem?.classList.add(styles.preLine)
  }

  let smallText = ''
  if (text.length < 145) {
    smallText = text
  } else {
    smallText = text.slice(0, 145) + '...'
  }

  const currentText = showMore ?
    <div className={styles.desc}>{text}</div>
    :
    <div className={styles.desc}>{smallText}</div>

  const more = showMore ?
    <div className={styles.hide} onClick={toggle}><FormattedMessage id='person_card_roll_up' /></div>
    :
    <div className={styles.show} onClick={toggle}><FormattedMessage id='person_card_roll_down' /></div>


  const [answersList, setAnswersList] = useState<JSX.Element[]>([])


  const createAnswer = (parentId: number) => {
    if (localStorage.getItem('token')) {
      setAnswersList([...answersList, <CommentAnswerFrom parentId={parentId} filmId={filmId} />])
    } else {
      location.href = '/auth'
    }
  }


  return (
    <ul className={styles.ul} id={userId.toString()}>
      <div className={styles.commentFullContainer} id={userId.toString()}>
        <div className={styles.commentLeftSide}>
          <div className={styles.commentAvatar}>{name ? name[0] : 'A'}</div>
          <div className={styles.commentFullMainContainer}>
            <div className={styles.commentNameAndDate}>
              <div className={styles.commentName}>{name ? name : 'Anonim'}</div>
              <div className={styles.commentDate}>{date ? date : '00.00.0000'}</div>
            </div>
            <div className={styles.commentText}>{currentText}</div>
            <div className={styles.commentReactionContainer}>
              {showExpandElem ? more : <></>}
              <div className={styles.commentToAnswerContainer}>
                <Button onClick={() => createAnswer(userId)} id={userId.toString()} size='small' children={<FormattedMessage id='comment_answer_btn' />} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.commentLikesContainer}>
          <div className={styles.like}></div>
          <span className={styles.totalLikes}>36</span>
          <div className={styles.dislike}></div>
        </div>
      </div>
      {answersList.map((elem, index) => <li className={styles.answerElem} key={index.toString()}>{elem}</li>)}
    </ul>
  )
}

export default CommentFullCard