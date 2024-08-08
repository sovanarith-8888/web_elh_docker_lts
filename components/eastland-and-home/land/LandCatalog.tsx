"use client";
import React from "react";
import MixCatalog from "../MixCatalog";
import CarouselLand from "./CarouselLand";
import { Carousel } from "@material-tailwind/react";
import RoomItems from "./RoomItems";
const LandCatalog = () => {
  return (
    <main className={`border border-green-700 mt-2`}>
      <section className={`mt-12 flex`}>
        <div className={`w-1/2 `}>
          <CarouselLand />
        </div>
        <div className={`w-1/2 flex justify-center`}>
          <RoomItems/>
        </div>
      </section>

      <MixCatalog />
    </main>
  );
};

export default LandCatalog;
