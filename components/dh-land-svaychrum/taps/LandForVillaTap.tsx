import CarouseSlide from '@/components/component-build/CarouselSlide/CarouseSlide'
import Catalog from '@/components/component-build/catalog/Catalog';
import Houseware from '@/components/component-build/housewares/Houseware';
import { ImageCarouselDefinition, ImageTypeDefinition, SubUnitTpyDefinitions } from '@/lib/definitions';
import { useTranslations } from 'next-intl';
import React from 'react'

const LandForVillaTap = () => {
  const translateEplFlat = useTranslations("dh");
  const flatCarouseSlides: ImageCarouselDefinition[] = [
    {
      src: "/allprojects/epl/epl2.JPG",
      alt: "EFH",
    },
    {
      src: "/allprojects/epl/epl4.JPG",
      alt: "EFH",
    },
    {
      src: "/allprojects/epl/epl5.JPG",
      alt: "EFH",
    },
  ];
  const subUnitItems: SubUnitTpyDefinitions[] = [
    {
      key: "land",
      subUnitName: "DH Villa",
      properties: [
        {
          iconItem: "/home-items/images/land.png",
          descriptionItem: translateEplFlat("dh_size.dh_villa")
        },

      ]
    },
  ]
  const landFlatCatalogImages: ImageTypeDefinition[] = [
    {
      src: "/cataloge/images/dh/dh-villa.jpg",
      alt: "DH Villa",
    },
  ];
  return (
    <div className={`mt-2`}>
      <div className='w-full flex'>
      <section className={`w-1/2 flex`}>
        <CarouseSlide images={flatCarouseSlides} />
      </section>
      <section className={`w-1/2`}>
        <Houseware items={subUnitItems} />
      </section>
      </div>
      
      <main className="">
        <Catalog images={landFlatCatalogImages} />
      </main>
    </div>
  )
}

export default LandForVillaTap