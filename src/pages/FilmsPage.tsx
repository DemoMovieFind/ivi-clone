import React, { useState, useEffect } from "react";

import { FilterBar } from "../components/filterBar/FilterBar";
import { NavLink, useSearchParams } from "react-router-dom";
import { CardFilm } from "../components/cardFilm/cardFilm";

import styles from './FilmsPage.module.css'

import films from '../miniDb.json'


interface User {
  name: string,
  year: string,
  country: string[],
  genre: string[]
}



export default function FilmsPage() {

  const [searchParams] = useSearchParams();
  // const [films, setFilms] = useState(Array<User>)



  // useEffect(() => {
  //   const src = searchParams.toString();
  //   // console.log(decodeURI(src));
  //   fetch(`http://localhost:3000/films/?${decodeURI(src).toLowerCase()}`)
  //     .then((response) => response.json())
  //     .then((data) => setFilms(data));

  //     console.log(films)
  // }, [searchParams]);



  return (
    <div className={styles.filmsPage}>
      <FilterBar />
      <section className={styles.filmsList}>
        {films.map(filmz => {
          return <NavLink to={`./${filmz.name}`} state={filmz}><CardFilm film={filmz} /></NavLink>
        })}
      </section>

    </div>
  );
}
