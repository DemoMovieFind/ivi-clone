import React from 'react'
import Person from '../person/Person'
import styles from './Container.module.css'

const persons = [
  {
    image: '',
    firstName: 'Юрий',
    lastName: 'Харнас',
    profession: "режисёр",
    films: 2
  },
  {
    image: '',
    firstName: 'Ольга',
    lastName: 'Копосова',
    profession: "актёр",
    films: 10
  },
  {
    image: '',
    firstName: 'Ольга',
    lastName: 'Копосова',
    profession: "актёр",
    films: 10
  },
  {
    image: '',
    firstName: 'Ольга',
    lastName: 'Копосова',
    profession: "актёр",
    films: 10
  },
  {
    image: '',
    firstName: 'Ольга',
    lastName: 'Копосова',
    profession: "актёр",
    films: 10
  },
  {
    image: '',
    firstName: 'Ольга',
    lastName: 'Копосова',
    profession: "актёр",
    films: 10
  },
  {
    image: '',
    firstName: 'Ольга',
    lastName: 'Копосова',
    profession: "актёр",
    films: 10
  }
]

const Test = () => {
  return (
    <div className={styles.container}>
      {persons.map((person, index) => <Person key={index.toString()} {...person} />)}
    </div>
  )
}

export default Test