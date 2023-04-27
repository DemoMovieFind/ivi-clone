import React from 'react'
import styles from './PersonMoreCard.module.css'
import { FormattedMessage } from 'react-intl'

const PersonMoreCard = () => {
  return (
    <div className={styles.personMoreContainer}>
      <div className={styles.moreText}><FormattedMessage id='person_card_more' /></div>
    </div>
  )
}

export default PersonMoreCard