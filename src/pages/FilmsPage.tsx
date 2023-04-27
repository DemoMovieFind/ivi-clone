import React, { useState, useEffect } from "react";

import { FilterBar } from "../components/filterBar/FilterBar";
import { NavLink, useSearchParams } from "react-router-dom";
import { CardFilm } from "../components/cardFilm/cardFilm";

import styles from "./FilmsPage.module.css";

import films from "../miniDb.json";
import { BreadCrumbs } from "../components/breadCrumbs/BreadCrumbs";
import { TitlePage } from "../components/titlePage/TitlePage";
import { ParametersInfo } from "../components/parametersInfo/ParametersInfo";

interface User {
  name: string;
  year: string;
  country: string[];
  genre: string[];
}

export default function FilmsPage() {
  const [searchParams] = useSearchParams();
  const [isVisible, setIsVisible] = useState(false);

  const expand = () => {
    setIsVisible(!isVisible);
  };

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
      <FilterBar className={styles.filterBar} />
      <section className={styles.filmsList}>
        {films.map((filmz) => {
          return (
            <NavLink to={`/movies/${filmz?.name}`} state={filmz}>
              <CardFilm film={filmz} />
            </NavLink>
          );
        })}
      </section>
    </div>
  );
}
