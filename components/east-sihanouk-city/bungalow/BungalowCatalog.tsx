import CarouseSlide from '@/components/component-build/CarouselSlide/CarouseSlide';
import StaticRoomItems from '@/components/component-build/static-room-item/StaticRoomItems';
import { ImageCarouselDefinition } from '@/lib/definitions';
import React from 'react'

const BungalowCatalog = () => {
  const flatCarouseSlides: ImageCarouselDefinition[] = [
    {
      src: "/allprojects/esc/slides/bungalow.jpg",
      alt: "bungalow",
    },
    {
      src: "/allprojects/esc/slides/flat.jpg",
      alt: "flat",
    },
    {
      src: "/allprojects/esc/slides/villa.jpg",
      alt: "villa",
    },
  ];
  return (
    <main className={`mt-2`}>
      <section className={`mt-12 flex`}>
        <div className={`w-1/2 `}>
          <CarouseSlide images={flatCarouseSlides} />
        </div>
        <div className={`w-1/2 flex justify-center`}>
          <StaticRoomItems />
        </div>
      </section>
    </main>
  );
}

export default BungalowCatalog