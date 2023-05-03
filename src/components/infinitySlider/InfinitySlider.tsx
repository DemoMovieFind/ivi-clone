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

  useEffect(() => {
    movieRequest("").then((movies: FilmMainCard[]) => {
      console.log(movies);
      setFilms(movies); // fetched movies
    });
  }, []);

  // console.log(films);
  // console.log(films ? films[0].name : "");
  return (
    <div className="sliderWrapper">
      {/* {films ? <div>Пришли{films[0].name}</div> : <div>Не пришли</div>} */}
      {films ? (
        <Slider {...settings}>
          {sliderImage.map((image, index) => {
            return (
              <NavLink
                to={`/movies/${films[index]?.name}`}
                state={films[index]}
                key={index}
              >
                <div className="infSlider_imgWrapper">
                  <img src={image} className="infSlider_img" />
                  <div className="borderAge"></div>
                </div>
              </NavLink>
            );
          })}
        </Slider>
      ) : (
        ""
      )}
    </div>
  );
}

export default MultipleRows;
