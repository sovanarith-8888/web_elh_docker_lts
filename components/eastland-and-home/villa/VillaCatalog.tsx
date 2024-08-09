import React from 'react'
import RoomItems from '../land/RoomItems';
import Catalog from '@/components/component-build/catalog/Catalog';
import { ImageCarouselDefinition, ImageTypeDefinition } from '@/lib/definitions';
import CarouseSlide from '@/components/component-build/CarouselSlide/CarouseSlide';
import VillaItemsRoom from './VillaItemsRoom';

const VillaCatalog = () => {
  
  const villaCatalogImages: ImageTypeDefinition[] = [
    {
      src: "/allprojects/elh/villa/ELHVH1.jpg",
      alt: "ELHVH1",
    },
    {
      src: "/allprojects/elh/villa/VH2.jpg",
      alt: "VH2",
    },
    {
      src: "/allprojects/elh/villa/VH2A.jpg",
      alt: "VH2A",
    },
    {
      src: "/allprojects/elh/villa/VH3.jpg",
      alt: "VH3",
    },
    {
      src: "/allprojects/elh/villa/VH3A.jpg",
      alt: "VH3A",
    },
    {
      src: "/allprojects/elh/villa/VH3B.jpg",
      alt: "VH3B",
    },
    // {
    //   src: "/allprojects/elh/villa/VTH.jpg",
    //   alt: "VTH",
    // },
  ];
  const villaSlides: ImageCarouselDefinition[] = [
    {
      src: "/allprojects/elh/villa/VH5B.png",
      alt: "VH5B",
    },
    {
      src: "/allprojects/elh/villa/VH5D.jpg",
      alt: "VH5A",
    },
    {
      src: "/allprojects/elh/villa/VH5B.png",
      alt: "VH5B",
    },
    {
      src: "/allprojects/elh/villa/VH5C.png",
      alt: "VH5C",
    },
    {
      src: "/allprojects/elh/villa/VH5D.jpg",
      alt: "VH5D",
    },
  ];

  return (
    <div className=" mt-2">
      <section className={`mt-12 flex`}>
        <div className={`w-1/2 `}>
          <CarouseSlide images={villaSlides} />
        </div>
        <div className={`w-1/2 flex justify-center`}>
          <VillaItemsRoom />
        </div>
      </section>
      <main className="flex flex-wrap m-auto mt-32 gap-16">
        <Catalog images={villaCatalogImages} />
      </main>
    </div>
  );
}

export default VillaCatalog