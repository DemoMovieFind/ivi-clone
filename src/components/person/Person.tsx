import React from 'react'
import styles from './Person.module.css'

export interface PersonProps {
  image?: string;
  firstName?: string;
  lastName?: string;
  profession?: string;
  films?: number;
}

const Person = (props: PersonProps) => {
  return (
    <div className={styles.personСontainer}>
      {
        props?.image ?
          <img src={props.image} className={styles.image} />
          :
          <div className={styles.noImage}>
          </div>
      }
      <div className="text-section">
        <div className={styles.firstName}>{props.firstName}</div>
        <div className={styles.lastName}>{props.lastName}</div>
        <div className={styles.profession}>{props.profession}</div>
      </div>
    </div>
  )
}

export default Person