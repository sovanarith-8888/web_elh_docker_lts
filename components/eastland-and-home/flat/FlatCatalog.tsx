'use client'
import React from 'react'
import StaticRoomItems from "@/components/component-build/static-room-item/StaticRoomItems";
import Catalog from '@/components/component-build/catalog/Catalog';
import { ImageCarouselDefinition, ImageTypeDefinition } from '@/lib/definitions';
import CarouseSlide from '@/components/component-build/CarouselSlide/CarouseSlide';
const FlatCatalog = () => {
  const flatCatalogImages: ImageTypeDefinition[] = [
    {
      src: "/cataloge/images/mix-elh/EFH.jpg",
      alt: "EFH",
    },
    {
      src: "/cataloge/images/mix-elh/EFH2.jpg",
      alt: "EFH2",
    },
    {
      src: "/cataloge/images/mix-elh/EFH3.jpg",
      alt: "EFH3",
    },
    
  ];
  const flatCarouseSlides: ImageCarouselDefinition[] = [
    {
      src: "/allprojects/elh/flat/EFH/efh4.jpg",
      alt: "EFH",
    },
    {
      src: "/allprojects/elh/flat/EFH/efh1.jpg",
      alt: "EFH",
    },
    {
      src: "/allprojects/elh/flat/EFH/efh2.jpg",
      alt: "EFH",
    },
    {
      src: "/allprojects/elh/flat/EFH/efh3.jpg",
      alt: "EFH",
    },
  ];
  return (
    <main className={` mt-2`}>
      <section className={`mt-12 flex`}>
        <div className={`w-1/2 `}>
          <CarouseSlide images={flatCarouseSlides} />
        </div>
        <div className={`w-1/2 flex justify-center`}>
          <StaticRoomItems />
        </div>
      </section>

      <main className="flex flex-wrap m-auto mt-32 gap-16">
        <Catalog images={flatCatalogImages} />
      </main>
    </main>
  );
}

export default FlatCatalog