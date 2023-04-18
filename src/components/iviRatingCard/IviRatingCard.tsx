import React from 'react'
import styles from './IviRatingCard.module.css'
import { Button } from '../buttons/Button'
import { FormattedMessage } from 'react-intl';

export interface IviRatingCardPropsType {
  rating?: string;
}

const IviRatingCard = ({
  rating = '8.9'
}: IviRatingCardPropsType) => {
  return (
    <div className={styles.iviRatingCardContainer}>
      <div className={styles.iviRatingCardInfoContainer}>
        <div className={styles.iviRatingPlate}>{rating}</div>
        <div className={styles.iviRatingCardInfo}>
          <div className={styles.iviRatingCardTitle}><FormattedMessage id='ivi_rating' /></div>
          <div className={styles.iviRatingCardSubtitle}><FormattedMessage id='ivi_interesting_plot' /></div>
          <div className={styles.iviRatingCardMarks}>143 442 <FormattedMessage id='ivi_marks' /></div>
        </div>
      </div>
      <Button size='small' appearance='iviRating' children={<FormattedMessage id='ivi_button_mark' />} />
    </div>
  )
}

export default IviRatingCard