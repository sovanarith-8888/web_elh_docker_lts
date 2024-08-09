
"use client";
import React from "react";
import { Carousel } from "@material-tailwind/react";
import ImageNextUI from "@/components/component-build/image-next-ui/ImageNextUI";
import { ImageCarouselDefinition } from "@/lib/definitions";

type CarouseListType = {
  images: ImageCarouselDefinition[]
}

const CarouseSlide = ({images}: CarouseListType) => {
  return (
    <>
      <Carousel transition={{ duration: 1 }} className="rounded-xl">
        {images.length > 0 ? (
          <img
            src={images[0].src}
            alt={images[0].src}
            className="w-full h-full object-cover"
          />
        ) : (
          ""
        )}
        {images.slice(1).map((image, index) => (
          <ImageNextUI
            key={index}
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
        ))}
      </Carousel>
    </>
  );
};

export default CarouseSlide;
