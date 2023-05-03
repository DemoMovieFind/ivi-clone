import React, { ReactNode, useState } from 'react'
import styles from './PersonCard.module.css'
import { FormattedMessage } from "react-intl";
import { ActorCardFilm } from '../actorCardFilm/ActorCardFilm';
import { Film } from '../../types/entities/Film';
import { useLocation } from 'react-router';

export interface PersonCardPropsType {
  image?: string;
  name?: string;
  desc?: string;
  films?: Film[];
}


const PersonCard = ({
  image,
  name,
  desc = `Мартин Скорсезе (Martin Scorsese) — американский кинорежиссер, продюсер и сценарист. Обладатель множества наград киноиндустрии, в том числе премии «Оскар».`,
  films = [
    {
      id: 0,
      title: "Убийцы цветочной луны",
      year: 2022,
      posters: {
        small: {
          url: 'https://thumbs.dfs.ivi.ru/storage4/contents/1/b/8c8ebc907995aee3e57439f8a38702.jpg/172x264/?q=85'
        }
      },
      rating: {
        ivi: 7.1
      }
    },
    {
      id: 1,
      title: "Холодный расчет",
      year: 2021,
      posters: {
        small: {
          url: 'https://thumbs.dfs.ivi.ru/storage8/contents/4/1/80d1f637cee8773fd331947249a840.jpg/172x264/?q=85'
        }
      },
      rating: {
        ivi: 5.5
      }
    },
    {
      id: 2,
      title: "Синатра",
      year: 2020,
      posters: {
        small: {
          url: 'https://thumbs.dfs.ivi.ru/storage33/contents/6/a/a700332f290b273bc1437ae389696c.jpg/172x264/?q=85'
        }
      },
      rating: {
        ivi: 7.1
      }
    },
  ],
}: PersonCardPropsType) => {

  const { state } = useLocation()
  name = state

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
      <div className={styles.titleName}>{name}</div>
      <div className={styles.name}>{name}</div>
      <div className={styles.personStory}>
        {currentDesc}
        {more}
      </div>
      <div className={styles.totalFilmsContainer}>
        <a href='#' ><div className={styles.totalFilms}>{films?.length} {filmsWords[ending(films?.length)]}</div></a>
        <span>•</span>
        <a href="#"><FormattedMessage id='person_card_biography' /></a>
      </div>
      <div className={styles.fullFilmTitleContainer}>
        <div className={styles.fullFilmTitle}><FormattedMessage id='person_card_filmography' /></div>
        <div className={styles.fullFilmTitleTotal}>{films?.length} {filmsWords[ending(films?.length)]}</div>
      </div>
      <div className={styles.filmsContainer}>
        {films.map(film => <ActorCardFilm key={film.id} film={film} />)}
      </div>
      <div className={styles.personCardBreadCrumbs}>
        <a href="/" className={styles.personCardBreadCrumbsLink}><FormattedMessage id='nav_list_myIvi' /></a>
        <span className={styles.personCardBreadCrumbsName}>/ {name}</span>
      </div>
    </div>
  )
}

export default PersonCard