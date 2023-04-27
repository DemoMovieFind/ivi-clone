/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react'
import Person from '../person/Person'
import styles from './PersonContainer.module.css'
import PersonMoreCard from '../person/personMoreCard/PersonMoreCard'
import { NavLink } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

export interface PersonContainerPropsType {
  persons?: string[]
}

// const personsList = [
//   {
//     id: 1,
//     image: '',
//     firstName: 'Юрий',
//     lastName: 'Харнас',
//     profession: "режисёр",
//     films: 2
//   },
//   {
//     id: 2,
//     image: '',
//     firstName: 'Ольга',
//     lastName: 'Копосова',
//     profession: "актёр",
//     films: 10
//   },
//   {
//     id: 3,
//     image: '',
//     firstName: 'Ольга',
//     lastName: 'Копосова',
//     profession: "актёр",
//     films: 10
//   },
//   {
//     id: 4,
//     image: '',
//     firstName: 'Ольга',
//     lastName: 'Копосова',
//     profession: "актёр",
//     films: 10
//   },
//   {
//     id: 5,
//     image: '',
//     firstName: 'Ольга',
//     lastName: 'Копосова',
//     profession: "актёр",
//     films: 10
//   },
//   {
//     id: 6,
//     image: '',
//     firstName: 'Ольга',
//     lastName: 'Копосова',
//     profession: "актёр",
//     films: 10
//   },
//   {
//     id: 7,
//     image: 'https://thumbs.dfs.ivi.ru/storage38/contents/b/c/45102370a23e374f4146fe2d106f26.jpeg/88x88/?q=85',
//     firstName: 'Джеки',
//     lastName: 'Чан',
//     profession: "актёр",
//     films: 10
//   },
//   {
//     id: 8,
//     image: 'https://thumbs.dfs.ivi.ru/storage38/contents/b/c/45102370a23e374f4146fe2d106f26.jpeg/88x88/?q=85',
//     firstName: 'Джеки',
//     lastName: 'Чан',
//     profession: "актёр",
//     films: 10
//   },
//   {
//     id: 9,
//     image: 'https://thumbs.dfs.ivi.ru/storage38/contents/b/c/45102370a23e374f4146fe2d106f26.jpeg/88x88/?q=85',
//     firstName: 'Джеки',
//     lastName: 'Чан',
//     profession: "актёр",
//     films: 10
//   },
//   {
//     id: 10,
//     image: 'https://thumbs.dfs.ivi.ru/storage38/contents/b/c/45102370a23e374f4146fe2d106f26.jpeg/88x88/?q=85',
//     firstName: 'Джеки',
//     lastName: 'Чан',
//     profession: "актёр",
//     films: 10
//   },
// ]

const PersonContainer = ({
  persons = []
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
        <span className={styles.personsContainerTitleText}><FormattedMessage id='person_container_persons' /></span>
      </div>
      <div className={styles.container}>
        {currentPersons.map((person, index) => {
          return <NavLink key={index} to={`/persons/${person}`} state={person}><Person name={person} /></NavLink>
        })}
        <NavLink to={`./persons`} ><PersonMoreCard /></NavLink>
      </div>
    </>
  )
}

export default PersonContainer