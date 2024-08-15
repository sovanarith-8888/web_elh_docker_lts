import CarouseSlide from '@/components/component-build/CarouselSlide/CarouseSlide'
import Catalog from '@/components/component-build/catalog/Catalog';
import Houseware from '@/components/component-build/housewares/Houseware';
import { ImageCarouselDefinition, ImageTypeDefinition, SubUnitTpyDefinitions } from '@/lib/definitions';
import { useTranslations } from 'next-intl';
import React from 'react'

const EscBungalow = () => {
  const translateESC = useTranslations("esc");
  const flatCarouseSlides: ImageCarouselDefinition[] = [
    {
      src: "/allprojects/esc/bk_1.jpg",
      alt: "1b",
    },
    {
        src: "/allprojects/esc/bk_1.jpg",
      alt: "2b",
    },
  ];
  const subUnitItems: SubUnitTpyDefinitions[] = [
    {
      key: "BK",
      subUnitName: "Bugalow",
      properties: [
        {
          iconItem: "/home-items/images/land.png",
          descriptionItem: translateESC("bugalow_items.bk.land")
        },
        {
            iconItem: "/home-items/images/house.png",
            descriptionItem: translateESC("bugalow_items.bk.size")
          },
        {
            iconItem: "/home-items/images/bedroom.png",
            descriptionItem: translateESC("bugalow_items.bk.bedroom")
          },
          {
            iconItem: "/home-items/images/bathroom.png",
            descriptionItem: translateESC("bugalow_items.bk.bath_room")
          },
          {
            iconItem: "/home-items/images/kitchen.png",
            descriptionItem: translateESC("bugalow_items.bk.kitchen")
          },
      ]
    },
    {
        key: "Flat",
        subUnitName: "BT1Room",
        properties: [
          {
            iconItem: "/home-items/images/land.png",
            descriptionItem: translateESC("bugalow_items.bt1room.land")
          },
          {
              iconItem: "/home-items/images/house.png",
              descriptionItem: translateESC("bugalow_items.bt1room.size")
            },
          {
              iconItem: "/home-items/images/bedroom.png",
              descriptionItem: translateESC("bugalow_items.bt1room.bedroom")
            },
            {
              iconItem: "/home-items/images/bathroom.png",
              descriptionItem: translateESC("bugalow_items.bt1room.bath_room")
            },
            {
              iconItem: "/home-items/images/kitchen.png",
              descriptionItem: translateESC("bugalow_items.bt1room.kitchen")
            },
        ]
      },
      {
        key: "bt2room",
        subUnitName: "BT2Room",
        properties: [
          {
            iconItem: "/home-items/images/land.png",
            descriptionItem: translateESC("bugalow_items.bt2room.land")
          },
          {
              iconItem: "/home-items/images/house.png",
              descriptionItem: translateESC("bugalow_items.bt2room.size")
            },
          {
              iconItem: "/home-items/images/bedroom.png",
              descriptionItem: translateESC("bugalow_items.bt2room.bedroom")
            },
            {
              iconItem: "/home-items/images/bathroom.png",
              descriptionItem: translateESC("bugalow_items.bt2room.bath_room")
            },
            {
              iconItem: "/home-items/images/kitchen.png",
              descriptionItem: translateESC("bugalow_items.bt2room.kitchen")
            },
        ]
      },
  ]
  const oneBedroomEMC3: ImageTypeDefinition[] = [
    {
      src: "/cataloge/images/esc/bungalow/bk.jpg",
      alt: "1 Bedroom",
    },
    {
        src: "/cataloge/images/esc/bungalow/bt1room.jpg",
        alt: "1 Bedroom",
      },
      {
        src: "/cataloge/images/esc/bungalow/bt2room.jpg",
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
export default EscBungalow