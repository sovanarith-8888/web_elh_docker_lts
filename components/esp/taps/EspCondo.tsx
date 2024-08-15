import CarouseSlide from '@/components/component-build/CarouselSlide/CarouseSlide'
import Catalog from '@/components/component-build/catalog/Catalog';
import Houseware from '@/components/component-build/housewares/Houseware';
import { ImageCarouselDefinition, ImageTypeDefinition, SubUnitTpyDefinitions } from '@/lib/definitions';
import { useTranslations } from 'next-intl';
import React from 'react'

const EspCondo = () => {
  const translateESP = useTranslations("esp");
  const flatCarouseSlides: ImageCarouselDefinition[] = [
    {
      src: "/allprojects/esc/flat_2.jpg",
      alt: "1b",
    },
  ];
  const subUnitItems: SubUnitTpyDefinitions[] = [
    {
      key: "2br ko",
      subUnitName: "2Bedroom KP",
      properties: [
        {
          iconItem: "/home-items/images/house.png",
          descriptionItem: translateESP("condo_items.2br_kp.land")
        },
        {
            iconItem: "/home-items/images/bedroom.png",
            descriptionItem: translateESP("condo_items.2br_kp.bedroom")
          },
          {
            iconItem: "/home-items/images/livingroom.png",
            descriptionItem: translateESP("condo_items.2br_kp.living_rooms")
          },
          {
            iconItem: "/home-items/images/bathroom.png",
            descriptionItem: translateESP("condo_items.2br_kp.bath_room")
          },
          {
            iconItem: "/home-items/images/kitchen.png",
            descriptionItem: translateESP("condo_items.2br_kp.kitchen")
          },
      ]
    },
    {
        key: "std kp",
        subUnitName: "Studio KP",
        properties: [
          {
            iconItem: "/home-items/images/house.png",
            descriptionItem: translateESP("condo_items.std_kp.land")
          },
          {
              iconItem: "/home-items/images/bedroom.png",
              descriptionItem: translateESP("condo_items.std_kp.bedroom")
            },
            {
              iconItem: "/home-items/images/livingroom.png",
              descriptionItem: translateESP("condo_items.std_kp.living_rooms")
            },
            {
              iconItem: "/home-items/images/bathroom.png",
              descriptionItem: translateESP("condo_items.std_kp.bath_room")
            },
            {
              iconItem: "/home-items/images/kitchen.png",
              descriptionItem: translateESP("condo_items.std_kp.kitchen")
            },
        ]
      },
      {
        key: "2br_kr",
        subUnitName: "2Bedroom KR",
        properties: [
          {
            iconItem: "/home-items/images/house.png",
            descriptionItem: translateESP("condo_items.2br_kr.land")
          },
          {
              iconItem: "/home-items/images/bedroom.png",
              descriptionItem: translateESP("condo_items.2br_kr.bedroom")
            },
            {
              iconItem: "/home-items/images/livingroom.png",
              descriptionItem: translateESP("condo_items.2br_kr.living_rooms")
            },
            {
              iconItem: "/home-items/images/bathroom.png",
              descriptionItem: translateESP("condo_items.2br_kr.bath_room")
            },
            {
              iconItem: "/home-items/images/kitchen.png",
              descriptionItem: translateESP("condo_items.2br_kr.kitchen")
            },
        ]
      },
      {
        key: "std_kr",
        subUnitName: "Studio KR",
        properties: [
          {
            iconItem: "/home-items/images/house.png",
            descriptionItem: translateESP("condo_items.std_kr.land")
          },
          {
              iconItem: "/home-items/images/bedroom.png",
              descriptionItem: translateESP("condo_items.std_kr.bedroom")
            },
            {
              iconItem: "/home-items/images/livingroom.png",
              descriptionItem: translateESP("condo_items.std_kr.living_rooms")
            },
            {
              iconItem: "/home-items/images/bathroom.png",
              descriptionItem: translateESP("condo_items.std_kr.bath_room")
            },
            {
              iconItem: "/home-items/images/kitchen.png",
              descriptionItem: translateESP("condo_items.std_kr.kitchen")
            },
        ]
      },
      
  ]
  const oneBedroomEMC3: ImageTypeDefinition[] = [
    {
        src: "/cataloge/images/esp/condo/unitkp_2br.jpg",
      alt: "1 Bedroom",
    },
    {
        src: "/cataloge/images/esp/condo/unitkp_std.jpg",
        alt: "1 Bedroom",
      },
      {
        src: "/cataloge/images/esp/condo/unitkr_2br.jpg",
        alt: "1 Bedroom",
      },
      {
        src: "/cataloge/images/esp/condo/unitkr_std.jpg",
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
export default EspCondo