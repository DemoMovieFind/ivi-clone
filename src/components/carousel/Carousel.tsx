import { useEffect, useState } from "react";
import Slider from "react-slick";
import { FilmMainCard } from "../../types/entities/FilmMainCard";
import { CardFilm } from "../cardFilm/cardFilm";

import "./CarouselStyle.css";
import axios from "axios";

interface CarouselProps<T> {
  items?: T[];
  nameCategory?: string;
}

const Carousel = <T,>({ nameCategory }: CarouselProps<T>) => {
  const [films, setFilms] = useState<FilmMainCard[]>([]);

  useEffect(() => {
    axios.get(`http://188.120.248.77/films?order=ASC&page=1&take=21&orderBy=scoreAVG&minCountScore=0&yearStart=0&yearEnd=2222`)
      .then((data) => {
        setFilms(data.data);
      })
      .catch((error) => {
        console.error(error, "error");
      });
  }, []);

  const settings = {
    className: "filmsSlider",

    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1056,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 704,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div>
      <div className="title">{nameCategory}</div>
      <Slider {...settings}>
        {films.map((film) => (
          <CardFilm key={film.id} film={film} className="card-film" />
        ))}
        {films.map((film) => (
          <CardFilm film={film} key={film.id} />
        ))}
        {films.map((film) => (
          <CardFilm film={film} key={film.id} />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
