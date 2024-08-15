import CarouseSlide from '@/components/component-build/CarouselSlide/CarouseSlide'
import Catalog from '@/components/component-build/catalog/Catalog';
import Houseware from '@/components/component-build/housewares/Houseware';
import { ImageCarouselDefinition, ImageTypeDefinition, SubUnitTpyDefinitions } from '@/lib/definitions';
import { useTranslations } from 'next-intl';
import React from 'react'

const EkcLand = () => {
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
      key: "ksl1",
      subUnitName: "KSL1",
      properties: [
        {
          iconItem: "/home-items/images/land.png",
          descriptionItem: translateEKC("land_items.ksl1.land")
        },
      ]
    },
    {
        key: "ksl3",
        subUnitName: "KSL3",
        properties: [
          {
            iconItem: "/home-items/images/land.png",
            descriptionItem: translateEKC("land_items.ksl3.land")
          },
        ]
      },
      {
        key: "vil",
        subUnitName: "Land for Villa",
        properties: [
          {
            iconItem: "/home-items/images/land.png",
            descriptionItem: translateEKC("land_items.villa.land")
          },
        ]
      },
      {
        key: "ksv3",
        subUnitName: "VSV3",
        properties: [
          {
            iconItem: "/home-items/images/land.png",
            descriptionItem: translateEKC("land_items.flat.land")
          },
        ]
      },
  ]
  const oneBedroomEMC3: ImageTypeDefinition[] = [
    {
      src: "/cataloge/images/mix-ekc-land/EKCFLAND1.jpg",
      alt: "1 Bedroom",
    },
    {
        src: "/cataloge/images/mix-ekc-land/EKCFLAND2.jpg",
        alt: "1 Bedroom",
      },
      {
        src: "/cataloge/images/mix-ekc-land/EKCFLAND3.jpg",
        alt: "1 Bedroom",
      },
      {
        src: "/cataloge/images/mix-ekc-land/EKCFLAND4.jpg",
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

export default EkcLand