import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

import marloy from "../../image/slider/marloy.jpg";
import blackPoint from "../../image/slider/blackPoint.jpg";
import juravli from "../../image/slider/juravli.jpg";
import lastSon from "../../image/slider/lastSon.jpg";
import parazit from "../../image/slider/parazit.jpg";
import { NavLink } from "react-router-dom";
import { FilmMainCard } from "../../types/entities/FilmMainCard";
import { useAppSelector } from "../../store/hooks";
import { selectFilm } from "../../store/filmsState";

const sliderImage = [marloy, blackPoint, juravli, lastSon, parazit];

const MultipleRows = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    rows: 1,
    slidesPerRow: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const [films, setFilms] = useState<FilmMainCard[]>([]);
  const filmsState = useAppSelector(selectFilm);

  useEffect(() => {
    setFilms(filmsState.films);
  }, [filmsState.films]);

  return (
    <div className="sliderWrapper">
      {films ? (
        <Slider {...settings}>
          {sliderImage.map((image, index) => {
            return (
              <div className="infSlider_imgWrapper" key={index}>
                <img src={image} className="infSlider_img" />
                <NavLink
                  to={`/movies/${films[index]?.name}`}
                  state={films[index]}
                  className="sliderLink"
                >
                  {" "}
                </NavLink>

                <div className="borderAge"></div>
              </div>
            );
          })}
        </Slider>
      ) : (
        ""
      )}
    </div>
  );
};

export default MultipleRows;
