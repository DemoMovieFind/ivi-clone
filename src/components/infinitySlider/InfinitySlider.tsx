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

import movieRequest from "../../movieRequest";
import { FilmMainCard } from "../../types/entities/FilmMainCard";

const sliderImage = [marloy, blackPoint, juravli, lastSon, parazit];

export default function MultipleRows() {
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

  useEffect(() => {
    movieRequest("").then((movies: FilmMainCard[]) => {
      setFilms(movies);
    });
  }, []);

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
}
