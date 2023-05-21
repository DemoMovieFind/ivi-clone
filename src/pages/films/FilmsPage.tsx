/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

import { FilterBar } from "../../components/filterBar/FilterBar";
import { NavLink, useSearchParams } from "react-router-dom";
import { CardFilm } from "../../components/cardFilm/cardFilm";
import styles from "./FilmsPage.module.css";
import { BreadCrumbs } from "../../components/breadCrumbs/BreadCrumbs";
import { TitlePage } from "../../components/titlePage/TitlePage";
import { ParametersInfo } from "../../components/parametersInfo/ParametersInfo";
import { FilmMainCard } from "../../types/entities/FilmMainCard";
import axios from "axios";
import Loader from "../../components/loader/Loader";


const FilmsPage = () => {
  const [searchParams] = useSearchParams();
  const urlParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlParams.entries());
  const [isVisible, setIsVisible] = useState(false);

  const [loading, setLoading] = useState(false)

  const [films, setFilms] = useState<FilmMainCard[]>([]);
  const [currentActors, setCurrentActors] = useState<string[]>([])
  const [currentDirectors, setCurrentDirectors] = useState<string[]>([])

  useEffect(() => {
    fetch(`http://188.120.248.77/films?order=ASC&page=1&take=18&orderBy=scoreAVG&minCountScore=0&yearStart=0&yearEnd=2222`)
      .then((response) => response.json())
      .then((data) => {
        setFilms(data);
      })
      .then(() => getPersons(films))
      .catch((error) => {
        console.log(error, "error");
      });
  }, []);

  const expand = () => {
    setIsVisible(!isVisible);
  };


  useEffect(() => {
    let countries: string[] = [];
    let genres: string[] = [];
    let year = '';
    let actor = '';
    let director = '';
    let rating: string[] = [];
    let score = '';

    Object.keys(params).map((key) => {
      key == 'countries' ?
        countries = params[key].split(' ')
        : key == 'genres' ?
          genres = params[key].split(' ')
          : key == 'year' ?
            year = params[key]
            : key == 'actor' ?
              actor = params[key]
              : key == 'director' ?
                director = params[key]
                : key == 'rating' ?
                  rating = params[key].split(' ')
                  : key == 'score' ?
                    score = params[key]
                    : ''
    })
    getFilteredFilms(countries, genres, year, actor, director, +rating[0], +rating[1], score)
  }, [params['genres'], params['countries'], params['year'], params['score'], params['rating'], params['actor'], params['director']])

  const getFilteredFilms = async (
    countries?: string[],
    genres?: string[],
    year?: string,
    actor?: string,
    director?: string,
    ratingStart?: number,
    ratingEnd?: number,
    score?: string) => {

    let countriesString = '';
    countries ?
      countries.map((country) => countriesString +=
        country == 'Новая Зеландия' ?
          `&countries=Новая Зеландия` :
          country == 'Южная Корея' ?
            `&countries=Южная Корея` :
            `&countries=${country}`) :
      '';

    let genresString = '';
    genres ? genres.map((genre) => genresString += `&genres=${genre.toLocaleLowerCase()}`) : '';

    const currentScore = score ? +score * 1000 : 0;

    ratingStart = ratingStart ? Math.floor(+ratingStart) : 0;
    ratingEnd = ratingEnd ? Math.ceil(+ratingEnd) : 10;

    let minYear = '';
    let maxYear = '';
    if (year && year.length > 5) {
      minYear = year.split('-')[0];
      maxYear = year.split('-')[1];
    } else if (year?.length == 4) {
      minYear = '0';
      maxYear = year;
    } else {
      minYear = '0';
      maxYear = '2222';
    }

    setLoading(true)
    await axios.get(`http://188.120.248.77/films?order=ASC&page=1&take=18&orderBy=scoreAVG${genresString}${countriesString}&actors=${actor}&directors=${director}&ratingStart=${ratingStart}&ratingEnd=${ratingEnd}&minCountScore=${currentScore}&yearStart=${minYear}&yearEnd=${maxYear}`)
      .then(res => setFilms(res.data))
      .then(() => getPersons(films))
      .then(() => setLoading(false))
  }


  const getPersons = (list: FilmMainCard[]) => {
    const actors: string[] = [];
    const directors: string[] = [];
    list.slice(0, 3).map((film) => {
      if (actors.length >= 15) {
        setCurrentActors(actors);
        setCurrentDirectors(directors);
        return
      }
      axios.get(`http://188.120.248.77/films/${film.id}`)
        .then(res => {
          res.data.actors.map((actor: any) => actors.push(actor.name))
          res.data.directors.map((director: any) => directors.push(director.name))
        })
        .then(() => {
          setCurrentActors(actors);
          setCurrentDirectors(directors)
        })
    })

  }

  return (
    <div className={styles.filmsPage}>
      <BreadCrumbs genre={searchParams.get("genres")} />
      <TitlePage />
      {searchParams.has("genres") ? (
        ""
      ) : (
        <div className={styles.seoBlock}>
          <div className={styles.containerInner}>
            <div className={styles.clause}>
              <div className={styles.text}>
                <div className={isVisible ? styles.textInnerit : styles.close}>
                  <p>
                    Вы любите смотреть фильмы онлайн и проводите много времени,
                    прочесывая сайты в поисках чего-нибудь интересного? Стоит
                    задержаться на ivi.ru – фильмов, которые собраны у нас, вам
                    хватит надолго. Коллекция постоянно пополняется как новыми
                    фильмами, так и признанными шедеврами прошлых лет!
                    Независимо от того, кто вы – любитель энергичных{" "}
                    <a href="/movies/boeviki">боевиков</a> или поклонница
                    молодежных сериалов, изобилие нашего каталога заставит вас
                    забыть обо всех других способах проведения досуга, и вы
                    будете пересматривать любимые фильмы онлайн снова и снова!
                  </p>
                  <p>
                    Выбор фильмов очень широк и многообразен, так что каждый
                    найдет для себя что-то интересное, каким бы ни были его
                    вкусы. Предпочитаете картины исключительно{" "}
                    <a href="/movies/foreign">зарубежного</a> производства? У
                    нас их предостаточно: это и золотая классика Голливуда, и
                    душевные французские комедии, и темпераментные итальянские
                    драмы, и шумные индийские музыкальные фильмы. А может, вы
                    патриот и любите{" "}
                    <a title="Российские фильмы онлайн" href="/movies/ru">
                      российские фильмы
                    </a>
                    ? Что ж, и таких фильмов у нас немало. Что вам больше по
                    вкусу – добрая старая классика или{" "}
                    <a title="Фильмы новинки кинопроката онлайн" href="/new">
                      новинки кинопроката
                    </a>
                    ? Неважно, каким будет ваш ответ – у нас есть все, как
                    картины эпохи зарождения кинематографа, так{" "}
                    <a
                      title="Смотреть фильмы 2018 года онлайн"
                      href="/movies/2018"
                    >
                      2018 года
                    </a>{" "}
                    и{" "}
                    <a title="Фильмы 2017 года" href="/movies/2017">
                      фильмы 2017
                    </a>
                    .
                  </p>
                  <p>
                    В нашем каталоге вы найдете любые жанры. Это и{" "}
                    <a
                      title="Фильмы про любовь - онлайн"
                      href="/collections/movies-about-love"
                    >
                      фильмы про любовь
                    </a>
                    , и детективы, и боевики, и вестерны, и фантастика, и
                    арт-хаус, и уморительные комедии, и{" "}
                    <a
                      title="Лучшие фильмы про войну 1941-1945 онлайн"
                      href="/collections/movies-war-1941-1945"
                    >
                      фильмы про войну
                    </a>
                    , и ужасы, и триллеры, и документалистика... Кроме «полного
                    метра» на сайте представлены также короткометражные фильмы,
                    а также иностранные и{" "}
                    <a title="Русские сериалы онлайн" href="/series/ru">
                      русские сериалы
                    </a>
                    .
                  </p>
                  <p>
                    Если вас интересуют самые знаковые фильмы онлайн в том или
                    ином жанре, система рубрикации поможет вам без труда
                    сориентироваться и найти, например, лучшие{" "}
                    <a
                      title="Лучшие драмы смотреть онлайн"
                      href="/movies/drama"
                    >
                      драмы
                    </a>{" "}
                    или лучший анимационный фильм онлайн.
                  </p>
                  <p>
                    Не упустите замечательную возможность смотреть фильмы онлайн
                    без регистрации, выбирая только то, что вам действительно
                    интересно, и тогда, когда вам это удобно. Ведь это так
                    просто и приятно!
                  </p>
                </div>
                <span className={styles.toggle} onClick={expand}>
                  {isVisible ? "Свернуть" : "Развернуть"}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      <ParametersInfo />
      <FilterBar className={styles.filterBar} actors={currentActors} directors={currentDirectors} />

      {loading ? <Loader filmLoader /> :
        films.length > 0 ? (
          <section className={styles.filmsList}>
            {films.map((film, index) => {
              return (
                <NavLink to={`/movies/${film?.name}`} state={film} key={index}>
                  <CardFilm film={film} />
                </NavLink>
              );
            })}
          </section>
        )
          :
          <div className={styles.noFound}>По вашему запросу ничего не нашлось</div>
      }
    </div>
  );
}

export default FilmsPage;
