import CarouseSlide from '@/components/component-build/CarouselSlide/CarouseSlide'
import Catalog from '@/components/component-build/catalog/Catalog';
import Houseware from '@/components/component-build/housewares/Houseware';
import { ImageCarouselDefinition, ImageTypeDefinition, SubUnitTpyDefinitions } from '@/lib/definitions';
import { useTranslations } from 'next-intl';
import React from 'react'

const EscVilla = () => {
  const translateESC = useTranslations("esc");
  const flatCarouseSlides: ImageCarouselDefinition[] = [
    {
      src: "/allprojects/esc/flat_2.jpg",
      alt: "1b",
    },
  ];
  const subUnitItems: SubUnitTpyDefinitions[] = [
    {
      key: "la",
      subUnitName: "LA",
      properties: [
        {
          iconItem: "/home-items/images/land.png",
          descriptionItem: translateESC("villa_items.la.land")
        },
        {
            iconItem: "/home-items/images/house.png",
            descriptionItem: translateESC("villa_items.la.size")
          },
        {
            iconItem: "/home-items/images/bedroom.png",
            descriptionItem: translateESC("villa_items.la.bedroom")
          },
          {
            iconItem: "/home-items/images/livingroom.png",
            descriptionItem: translateESC("villa_items.la.living_rooms")
          },
          {
            iconItem: "/home-items/images/bathroom.png",
            descriptionItem: translateESC("villa_items.la.bath_room")
          },
          {
            iconItem: "/home-items/images/kitchen.png",
            descriptionItem: translateESC("villa_items.la.kitchen")
          },
      ]
    },
    {
        key: "lb",
        subUnitName: "LB",
        properties: [
          {
            iconItem: "/home-items/images/land.png",
            descriptionItem: translateESC("villa_items.lb.land")
          },
          {
              iconItem: "/home-items/images/house.png",
              descriptionItem: translateESC("villa_items.lb.size")
            },
          {
              iconItem: "/home-items/images/bedroom.png",
              descriptionItem: translateESC("villa_items.lb.bedroom")
            },
            {
              iconItem: "/home-items/images/livingroom.png",
              descriptionItem: translateESC("villa_items.lb.living_rooms")
            },
            {
              iconItem: "/home-items/images/bathroom.png",
              descriptionItem: translateESC("villa_items.lb.bath_room")
            },
            {
              iconItem: "/home-items/images/kitchen.png",
              descriptionItem: translateESC("villa_items.lb.kitchen")
            },
        ]
      },
      {
        key: "vta",
        subUnitName: "VTA",
        properties: [
          {
            iconItem: "/home-items/images/land.png",
            descriptionItem: translateESC("villa_items.vta.land")
          },
          {
              iconItem: "/home-items/images/house.png",
              descriptionItem: translateESC("villa_items.vta.size")
            },
          {
              iconItem: "/home-items/images/bedroom.png",
              descriptionItem: translateESC("villa_items.vta.bedroom")
            },
            {
              iconItem: "/home-items/images/livingroom.png",
              descriptionItem: translateESC("villa_items.vta.living_rooms")
            },
            {
              iconItem: "/home-items/images/bathroom.png",
              descriptionItem: translateESC("villa_items.vta.bath_room")
            },
            {
              iconItem: "/home-items/images/kitchen.png",
              descriptionItem: translateESC("villa_items.vta.kitchen")
            },
        ]
      },
      
  ]
  const oneBedroomEMC3: ImageTypeDefinition[] = [
    {
        src: "/cataloge/images/esc/Villa/LA.jpg",
      alt: "1 Bedroom",
    },
    {
        src: "/cataloge/images/esc/Villa/LB.jpg",
        alt: "1 Bedroom",
      },
      {
        src: "/cataloge/images/esc/Villa/VTA.jpg",
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
export default EscVilla