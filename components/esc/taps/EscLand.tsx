import CarouseSlide from '@/components/component-build/CarouselSlide/CarouseSlide'
import Catalog from '@/components/component-build/catalog/Catalog';
import Houseware from '@/components/component-build/housewares/Houseware';
import { ImageCarouselDefinition, ImageTypeDefinition, SubUnitTpyDefinitions } from '@/lib/definitions';
import { useTranslations } from 'next-intl';
import React from 'react'

const EscLand = () => {
  const translateESC = useTranslations("esc");
  const flatCarouseSlides: ImageCarouselDefinition[] = [
    {
      src: "/allprojects/esc/land.jpeg",
      alt: "1b",
    },
  ];
  const subUnitItems: SubUnitTpyDefinitions[] = [
    {
      key: "land ",
      subUnitName: "Land for Villa",
      properties: [
        {
          iconItem: "/home-items/images/land.png",
          descriptionItem: translateESC("land_items.land.land")
        }
      ]
    },
    {
        key: "villa for land",
        subUnitName: "Land for Villa",
        properties: [
          {
            iconItem: "/home-items/images/land.png",
            descriptionItem: translateESC("land_items.villa.land")
          }
        ]
      },
      {
        key: "flat for land",
        subUnitName: "Land for Villa",
        properties: [
          {
            iconItem: "/home-items/images/land.png",
            descriptionItem: translateESC("land_items.flat.land")
          }
        ]
      },

  ]
  const oneBedroomEMC3: ImageTypeDefinition[] = [
    {
        src: "/cataloge/images/esc/Land/land.jpg",
      alt: "1 Bedroom",
    },
    {
        src: "/cataloge/images/esc/Land/landflat.jpg",
        alt: "1 Bedroom",
      },
      {
        src: "/cataloge/images/esc/Land/landvilla.jpg",
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
export default EscLand