'use client'
import React from 'react'
import StaticRoomItems from "@/components/component-build/static-room-item/StaticRoomItems";
import Catalog from '@/components/component-build/catalog/Catalog';
import { ImageCarouselDefinition, ImageTypeDefinition, SubUnitTpyDefinitions } from '@/lib/definitions';
import CarouseSlide from '@/components/component-build/CarouselSlide/CarouseSlide';
import Houseware from '@/components/component-build/housewares/Houseware';
import { useTranslations } from 'next-intl';

const FlatCatalog = () => {
  const translateElhFlat = useTranslations("elh");
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
      key:"EFH",
      subUnitName:"EFH",
      properties: [
        {
          iconItem: "/home-items/images/land.png",
          descriptionItem: translateElhFlat("flat.efh.land")
        },
        {
          iconItem: "/home-items/images/house.png",
          descriptionItem: translateElhFlat("flat.efh.size")
        },
        {
          iconItem: "/home-items/images/bedroom.png",
          descriptionItem: translateElhFlat("flat.efh.bedroom")
        },
        {
          iconItem: "/home-items/images/livingroom.png",
          descriptionItem: translateElhFlat("flat.efh.living_rooms")
        },
        {
          iconItem: "/home-items/images/bathroom.png",
          descriptionItem: translateElhFlat("flat.efh.bath_room")
        },
        {
          iconItem: "/home-items/images/kitchen.png",
          descriptionItem: translateElhFlat("flat.efh.kitchen")
        },
      ]
    },
    {
      key:"vh2",
      subUnitName:"VH2",
      properties: [
        {
          iconItem: "/home-items/images/land.png",
          descriptionItem: translateElhFlat("flat.efh2.land")
        },
        {
          iconItem: "/home-items/images/house.png",
          descriptionItem: translateElhFlat("flat.efh2.size")
        },
        {
          iconItem: "/home-items/images/bedroom.png",
          descriptionItem: translateElhFlat("flat.efh2.bedroom")
        },
        {
          iconItem: "/home-items/images/livingroom.png",
          descriptionItem: translateElhFlat("flat.efh2.living_rooms")
        },
        {
          iconItem: "/home-items/images/bathroom.png",
          descriptionItem: translateElhFlat("flat.efh2.bath_room")
        },
        {
          iconItem: "/home-items/images/kitchen.png",
          descriptionItem: translateElhFlat("flat.efh2.kitchen")
        },
      ]
    },
    {
      key:"vh3",
      subUnitName:"VH3",
      properties: [
        {
          iconItem: "/home-items/images/land.png",
          descriptionItem: translateElhFlat("flat.efh3.land")
        },
        {
          iconItem: "/home-items/images/house.png",
          descriptionItem: translateElhFlat("flat.efh3.size")
        },
        {
          iconItem: "/home-items/images/bedroom.png",
          descriptionItem: translateElhFlat("flat.efh3.bedroom")
        },
        {
          iconItem: "/home-items/images/livingroom.png",
          descriptionItem: translateElhFlat("flat.efh3.living_rooms")
        },
        {
          iconItem: "/home-items/images/bathroom.png",
          descriptionItem: translateElhFlat("flat.efh3.bath_room")
        },
        {
          iconItem: "/home-items/images/kitchen.png",
          descriptionItem: translateElhFlat("flat.efh3.kitchen")
        },
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