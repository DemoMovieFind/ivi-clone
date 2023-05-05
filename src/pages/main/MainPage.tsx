import { useEffect, useState } from "react";
import { CardFilm } from "../../components/cardFilm/cardFilm";
import { GalleryCarousel } from "../../components/galleryCarousel/GalleryCarousel";
import { OnlineIvi } from "../../components/onlineIvi/OnlineIvi";
import { FilmMainCard } from "../../types/entities/FilmMainCard";
import { useAppDispatch } from "../../store/hooks";
import { initFilms } from "../../store/filmsInit";
import SubButton from "../../components/buttons/subButton/SubButton";
import MultipleRows from "../../components/infinitySlider/InfinitySlider";

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
    fetch(`https://641b23c71f5d999a445c652b.mockapi.io/Films/`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "data");
        setFilms(data);
      })
      .catch((error) => {
        console.log(error, "error");
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
    </div>
  );
};

export default MainPage;
