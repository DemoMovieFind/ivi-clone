import React from 'react'
import styles from './PersonCardMini.module.css'

export interface personCardMiniPropsType {
  name?: string;
  img?: string;
  rating?: string;
}

const PersonCardMini = ({
  name = '',
  img = '',
  rating = '',
}: personCardMiniPropsType) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        {
          rating ?
            <div className={styles.iviBlock}>{rating}</div>
            :
            img ?
              <img src={img} className={styles.image} />
              :
              <div className={styles.noImage}>
              </div>
        }
      </div>
      <div className={styles.name}>
        {name ? name : 'Рейтинг Иви'}
      </div>
    </div>
  )
}

export default PersonCardMini