import React, { ReactNode, useState } from 'react'
import styles from './PersonCard.module.css'
import { FormattedMessage } from "react-intl";

export interface PersonCardPropsType {
  image?: string;
  firstName?: string;
  lastName?: string;
  desc?: string;
  films?: FilmPropsType[];
}

export interface FilmPropsType {
  id: number;
  img: string;
  year: string;
  title: string;
  rate: string;
}



const PersonCard = ({
  image = '',
  firstName = 'Мартин',
  lastName = 'Скорсезе',
  desc = `Мартин Скорсезе (Martin Scorsese) — американский кинорежиссер, продюсер и сценарист. Обладатель множества наград киноиндустрии, в том числе премии «Оскар».`,
  films = [
    {
      id: 0,
      img: '',
      year: '2022',
      title: "Убийцы цветочной луны",
      rate: '7.1'
    },
    {
      id: 1,
      img: '',
      year: '2021',
      title: "Холодный расчет",
      rate: '5.5'
    },
  ],
}: PersonCardPropsType) => {

  const [showMore, setShowMore] = useState(false)


  let smallDesc = ''
  if (desc.split(" ").length < 12) {
    smallDesc = desc
  } else {
    smallDesc = desc.split(" ").slice(0, 13).join(' ') + '...'
  }


  const toggle = () => {
    setShowMore(showMore ? false : true)
  }

  const currentDesc = showMore ?
    <div className={styles.desc}>{desc}</div>
    :
    <div className={styles.desc}>{smallDesc}</div>


  const more = showMore ?
    <div className={styles.hide} onClick={toggle}><FormattedMessage id='person_card_roll_up' /></div>
    :
    <div className={styles.show} onClick={toggle}><FormattedMessage id='person_card_roll_down' /></div>


  const ending = (number: number) => {
    return (number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? Math.abs(number) % 10 : 5];
  }


  const filmsWords: ReactNode[] = [
    <FormattedMessage id='person_card_film_1' />,
    <FormattedMessage id='person_card_film_2' />,
    <FormattedMessage id='person_card_film_3' />,
  ]


  return (
    <div className={styles.personCardContainer}>
      {
        image ?
          <img src={image} className={styles.image} />
          :
          <div className={styles.noImage}>
          </div>
      }
      <div className={styles.titleName}>{firstName} {lastName}</div>
      <div className={styles.name}>{firstName} {lastName}</div>
      <div className={styles.personStory}>
        {currentDesc}
        {more}
      </div>
      <div className={styles.totalFilmsContainer}>
        <a href='#' ><div className={styles.totalFilms}>{films.length} {filmsWords[ending(films.length)]}</div></a>
        <span>•</span>
        <a href="#"><FormattedMessage id='person_card_biography' /></a>
      </div>
      <div className={styles.fullFilmTitleContainer}>
        <div className={styles.fullFilmTitle}><FormattedMessage id='person_card_filmography' /></div>
        <div className={styles.fullFilmTitleTotal}>{films.length} {filmsWords[ending(films.length)]}</div>
      </div>
      <div className={styles.filmsContainer}>
        {films.map((film, index) => {
          return <div key={(index).toString()} className={styles.filmCard}>
            <div>{film.title}</div>
          </div>
        })}
      </div>
    </div>
  )
}

export default PersonCard