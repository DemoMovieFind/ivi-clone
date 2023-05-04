import React, { useEffect, useState } from 'react'
import Person from '../person/Person'
import styles from './PersonContainer.module.css'
import PersonMoreCard from '../person/personMoreCard/PersonMoreCard'
import { NavLink } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import { FilmWatchCardType } from '../../types/entities/FilmWatchCardType'

export interface PersonContainerPropsType {
  persons?: string[];
  film?: FilmWatchCardType;
  title?: string;
  noMore?: boolean;
  profession?: string;
}

const PersonContainer = ({
  persons = [],
  film,
  title,
  noMore = false,
  profession = 'actors',
}: PersonContainerPropsType) => {

  const [currentPersons, setCurrentPersons] = useState<string[]>([])

  useEffect(() => {
    if (persons.length >= 9) {
      setCurrentPersons(persons.slice(0, 9))
    } else {
      setCurrentPersons(persons)
    }
  }, [])

  return (
    <>
      <div className={styles.personsContainerTitle}>
        <span className={styles.personsContainerTitleText}>
          {title ? title : <FormattedMessage id='person_container_persons' />}
        </span>
      </div>
      <div className={noMore ? styles.bigContainer : styles.container}>
        {currentPersons.map((person, index) => {
          return <NavLink key={index} to={`/persons/${person}`} state={{ person, profession, film }}>
            <Person name={person} films={noMore ? 4 : 0} />
          </NavLink>
        })}
        {noMore ? '' : <NavLink to={`./persons`} state={film}><PersonMoreCard /></NavLink>}
      </div>
    </>
  )
}

export default PersonContainer