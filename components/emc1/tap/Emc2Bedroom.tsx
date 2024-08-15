import CarouseSlide from '@/components/component-build/CarouselSlide/CarouseSlide'
import Catalog from '@/components/component-build/catalog/Catalog';
import Houseware from '@/components/component-build/housewares/Houseware';
import { ImageCarouselDefinition, ImageTypeDefinition, SubUnitTpyDefinitions } from '@/lib/definitions';
import { useTranslations } from 'next-intl';
import React from 'react'

const Emc2Bedroom = () => {
  const translateEmc1 = useTranslations("emc1");
  const flatCarouseSlides: ImageCarouselDefinition[] = [
    {
      src: "/allprojects/emc1_mc/emc1_2br1.jpg",
      alt: "1b",
    },
    {
        src: "/allprojects/emc1_mc/emc1_2br3.jpg",
      alt: "2b",
    },
  ];
  const subUnitItems: SubUnitTpyDefinitions[] = [
    {
      key: "EMC MF 1 Bedroom",
      subUnitName: "EMC MF 2 Bedroom",
      properties: [
        {
          iconItem: "/home-items/images/land.png",
          descriptionItem: translateEmc1("emc1_2bed.land")
        },
        {
            iconItem: "/home-items/images/bedroom.png",
            descriptionItem: translateEmc1("emc1_2bed.bedroom")
          },
          {
            iconItem: "/home-items/images/livingroom.png",
            descriptionItem: translateEmc1("emc1_2bed.living_rooms")
          },
          {
            iconItem: "/home-items/images/bathroom.png",
            descriptionItem: translateEmc1("emc1_2bed.bath_room")
          },
          {
            iconItem: "/home-items/images/kitchen.png",
            descriptionItem: translateEmc1("emc1_2bed.kitchen")
          },

      ]
    },
  ]
  const oneBedroomEMC3: ImageTypeDefinition[] = [
    {
      src: "/cataloge/images/emc1/1bedroom.jpg",
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