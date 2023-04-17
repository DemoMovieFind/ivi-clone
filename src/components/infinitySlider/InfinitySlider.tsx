import React from "react";
import clsx from "clsx";

// import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import styles from "./InfinitySlider.module.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export interface InfinitySliderProps {
  className?: string;
}

export const InfinitySlider: React.FC<InfinitySliderProps> = ({
  className,
}) => {
  return (
    <div className={clsx(InfinitySlider, className)}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <div className="wrapperSlid">
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </div>

        {/* <SwiperSlide className={styles.slide}>Slide 5</SwiperSlide>
        <SwiperSlide className={styles.slide}>Slide 6</SwiperSlide>
        <SwiperSlide className={styles.slide}>Slide 7</SwiperSlide>
        <SwiperSlide className={styles.slide}>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </div>
  );
};
