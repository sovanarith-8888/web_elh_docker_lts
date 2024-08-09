"use client";
import React from "react";
import MixCatalog from "../MixCatalog";
import { Carousel } from "@material-tailwind/react";
import RoomItems from "./RoomItems";
import { ImageCarouselDefinition, ImageTypeDefinition } from "@/lib/definitions";
import Catalog from "@/components/component-build/catalog/Catalog";
import CarouseSlide from "@/components/component-build/CarouselSlide/CarouseSlide";
const LandCatalog = () => {
  const landCatalogImages: ImageTypeDefinition[] = [
    {
      src: "/allprojects/elh/land/ELHland.jpg",
      alt: "ELHland",
    },
    {
      src: "/allprojects/elh/land/ELHlandVilla.jpg",
      alt: "ELHlandVilla",
    },
    {
      src: "/allprojects/elh/land/ELHlandVY.jpg",
      alt: "ELHlandVY",
    },
  ];
  const landCarouseSlides: ImageCarouselDefinition[] = [
    {
      src: "/allprojects/elh/land/land1.JPG",
      alt: "ELHland",
    },
    {
      src: "/allprojects/elh/land/land2.JPG",
      alt: "ELHland",
    },
    {
      src: "/allprojects/elh/land/land3.JPG",
      alt: "ELHland",
    },
  ];
  return (
    <main className={` mt-2`}>
      <section className={`mt-12 flex`}>
        <div className={`w-1/2 `}>
          <CarouseSlide images={landCarouseSlides} />
        </div>
        <div className={`w-1/2 flex justify-center`}>
          <RoomItems />
        </div>
      </section>
      <main className="flex flex-wrap m-auto mt-32 gap-16">
        <Catalog images={landCatalogImages} />
      </main>
    </main>
  );
};

export default LandCatalog;
