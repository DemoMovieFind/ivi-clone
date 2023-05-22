import { useEffect, useState } from "react";
import { CardFilm } from "../../components/cardFilm/cardFilm";
import { GalleryCarousel } from "../../components/galleryCarousel/GalleryCarousel";
import { OnlineIvi } from "../../components/onlineIvi/OnlineIvi";
import { FilmMainCard } from "../../types/entities/FilmMainCard";
import { useAppDispatch } from "../../store/hooks";
import { initFilms } from "../../store/filmsState";
import SubButton from "../../components/buttons/subButton/SubButton";
import MultipleRows from "../../components/infinitySlider/InfinitySlider";
import TestCarousel from "../../components/testCarousel";
import { useIntl } from "react-intl";
import { getGenres } from "../../store/genresState";

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

  const [films, setFilms] = useState<FilmMainCard[]>([]);

  useEffect(() => {
    fetch(`https://641b23c71f5d999a445c652b.mockapi.io/Films/`)
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
          nameCategory={intl.formatMessage({id:'nav_list_biography'})}
        />
      )}
      <OnlineIvi />
      {films && (
        <GalleryCarousel
          items={films}
          itemComponent={CardFilmItem}
          nameCategory={intl.formatMessage({id:'nav_list_comedies'})}
        />
      )}
      <TestCarousel nameCategory={intl.formatMessage({id:'nav_list_comedies'})} />
    </div>
  );
};

export default MainPage;
