import React from 'react'
import styles from './Person.module.css'
import { FormattedMessage, useIntl } from 'react-intl';

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

  const intl = useIntl();

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
          <div className={styles.profession}>{films ? '' : profession ? profession : <FormattedMessage id='persons_filter_actor_low' />}</div>
          <div className={styles.profession}>{films ? `${films} ${intl.formatMessage({ id: 'person_card_film_2' })}` : ''}</div>
        </div>
      </div>
    </>
  )
}

export default Person