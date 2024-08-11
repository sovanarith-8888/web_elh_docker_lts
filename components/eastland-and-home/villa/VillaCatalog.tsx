import React from 'react'
import RoomItems from '../land/RoomItems';
import Catalog from '@/components/component-build/catalog/Catalog';
import { ImageCarouselDefinition, ImageTypeDefinition, SubUnitTpyDefinitions } from '@/lib/definitions';
import CarouseSlide from '@/components/component-build/CarouselSlide/CarouseSlide';
import VillaItemsRoom from './VillaItemsRoom';
import Houseware from '@/components/component-build/housewares/Houseware';
import { useTranslations } from 'next-intl';

const VillaCatalog = () => {
  const translateVillaElh = useTranslations("elh")
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
  const subUnitItems:SubUnitTpyDefinitions[] = [
    {
      key:"VH1",
      subUnitName:"VH1",
      properties: [
        {
          iconItem: "/home-items/images/land.png",
          descriptionItem: translateVillaElh("villa.vh1.land")
        },
        {
          iconItem: "/home-items/images/house.png",
          descriptionItem: translateVillaElh("villa.vh1.size")
        },
        {
          iconItem: "/home-items/images/bedroom.png",
          descriptionItem: translateVillaElh("villa.vh1.bedroom")
        },
        {
          iconItem: "/home-items/images/livingroom.png",
          descriptionItem: translateVillaElh("villa.vh1.living_rooms")
        },
        {
          iconItem: "/home-items/images/bathroom.png",
          descriptionItem: translateVillaElh("villa.vh1.bath_room")
        },
        {
          iconItem: "/home-items/images/kitchen.png",
          descriptionItem: translateVillaElh("villa.vh1.kitchen")
        },
      ]
    },
    {
      key:"VH2",
      subUnitName:"VH2",
      properties: [
        {
          iconItem: "/home-items/images/land.png",
          descriptionItem: translateVillaElh("villa.vh2.land")
        },
        {
          iconItem: "/home-items/images/house.png",
          descriptionItem: translateVillaElh("villa.vh2.size")
        },
        {
          iconItem: "/home-items/images/bedroom.png",
          descriptionItem: translateVillaElh("villa.vh2.bedroom")
        },
        {
          iconItem: "/home-items/images/livingroom.png",
          descriptionItem: translateVillaElh("villa.vh2.living_rooms")
        },
        {
          iconItem: "/home-items/images/bathroom.png",
          descriptionItem: translateVillaElh("villa.vh2.bath_room")
        },
        {
          iconItem: "/home-items/images/kitchen.png",
          descriptionItem: translateVillaElh("villa.vh2.kitchen")
        },
      ]
    },
    {
      key:"vh2a",
      subUnitName:"VH2A",
      properties: [
        {
          iconItem: "/home-items/images/land.png",
          descriptionItem: translateVillaElh("villa.vh2a.land")
        },
        {
          iconItem: "/home-items/images/house.png",
          descriptionItem: translateVillaElh("villa.vh2a.size")
        },
        {
          iconItem: "/home-items/images/bedroom.png",
          descriptionItem: translateVillaElh("villa.vh2a.bedroom")
        },
        {
          iconItem: "/home-items/images/livingroom.png",
          descriptionItem: translateVillaElh("villa.vh2a.living_rooms")
        },
        {
          iconItem: "/home-items/images/bathroom.png",
          descriptionItem: translateVillaElh("villa.vh2a.bath_room")
        },
        {
          iconItem: "/home-items/images/kitchen.png",
          descriptionItem: translateVillaElh("villa.vh2a.kitchen")
        },
      ]
    },
    {
      key:"vh3",
      subUnitName:"VH3",
      properties: [
        {
          iconItem: "/home-items/images/land.png",
          descriptionItem: translateVillaElh("villa.vh3.land")
        },
        {
          iconItem: "/home-items/images/house.png",
          descriptionItem: translateVillaElh("villa.vh3.size")
        },
        {
          iconItem: "/home-items/images/bedroom.png",
          descriptionItem: translateVillaElh("villa.vh3.bedroom")
        },
        {
          iconItem: "/home-items/images/livingroom.png",
          descriptionItem: translateVillaElh("villa.vh3.living_rooms")
        },
        {
          iconItem: "/home-items/images/bathroom.png",
          descriptionItem: translateVillaElh("villa.vh3.bath_room")
        },
        {
          iconItem: "/home-items/images/kitchen.png",
          descriptionItem: translateVillaElh("villa.vh3.kitchen")
        },
      ]
    },
    {
      key:"vh3a",
      subUnitName:"VH3A",
      properties: [
        {
          iconItem: "/home-items/images/land.png",
          descriptionItem: translateVillaElh("villa.vh3a.land")
        },
        {
          iconItem: "/home-items/images/house.png",
          descriptionItem: translateVillaElh("villa.vh3a.size")
        },
        {
          iconItem: "/home-items/images/bedroom.png",
          descriptionItem: translateVillaElh("villa.vh3a.bedroom")
        },
        {
          iconItem: "/home-items/images/livingroom.png",
          descriptionItem: translateVillaElh("villa.vh3a.living_rooms")
        },
        {
          iconItem: "/home-items/images/bathroom.png",
          descriptionItem: translateVillaElh("villa.vh3a.bath_room")
        },
        {
          iconItem: "/home-items/images/kitchen.png",
          descriptionItem: translateVillaElh("villa.vh3a.kitchen")
        },
      ]
    },
    {
      key:"vh3b",
      subUnitName:"VH3B",
      properties: [
        {
          iconItem: "/home-items/images/land.png",
          descriptionItem: translateVillaElh("villa.vh3b.land")
        },
        {
          iconItem: "/home-items/images/house.png",
          descriptionItem: translateVillaElh("villa.vh3b.size")
        },
        {
          iconItem: "/home-items/images/bedroom.png",
          descriptionItem: translateVillaElh("villa.vh3b.bedroom")
        },
        {
          iconItem: "/home-items/images/livingroom.png",
          descriptionItem: translateVillaElh("villa.vh3b.living_rooms")
        },
        {
          iconItem: "/home-items/images/bathroom.png",
          descriptionItem: translateVillaElh("villa.vh3b.bath_room")
        },
        {
          iconItem: "/home-items/images/kitchen.png",
          descriptionItem: translateVillaElh("villa.vh3b.kitchen")
        },
      ]
    }
  ]
  return (
    <div className=" mt-2">
      <section className={`mt-12 flex`}>
        <div className={`w-1/2 `}>
          <CarouseSlide images={villaSlides} />
        </div>
        <div className={`w-1/2 flex justify-center`}>
          <Houseware items={subUnitItems}/>
        </div>
      </section>
      <main className="flex flex-wrap m-auto mt-32 gap-16">
        <Catalog images={villaCatalogImages} />
      </main>
    </div>
  );
}

export default VillaCatalog