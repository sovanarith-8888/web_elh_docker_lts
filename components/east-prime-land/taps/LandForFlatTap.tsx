import CarouseSlide from '@/components/component-build/CarouselSlide/CarouseSlide'
import Catalog from '@/components/component-build/catalog/Catalog';
import Houseware from '@/components/component-build/housewares/Houseware';
import { ImageCarouselDefinition, ImageTypeDefinition, SubUnitTpyDefinitions } from '@/lib/definitions';
import { useTranslations } from 'next-intl';
import React from 'react'

const LandForFlatTap = () => {
  const translateEplFlat = useTranslations("epl_land");
  const flatCarouseSlides: ImageCarouselDefinition[] = [
    {
      src: "/allprojects/epl/epl4.JPG",
      alt: "EFH",
    },
    {
      src: "/allprojects/epl/epl5.JPG",
      alt: "EFH",
    },
    {
      src: "/allprojects/epl/epl6.JPG",
      alt: "EFH",
    },
  ];
  const subUnitItems: SubUnitTpyDefinitions[] = [
    {
      key: "land",
      subUnitName: "Land Villa EPL",
      properties: [
        {
          iconItem: "/home-items/images/land.png",
          descriptionItem: translateEplFlat("epl_villa")
        },

      ]
    },
  ]
  const villaFlatCatalogImages: ImageTypeDefinition[] = [
    {
      src: "/cataloge/images/epl/catalog-villa.jpg",
      alt: "EPL Land",
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
        <Catalog images={villaFlatCatalogImages} />
      </main>
    </div>
  )
}
export default LandForFlatTap