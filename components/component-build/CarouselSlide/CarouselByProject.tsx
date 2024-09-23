"use client";
import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./assets/csr-carosel.css";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Image } from "@nextui-org/react";


type ImageProjectsType = {
  images?: string[];
};
const CarouselByProject = ({ images }: ImageProjectsType) => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: true,
    fade: true,
    speed: 1500,
    infinite: true,
    centerMode: false,
  };
  return (
    <>
      <Slider {...settings}>
        {images?.map((item, index) => (
          <div key={index}>
            <Image
              src={item}
              alt="Blood donation"
              className="h-[35vh] w-[100vh] lg:h-[72vh] lg:w-[100vw]  rounded-none object-cover"
            />
            <div className="carousel-caption"></div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default CarouselByProject;
