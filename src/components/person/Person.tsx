import React from 'react'
import styles from './Person.module.css'

export interface PersonProps {
  id?: number;
  image?: string;
  firstName?: string;
  lastName?: string;
  profession?: string;
  films?: number;
}

const Person = ({
  image = 'https://thumbs.dfs.ivi.ru/storage38/contents/b/c/45102370a23e374f4146fe2d106f26.jpeg/88x88/?q=85',
  firstName = 'Джеки',
  lastName = 'Чан',
  profession = 'актёр',
}: PersonProps) => {
  return (
    <>
      <div className={styles.personСontainer}>
        {
          image ?
            <img src={image} className={styles.image} />
            :
            <div className={styles.noImage}>
            </div>
        }
        <div className={styles.textSection}>
          <div className={styles.firstName}>{firstName}</div>
          <div className={styles.lastName}>{lastName}</div>
          <div className={styles.profession}>{profession}</div>
        </div>
      </div>
    </>
  )
}

export default Person