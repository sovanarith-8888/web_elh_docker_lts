import CarouseSlide from '@/components/component-build/CarouselSlide/CarouseSlide'
import Catalog from '@/components/component-build/catalog/Catalog';
import Houseware from '@/components/component-build/housewares/Houseware';
import { ImageCarouselDefinition, ImageTypeDefinition, SubUnitTpyDefinitions } from '@/lib/definitions';
import { useTranslations } from 'next-intl';
import React from 'react'

const EkcFlat = () => {
  const translateEKC = useTranslations("ekc");
  const flatCarouseSlides: ImageCarouselDefinition[] = [
    {
      src: "/allprojects/emc1_mc/emc1_1br1.jpg",
      alt: "1b",
    },
    {
        src: "/allprojects/emc1_mc/emc1_1br2.jpg",
      alt: "2b",
    },
    {
        src: "/allprojects/emc1_mc/emc1_1br3.jpg",
      alt: "3b",
    },
  ];
  const subUnitItems: SubUnitTpyDefinitions[] = [
    {
      key: "ksf1",
      subUnitName: "KSF1",
      properties: [
        {
          iconItem: "/home-items/images/land.png",
          descriptionItem: translateEKC("flat_items.ksf1.land")
        },
        {
            iconItem: "/home-items/images/land.png",
            descriptionItem: translateEKC("flat_items.ksf1.size")
          },
        {
            iconItem: "/home-items/images/bedroom.png",
            descriptionItem: translateEKC("flat_items.ksf1.bedroom")
          },
          {
            iconItem: "/home-items/images/livingroom.png",
            descriptionItem: translateEKC("flat_items.ksf1.living_rooms")
          },
          {
            iconItem: "/home-items/images/bathroom.png",
            descriptionItem: translateEKC("flat_items.ksf1.bath_room")
          },
          {
            iconItem: "/home-items/images/kitchen.png",
            descriptionItem: translateEKC("flat_items.ksf1.kitchen")
          },

      ]
    },
    {
        key: "ksf2",
        subUnitName: "KSF2",
        properties: [
          {
            iconItem: "/home-items/images/land.png",
            descriptionItem: translateEKC("flat_items.ksf2.land")
          },
          {
              iconItem: "/home-items/images/land.png",
              descriptionItem: translateEKC("flat_items.ksf2.size")
            },
          {
              iconItem: "/home-items/images/bedroom.png",
              descriptionItem: translateEKC("flat_items.ksf2.bedroom")
            },
            {
              iconItem: "/home-items/images/livingroom.png",
              descriptionItem: translateEKC("flat_items.ksf2.living_rooms")
            },
            {
              iconItem: "/home-items/images/bathroom.png",
              descriptionItem: translateEKC("flat_items.ksf2.bath_room")
            },
            {
              iconItem: "/home-items/images/kitchen.png",
              descriptionItem: translateEKC("flat_items.ksf2.kitchen")
            },
  
        ]
      },
      {
        key: "ksv1",
        subUnitName: "KSV1",
        properties: [
          {
            iconItem: "/home-items/images/land.png",
            descriptionItem: translateEKC("flat_items.ksv1.land")
          },
          {
              iconItem: "/home-items/images/land.png",
              descriptionItem: translateEKC("flat_items.ksv1.size")
            },
          {
              iconItem: "/home-items/images/bedroom.png",
              descriptionItem: translateEKC("flat_items.ksv1.bedroom")
            },
            {
              iconItem: "/home-items/images/livingroom.png",
              descriptionItem: translateEKC("flat_items.ksv1.living_rooms")
            },
            {
              iconItem: "/home-items/images/bathroom.png",
              descriptionItem: translateEKC("flat_items.ksv1.bath_room")
            },
            {
              iconItem: "/home-items/images/kitchen.png",
              descriptionItem: translateEKC("flat_items.ksv1.kitchen")
            },
  
        ]
      },
  ]
  const oneBedroomEMC3: ImageTypeDefinition[] = [
    {
      src: "/cataloge/images/mix-ekc-flat/EKCFLAT1.jpg",
      alt: "1 Bedroom",
    },
    {
        src: "/cataloge/images/mix-ekc-flat/EKCFLAT2.jpg",
        alt: "1 Bedroom",
      },
      {
        src: "/cataloge/images/mix-ekc-flat/EKCFLAT3.jpg",
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

export default EkcFlat