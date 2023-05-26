import { useEffect, useState } from "react";
import { CardFilm } from "../../components/cardFilm/cardFilm";
import { GalleryCarousel } from "../../components/galleryCarousel/GalleryCarousel";
import { OnlineIvi } from "../../components/onlineIvi/OnlineIvi";
import { FilmMainCard } from "../../types/entities/FilmMainCard";
import { useAppDispatch } from "../../store/hooks";
import { initFilms } from "../../store/filmsState";
import SubButton from "../../components/buttons/subButton/SubButton";
import MultipleRows from "../../components/infinitySlider/InfinitySlider";
import TestCarousel from "../../components/filmsCarousel/testCarousel";
import { useIntl } from "react-intl";
import { getGenres } from "../../store/genresState";
import CardTopFilm from "../../components/cardTopFilm/CardTopFilm";

const MainPage = () => {
  const dispatch = useAppDispatch();
  const intl = useIntl();
  useEffect(() => {
    dispatch(initFilms());
    dispatch(getGenres());
  }, []);

  const CardFilmItem: React.FC<{ item: FilmMainCard }> = ({ item }) => {
    return <CardFilm film={item} />;
  };

  const CardTopFilmItem: React.FC<{ item: FilmMainCard; count?: number }> = ({
    item,
    count,
  }) => {
    return <CardTopFilm film={item} count={count} />;
  };

  const [films, setFilms] = useState<FilmMainCard[]>([]);

  useEffect(() => {
    fetch(
      `http://188.120.248.77/films?order=ASC&page=1&take=18&orderBy=scoreAVG&minCountScore=0&yearStart=0&yearEnd=2222`
    )
      .then((response) => response.json())
      .then((data) => {
        setFilms(data);
      })
      .catch((error) => {
        console.error(error, "error");
      });
  }, []);

  return (
    <div>
      <MultipleRows />
      <SubButton />
      {films && (
        <GalleryCarousel
          items={films}
          itemComponent={CardFilmItem}
          nameCategory={intl.formatMessage({ id: "nav_list_biography" })}
        />
      )}
      <OnlineIvi />
      {films && (
        <GalleryCarousel
          items={films.slice(0, 10)}
          itemComponent={CardTopFilmItem}
          typeSlider="topFilms"
          nameCategory={intl.formatMessage({ id: "film_top_slider" })}
        />
      )}
      {films && (
        <GalleryCarousel
          items={films}
          itemComponent={CardFilmItem}
          nameCategory={intl.formatMessage({ id: "nav_list_comedies" })}
        />
      )}
      <TestCarousel
        nameCategory={intl.formatMessage({ id: "nav_list_comedies" })}
      />
    </div>
  );
};

export default MainPage;
