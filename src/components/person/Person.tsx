import React from 'react'
import styles from './Person.module.css'

export interface PersonProps {
  id?: number;
  image?: string;
  name?: string;
  profession?: string;
  films?: number;
}

const Person = ({
  image = '',
  name = '',
  profession = '',
  films,
}: PersonProps) => {
  return (
    <>
      <div className={films ? styles.bigPersonСontainer : styles.personСontainer}>
        {
          image ?
            <img src={image} className={films ? styles.bigImg : styles.image} />
            :
            <div className={films ? styles.bigNoImg : styles.noImage}>
            </div>
        }
        <div className={styles.textSection}>
          <div className={styles.name}>{name}</div>
          <div className={styles.profession}>{films ? '' : profession ? profession : 'актёр'}</div>
          <div className={styles.profession}>{films ? `${films} фильма` : ''}</div>
        </div>
      </div>
    </>
  )
}

export default Person