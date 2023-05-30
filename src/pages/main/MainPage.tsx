import { useEffect, useState } from "react";
import { CardFilm } from "../../components/cardFilm/cardFilm";
import { GalleryCarousel } from "../../components/galleryCarousel/GalleryCarousel";
import { OnlineIvi } from "../../components/onlineIvi/OnlineIvi";
import { FilmMainCard } from "../../types/entities/FilmMainCard";
import { useAppDispatch } from "../../store/hooks";
import { initFilms } from "../../store/filmsState";
import SubButton from "../../components/buttons/subButton/SubButton";
import MultipleRows from "../../components/infinitySlider/InfinitySlider";
import Carousel from "../../components/carousel/Carousel";
import { useIntl } from "react-intl";
import { getGenres } from "../../store/genresState";
import CardTopFilm from "../../components/cardTopFilm/CardTopFilm";
import useAxios from "../../services/HttpService";
import Loader from "../../components/loader/Loader";
import Modal from "../../components/modalWindow/Modal";

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
  const { response, error, loaded, clearError } = useAxios({
    method: "get",
    url: `/films?genres=биография`,
  });

  useEffect(() => {
    if (response) {
      setFilms(response);
    }
  }, [response]);

  const handleModalClose = () => {
    clearError();
  };

  return (
    <div>
      {!loaded && <Loader />}
      {error.length > 0 && (
        <Modal
          handleClose={handleModalClose}
          headerId={"modal_error_header"}
          body={error}
        />
      )}
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

      <Carousel
        nameCategory={intl.formatMessage({ id: "nav_list_comedies" })}
      />
    </div>
  );
};

export default MainPage;
