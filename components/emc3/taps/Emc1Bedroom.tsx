import CarouseSlide from '@/components/component-build/CarouselSlide/CarouseSlide'
import Catalog from '@/components/component-build/catalog/Catalog';
import Houseware from '@/components/component-build/housewares/Houseware';
import { ImageCarouselDefinition, ImageTypeDefinition, SubUnitTpyDefinitions } from '@/lib/definitions';
import { useTranslations } from 'next-intl';
import React from 'react'

const Emc1Bedroom = () => {
  const translateEplFlat = useTranslations("emc3");
  const flatCarouseSlides: ImageCarouselDefinition[] = [
    {
      src: "/allprojects/emc3_mp/1b_1.jpeg",
      alt: "1b",
    },
    {
        src: "/allprojects/emc3_mp/1b_2.jpeg",
      alt: "2b",
    },
    {
        src: "/allprojects/emc3_mp/1b_3.jpeg",
      alt: "3b",
    },
  ];
  const subUnitItems: SubUnitTpyDefinitions[] = [
    {
      key: "EMC MP 1 Bedroom",
      subUnitName: "EMC MP 1 Bedroom",
      properties: [
        {
          iconItem: "/home-items/images/land.png",
          descriptionItem: translateEplFlat("emc3_1bed.land")
        },
        {
            iconItem: "/home-items/images/bedroom.png",
            descriptionItem: translateEplFlat("emc3_1bed.bedroom")
          },
          {
            iconItem: "/home-items/images/livingroom.png",
            descriptionItem: translateEplFlat("emc3_1bed.living_rooms")
          },
          {
            iconItem: "/home-items/images/bathroom.png",
            descriptionItem: translateEplFlat("emc3_1bed.bath_room")
          },
          {
            iconItem: "/home-items/images/kitchen.png",
            descriptionItem: translateEplFlat("emc3_1bed.kitchen")
          },

      ]
    },
  ]
  const oneBedroomEMC3: ImageTypeDefinition[] = [
    {
      src: "/cataloge/images/emc3/1bedroom.jpg",
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
export default Emc1Bedroom