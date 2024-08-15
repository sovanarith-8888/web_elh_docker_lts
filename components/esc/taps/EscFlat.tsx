import CarouseSlide from '@/components/component-build/CarouselSlide/CarouseSlide'
import Catalog from '@/components/component-build/catalog/Catalog';
import Houseware from '@/components/component-build/housewares/Houseware';
import { ImageCarouselDefinition, ImageTypeDefinition, SubUnitTpyDefinitions } from '@/lib/definitions';
import { useTranslations } from 'next-intl';
import React from 'react'

const EscFlat = () => {
  const translateESC = useTranslations("esc");
  const flatCarouseSlides: ImageCarouselDefinition[] = [
    {
      src: "/allprojects/esc/flat_2.jpg",
      alt: "1b",
    },
  ];
  const subUnitItems: SubUnitTpyDefinitions[] = [
    {
      key: "sheo",
      subUnitName: "SHE0",
      properties: [
        {
          iconItem: "/home-items/images/land.png",
          descriptionItem: translateESC("flat_items.sheo.land")
        },
        {
            iconItem: "/home-items/images/house.png",
            descriptionItem: translateESC("flat_items.sheo.size")
          },
        {
            iconItem: "/home-items/images/bedroom.png",
            descriptionItem: translateESC("flat_items.sheo.bedroom")
          },
          {
            iconItem: "/home-items/images/livingroom.png",
            descriptionItem: translateESC("flat_items.sheo.living_rooms")
          },
          {
            iconItem: "/home-items/images/bathroom.png",
            descriptionItem: translateESC("flat_items.sheo.bath_room")
          },
          {
            iconItem: "/home-items/images/kitchen.png",
            descriptionItem: translateESC("flat_items.sheo.kitchen")
          },
      ]
    },
    {
        key: "sheos1",
        subUnitName: "SHE0 S1",
        properties: [
          {
            iconItem: "/home-items/images/land.png",
            descriptionItem: translateESC("flat_items.sheos1.land")
          },
          {
              iconItem: "/home-items/images/house.png",
              descriptionItem: translateESC("flat_items.sheos1.size")
            },
          {
              iconItem: "/home-items/images/bedroom.png",
              descriptionItem: translateESC("flat_items.sheos1.bedroom")
            },
            {
              iconItem: "/home-items/images/livingroom.png",
              descriptionItem: translateESC("flat_items.sheos1.living_rooms")
            },
            {
              iconItem: "/home-items/images/bathroom.png",
              descriptionItem: translateESC("flat_items.sheos1.bath_room")
            },
            {
              iconItem: "/home-items/images/kitchen.png",
              descriptionItem: translateESC("flat_items.sheos1.kitchen")
            },
        ]
      },
      {
        key: "sheos2",
        subUnitName: "SHE0 S2",
        properties: [
          {
            iconItem: "/home-items/images/land.png",
            descriptionItem: translateESC("flat_items.sheos2.land")
          },
          {
              iconItem: "/home-items/images/house.png",
              descriptionItem: translateESC("flat_items.sheos2.size")
            },
          {
              iconItem: "/home-items/images/bedroom.png",
              descriptionItem: translateESC("flat_items.sheos2.bedroom")
            },
            {
              iconItem: "/home-items/images/livingroom.png",
              descriptionItem: translateESC("flat_items.sheos2.living_rooms")
            },
            {
              iconItem: "/home-items/images/bathroom.png",
              descriptionItem: translateESC("flat_items.sheos2.bath_room")
            },
            {
              iconItem: "/home-items/images/kitchen.png",
              descriptionItem: translateESC("flat_items.sheos2.kitchen")
            },
        ]
      },
      {
        key: "sheos4",
        subUnitName: "SHE0 S4",
        properties: [
          {
            iconItem: "/home-items/images/land.png",
            descriptionItem: translateESC("flat_items.sheos4.land")
          },
          {
              iconItem: "/home-items/images/house.png",
              descriptionItem: translateESC("flat_items.sheos4.size")
            },
          {
              iconItem: "/home-items/images/bedroom.png",
              descriptionItem: translateESC("flat_items.sheos4.bedroom")
            },
            {
              iconItem: "/home-items/images/livingroom.png",
              descriptionItem: translateESC("flat_items.sheos4.living_rooms")
            },
            {
              iconItem: "/home-items/images/bathroom.png",
              descriptionItem: translateESC("flat_items.sheos4.bath_room")
            },
            {
              iconItem: "/home-items/images/kitchen.png",
              descriptionItem: translateESC("flat_items.sheos4.kitchen")
            },
        ]
      },{
        key: "she2",
        subUnitName: "SHE2",
        properties: [
          {
            iconItem: "/home-items/images/land.png",
            descriptionItem: translateESC("flat_items.she2.land")
          },
          {
              iconItem: "/home-items/images/house.png",
              descriptionItem: translateESC("flat_items.she2.size")
            },
          {
              iconItem: "/home-items/images/bedroom.png",
              descriptionItem: translateESC("flat_items.she2.bedroom")
            },
            {
              iconItem: "/home-items/images/livingroom.png",
              descriptionItem: translateESC("flat_items.she2.living_rooms")
            },
            {
              iconItem: "/home-items/images/bathroom.png",
              descriptionItem: translateESC("flat_items.she2.bath_room")
            },
            {
              iconItem: "/home-items/images/kitchen.png",
              descriptionItem: translateESC("flat_items.she2.kitchen")
            },
        ]
      },
  ]
  const oneBedroomEMC3: ImageTypeDefinition[] = [
    {
        src: "/cataloge/images/esc/Flat/flat1.jpg",
      alt: "1 Bedroom",
    },
    {
        src: "/cataloge/images/esc/Flat/flat2.jpg",
        alt: "1 Bedroom",
      },
      {
        src: "/cataloge/images/esc/Flat/flat3.jpg",
        alt: "1 Bedroom",
      },
      {
        src: "/cataloge/images/esc/Flat/flat4.jpg",
        alt: "1 Bedroom",
      },
      {
        src: "/cataloge/images/esc/Flat/flat5.jpg",
        alt: "1 Bedroom",
      },
    
  ];
  return (
    <div className={`mt-2`}>
      <div className='w-full flex'>
        <section className={`w-1/2`}>
            <CarouseSlide images={flatCarouseSlides} />
        </section>
        <section className={`w-1/2 justify-center`}>
            <Houseware items={subUnitItems} />
        </section>
      </div>
      <main className="">
        <Catalog images={oneBedroomEMC3} />
      </main>
    </div>
  )
}
export default EscFlat