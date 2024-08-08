/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { Carousel } from "@material-tailwind/react";
import Image from "next/image";

import ImageNextUI from "@/components/component-build/image-next-ui/ImageNextUI";

const CarouselFlat = () => {
  return (
    <>
      <Carousel
        className="rounded-xl"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        <img
          src="/allprojects/elh/flat/efh/efh1.jpg"
          alt="EFH Flat"
          className="w-full h-full object-cover"
        />
        <ImageNextUI
          src="/allprojects/elh/flat/efh/efh2.jpg"
          alt="EFH Flat"
          className="w-full h-full object-cover"
        />
        <ImageNextUI
          src="/allprojects/elh/flat/efh/efh3.jpg"
          alt="EFH Flat"
          className="w-full h-full object-cover"
        />
      </Carousel>
    </>
  );
};

export default CarouselFlat;
