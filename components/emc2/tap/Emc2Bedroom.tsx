import CarouseSlide from '@/components/component-build/CarouselSlide/CarouseSlide'
import Catalog from '@/components/component-build/catalog/Catalog';
import Houseware from '@/components/component-build/housewares/Houseware';
import { ImageCarouselDefinition, ImageTypeDefinition, SubUnitTpyDefinitions } from '@/lib/definitions';
import { useTranslations } from 'next-intl';
import React from 'react'

const Emc2Bedroom = () => {
  const translateEmc2 = useTranslations("emc2");
  const flatCarouseSlides: ImageCarouselDefinition[] = [
    {
      src: "/allprojects/emc2_mf/emc2_1br3.jpg",
      alt: "1b",
    },
    {
        src: "/allprojects/emc2_mf/emc2_1br2.jpg",
      alt: "2b",
    },
    {
        src: "/allprojects/emc2_mf/emc2_1br1.jpg",
      alt: "3b",
    },
  ];
  const subUnitItems: SubUnitTpyDefinitions[] = [
    {
      key: "EMC MP 1 Bedroom",
      subUnitName: "EMC MC 1 Bedroom",
      properties: [
        {
          iconItem: "/home-items/images/land.png",
          descriptionItem: translateEmc2("emc2_2bed.land")
        },
        {
            iconItem: "/home-items/images/bedroom.png",
            descriptionItem: translateEmc2("emc2_2bed.bedroom")
          },
          {
            iconItem: "/home-items/images/livingroom.png",
            descriptionItem: translateEmc2("emc2_2bed.living_rooms")
          },
          {
            iconItem: "/home-items/images/bathroom.png",
            descriptionItem: translateEmc2("emc2_2bed.bath_room")
          },
          {
            iconItem: "/home-items/images/kitchen.png",
            descriptionItem: translateEmc2("emc2_2bed.kitchen")
          },

      ]
    },
  ]
  const oneBedroomEMC3: ImageTypeDefinition[] = [
    {
      src: "/cataloge/images/emc2/2bedroom.jpg",
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

export default Emc2Bedroom