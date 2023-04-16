import React, { useEffect, useState } from 'react'
import styles from './CommentFullCard.module.css'
import { FormattedMessage } from 'react-intl';
import { Button } from '../buttons/Button';
import CommentAnswerFrom from '../commentAnswerForm/CommentAnswerFrom';

export interface CommentFullCardPropsType {
  id?: number;
  name?: string;
  date?: string;
  text?: string;
}

const CommentFullCard = ({
  id = 0,
  name = 'zshvetsik',
  date = '27 февраля 2016',
  text = `После просмотра фильма понял, в чем суть рынка акций.
  Все просто: человеку продают идею, что у компании все будет хорошо.
  Кто считает, что в фильме слишком много секса и наркотиков, почитайте книгу.
  Вот там их действительно дофига.`,
}: CommentFullCardPropsType) => {

  const [showMore, setShowMore] = useState(false)
  const [showExpandElem, setShowExpandElem] = useState(false)

  useEffect(() => {
    if (text.length < 145) {
      setShowExpandElem(false)
    } else {
      setShowExpandElem(true)
    }
  }, [])


  const textElem = document.getElementById(id.toString())
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


  const createAnswer = () => {
    // const forms: any = document.querySelector(`.${styles.commentFormContainer}`);
    // console.log(forms);

    setAnswersList([...answersList, <CommentAnswerFrom />])
  }


  return (
    <ul className={styles.ul} id={id.toString()}>
      <div className={styles.commentFullContainer} id={id.toString()}>
        <div className={styles.commentLeftSide}>
          <div className={styles.commentAvatar}>{name[0]}</div>
          <div className={styles.commentFullMainContainer}>
            <div className={styles.commentNameAndDate}>
              <div className={styles.commentName}>{name}</div>
              <div className={styles.commentDate}>{date}</div>
            </div>
            <div className={styles.commentText}>{currentText}</div>
            <div className={styles.commentReactionContainer}>
              {showExpandElem ? more : <></>}
              <div className={styles.commentToAnswerContainer}>
                <Button onClick={createAnswer} id={id.toString()} size='small' children={<FormattedMessage id='comment_answer_btn' />} />
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