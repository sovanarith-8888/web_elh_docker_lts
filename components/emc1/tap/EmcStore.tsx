import CarouseSlide from '@/components/component-build/CarouselSlide/CarouseSlide'
import Catalog from '@/components/component-build/catalog/Catalog';
import Houseware from '@/components/component-build/housewares/Houseware';
import { ImageCarouselDefinition, ImageTypeDefinition, SubUnitTpyDefinitions } from '@/lib/definitions';
import { useTranslations } from 'next-intl';
import React from 'react'

const EmcStore = () => {
  const translateEmc2 = useTranslations("emc1");
  const flatCarouseSlides: ImageCarouselDefinition[] = [
    {
      src: "/allprojects/emc1_mc/emc1_0_store.jpg",
      alt: "1b",
    },
  ];
  const subUnitItems: SubUnitTpyDefinitions[] = [
    {
      key: "EMC MF 1 Bedroom",
      subUnitName: "EMC MF 1 Bedroom",
      properties: [
        {
          iconItem: "/home-items/images/store.png",
          descriptionItem: translateEmc2("emc1_store.store")
        },
        
      ]
    },
  ]
  const oneBedroomEMC3: ImageTypeDefinition[] = [
    {
      src: "/cataloge/images/emc1/store.jpg",
      alt: "Store",
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
export default EmcStore