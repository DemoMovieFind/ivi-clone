import React from 'react'
import Person from '../person/Person'
import styles from './PersonContainer.module.css'

const persons = [
  {
    id: 1,
    image: '',
    firstName: 'Юрий',
    lastName: 'Харнас',
    profession: "режисёр",
    films: 2
  },
  {
    id: 2,
    image: '',
    firstName: 'Ольга',
    lastName: 'Копосова',
    profession: "актёр",
    films: 10
  },
  {
    id: 3,
    image: '',
    firstName: 'Ольга',
    lastName: 'Копосова',
    profession: "актёр",
    films: 10
  },
  {
    id: 4,
    image: '',
    firstName: 'Ольга',
    lastName: 'Копосова',
    profession: "актёр",
    films: 10
  },
  {
    id: 5,
    image: '',
    firstName: 'Ольга',
    lastName: 'Копосова',
    profession: "актёр",
    films: 10
  },
  {
    id: 6,
    image: '',
    firstName: 'Ольга',
    lastName: 'Копосова',
    profession: "актёр",
    films: 10
  },
  {
    id: 7,
    image: '',
    firstName: 'Ольга',
    lastName: 'Копосова',
    profession: "актёр",
    films: 10
  }
]

const PersonContainer = () => {
  return (
    <div className={styles.container}>
      {persons.map((person, index) => <Person key={index.toString()} {...person} />)}
    </div>
  )
}

export default PersonContainer