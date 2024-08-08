'use client'
import React from 'react'
import MixCatalog from '../MixCatalog';
import CarouselFlat from "./CarouselFlat";
import { Carousel } from "@material-tailwind/react";
import StaticRoomItems from "@/components/component-build/static-room-item/StaticRoomItems";
const FlatCatalog = () => {
  return (
    <main className={`border border-green-700 mt-2`}>
      <section className={`mt-12 flex`}>
        <div className={`w-1/2 `}>
          <CarouselFlat />
        </div>
        <div className={`w-1/2 flex justify-center`}>
          <StaticRoomItems/>
        </div>
      </section>

      <MixCatalog />
    </main>
  );
}

export default FlatCatalog