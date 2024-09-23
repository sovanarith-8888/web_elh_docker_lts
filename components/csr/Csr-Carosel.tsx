"use client";
import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import "./assets/csr-carosel.css";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Image } from "@nextui-org/react";


const CsrCarosel = () => {

  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: true,
    fade: true,
    speed:1500,
    infinite: true,
    centerMode: false,
    // slidesToShow: 1,
    // slidesToScroll: 1,

   
  };
  return (
<>
 <Slider {...settings}>
      <div>
        <Image
          src="/background/csr2.jpg"
          alt="Blood donation"
          className="h-[35vh] w-[100vh] lg:h-[72vh] lg:w-[100vw]  rounded-none object-cover"
        />
        <div className="carousel-caption"></div>
      </div>
      <div>
        <Image
          src="/background/csr3.jpg"
          alt="Blood donation"
          className="h-[35vh] w-[100vh] lg:h-[72vh] lg:w-[100vw]  rounded-none object-cover"
        />
        <div className="carousel-caption"></div>
      </div>
      <div>
        <Image
          src="/background/scr1.jpg"
          alt="Blood donation"
          className="h-[35vh] w-[100vh] lg:h-[72vh] lg:w-[100vw]  rounded-none object-cover"
        />
        <div className="carousel-caption"></div>
      </div>
      <div>
        <Image
          src="/background/red.jpg"
          alt="Red Blood"
          className="h-[35vh] w-[100vh] lg:h-[72vh] lg:w-[100vw]  rounded-none object-cover"
        />
        <div className="carousel-caption"></div>
      </div>

    </Slider> 

</>

    
  );
};

export default CsrCarosel;
