import { useEffect, useState } from "react";
import { CardFilm } from "../../components/cardFilm/cardFilm";
import { GalleryCarousel } from "../../components/galleryCarousel/GalleryCarousel";
import { OnlineIvi } from "../../components/onlineIvi/OnlineIvi";
import { FilmMainCard } from "../../types/entities/FilmMainCard";
import { useAppDispatch } from "../../store/hooks";
import { initFilms } from "../../store/filmsInit";
import SubButton from "../../components/buttons/subButton/SubButton";
import MultipleRows from "../../components/infinitySlider/InfinitySlider";
import TestCarousel from "../../components/testCarousel";

const MainPage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(initFilms());
  }, []);

  const CardFilmItem: React.FC<{ item: FilmMainCard }> = ({ item }) => {
    return <CardFilm film={item} />;
  };

  const [films, setFilms] = useState<FilmMainCard[]>([]);

  useEffect(() => {
    fetch(`http://188.120.248.77/films?order=ASC&page=1&take=18&orderBy=scoreAVG&minCountScore=0&yearStart=0&yearEnd=2222`)
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
          nameCategory="Биография"
        />
      )}
      <OnlineIvi />
      {films && (
        <GalleryCarousel
          items={films}
          itemComponent={CardFilmItem}
          nameCategory="Комедии"
        />
      )}
      <TestCarousel nameCategory="Комедии" />
    </div>
  );
};

export default MainPage;
