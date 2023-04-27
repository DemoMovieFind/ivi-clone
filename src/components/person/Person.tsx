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
          <div className={styles.name}>{name}</div>
          <div className={styles.profession}>{profession}</div>
        </div>
      </div>
    </>
  )
}

export default Person