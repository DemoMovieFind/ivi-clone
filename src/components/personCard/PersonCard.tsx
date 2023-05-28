import { ReactNode, useEffect, useState } from 'react'
import styles from './PersonCard.module.css'
import { FormattedMessage } from "react-intl";
import { ActorCardFilm } from '../actorCardFilm/ActorCardFilm';
import { useLocation } from 'react-router';
import { FilmWatchCardType } from '../../types/entities/FilmWatchCardType';
import Loader from '../loader/Loader';
import { api } from '../../services/HttpService';

export interface PersonCardPropsType {
  image?: string;
  name?: string;
  profession?: string;
  desc?: string;
  films?: FilmWatchCardType[];
  film?: FilmWatchCardType[];
}

const PersonCard = ({
  image,
  name,
  profession,
  film,
  desc = `Мартин Скорсезе (Martin Scorsese) — американский кинорежиссер, продюсер и сценарист. Обладатель множества наград киноиндустрии, в том числе премии «Оскар».`,
}: PersonCardPropsType) => {

  const [currentFilms, setCurrentFilms] = useState<FilmWatchCardType[]>([])
  const [loading, setLoading] = useState(true)

  const { state } = useLocation()
  name = state?.person
  profession = state?.profession
  film = [state?.film]


  useEffect(() => {
    getFilms()
  }, [])

  const getFilms = async () => {
    await api.get(`/films?order=ASC&page=1&take=10&orderBy=scoreAVG&${profession}=${name}`)
      .then(data => setCurrentFilms(profession == 'actors' || profession == 'directors' ? data.data : film))
      .then(() => setLoading(false))
  }
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
        <a href='#' ><div className={styles.totalFilms}>{currentFilms.length} {filmsWords[ending(currentFilms.length)]}</div></a>
        <span>•</span>
        <a href="#"><FormattedMessage id='person_card_biography' /></a>
      </div>
      <div className={styles.fullFilmTitleContainer}>
        <div className={styles.fullFilmTitle}><FormattedMessage id='person_card_filmography' /></div>
        <div className={styles.fullFilmTitleTotal}>{currentFilms.length} {filmsWords[ending(currentFilms.length)]}</div>
      </div>
      <div className={styles.filmsContainer}>
        {currentFilms.length == 0 ? <Loader filmLoader /> : currentFilms.map((film) => loading ? <Loader filmLoader /> : <ActorCardFilm key={film?.id} film={film} />)}
      </div>
      <div className={styles.personCardBreadCrumbs}>
        <a href="/" className={styles.personCardBreadCrumbsLink}><FormattedMessage id='nav_list_myIvi' /></a>
        <span className={styles.personCardBreadCrumbsName}>/ {name}</span>
      </div>
    </div>
  )
}

export default PersonCard