'use client'
import React from 'react'
import StaticRoomItems from "@/components/component-build/static-room-item/StaticRoomItems";
import Catalog from '@/components/component-build/catalog/Catalog';
import { ImageCarouselDefinition, ImageTypeDefinition, SubUnitTpyDefinitions } from '@/lib/definitions';
import CarouseSlide from '@/components/component-build/CarouselSlide/CarouseSlide';
import Houseware from '@/components/component-build/housewares/Houseware';
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
  const subUnitItems:SubUnitTpyDefinitions[] = [
    {
      key:"vh1",
      subUnitName:"VH1",
      properties: [
        {
          iconItem: "/home-items/images/bedroom.png",
          descriptionItem:"Home is done"
        }
      ]
    },
    {
      key:"vh2",
      subUnitName:"VH2",
      properties: [
        {
          iconItem: "/home-items/images/bedroom.png",
          descriptionItem:"Home is done 222222"
        }
      ]
    },
    {
      key:"vh3",
      subUnitName:"VH3",
      properties: [
        {
          iconItem: "/home-items/images/bedroom.png",
          descriptionItem:"Home is done"
        },
        {
          iconItem: "/home-items/images/bedroom.png",
          descriptionItem:"Home is done asdfasdf"
        }
      ]
    }
  ]
  return (
    <main className={` mt-2`}>
      <section className={`mt-12 flex`}>
        <div className={`w-1/2 `}>
          <CarouseSlide images={flatCarouseSlides} />
        </div>
        <div className={`w-1/2 flex justify-center `}>
          <Houseware items={subUnitItems}/>
        </div>
      </section>

      <main className="flex flex-wrap m-auto mt-32 gap-16">
        <Catalog images={flatCatalogImages} />
      </main>
    </main>
  );
}

export default FlatCatalog