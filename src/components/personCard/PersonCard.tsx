import React, { ReactNode, useState } from 'react'
import styles from './PersonCard.module.css'
import { FormattedMessage } from "react-intl";
import { ActerCardFilm } from '../acterCardFilm/ActerCardFilm';

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
  rating: string;
}



const PersonCard = ({
  image = '',
  firstName = 'Мартин',
  lastName = 'Скорсезе',
  desc = `Мартин Скорсезе (Martin Scorsese) — американский кинорежиссер, продюсер и сценарист. Обладатель множества наград киноиндустрии, в том числе премии «Оскар».`,
  films = [
    {
      id: 0,
      img: 'https://thumbs.dfs.ivi.ru/storage37/contents/2/2/29f0af23c55d95f2c205549d25feaa.jpg/234x360/?q=85',
      year: '2022',
      title: "Убийцы цветочной луны",
      rating: '7.1'
    },
    {
      id: 1,
      img: 'https://thumbs.dfs.ivi.ru/storage37/contents/2/2/29f0af23c55d95f2c205549d25feaa.jpg/234x360/?q=85',
      year: '2021',
      title: "Холодный расчет",
      rating: '5.5'
    },
    {
      id: 2,
      img: 'https://thumbs.dfs.ivi.ru/storage37/contents/2/2/29f0af23c55d95f2c205549d25feaa.jpg/234x360/?q=85',
      year: '2020',
      title: "Синатра",
      rating: '7.1'
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
        {films.map(film => <ActerCardFilm key={film.id} img={film.img} year={film.year} title={film.title} rating={film.rating} />)}
      </div>
      <div className={styles.personCardBreadCrumbs}>
        <a href="/" className={styles.personCardBreadCrumbsLink}><FormattedMessage id='nav_list_myIvi' /></a>
        <span className={styles.personCardBreadCrumbsName}>/ {firstName} {lastName}</span>
      </div>
    </div>
  )
}

export default PersonCard