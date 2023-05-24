import React from 'react'
import styles from './CardTopFilm.module.css'
import { FilmMainCard } from '../../types/entities/FilmMainCard'
import number0 from '../../image/filmTopNumbers/number0.svg';
import number1 from '../../image/filmTopNumbers/number1.svg';
import number2 from '../../image/filmTopNumbers/number2.svg';
import number3 from '../../image/filmTopNumbers/number3.svg';
import number4 from '../../image/filmTopNumbers/number4.svg';
import number5 from '../../image/filmTopNumbers/number5.svg';
import number6 from '../../image/filmTopNumbers/number6.svg';
import number7 from '../../image/filmTopNumbers/number7.svg';
import number8 from '../../image/filmTopNumbers/number8.svg';
import number9 from '../../image/filmTopNumbers/number9.svg';

export interface CardTopFilmPropsType {
  film?: FilmMainCard;
  count?: number;
}

const CardTopFilm = ({
  film,
  count,
}: CardTopFilmPropsType) => {

  const numberList = [number0, number1, number2, number3, number4, number5, number6, number7, number8, number9]

  const currentNumber = numberList[count || count == 0 ? count + 1 : 0];

  return (
    <div className={styles.filmTopContainer}>
      <img src={film?.mainImg} alt="poster" className={styles.filmPoster} />
      <div className={styles.filmTopCount}>
        {
          count && count + 1 == 10 ?
            <div className={styles.numberContainer}>
              <img className={styles.number} src={number1} alt="number" />
              <img className={styles.number} src={number0} style={{ marginLeft: `-10px` }} alt="number" />
            </div>
            :
            <div className={styles.numberContainer}>
              <img className={styles.number} src={currentNumber} alt="number" />
            </div>
        }
      </div>
    </div>
  )
}

export default CardTopFilm