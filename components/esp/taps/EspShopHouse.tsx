import CarouseSlide from '@/components/component-build/CarouselSlide/CarouseSlide'
import Catalog from '@/components/component-build/catalog/Catalog';
import Houseware from '@/components/component-build/housewares/Houseware';
import { ImageCarouselDefinition, ImageTypeDefinition, SubUnitTpyDefinitions } from '@/lib/definitions';
import { useTranslations } from 'next-intl';
import React from 'react'

const EspShopHouse = () => {
  const translateESP = useTranslations("esp");
  const flatCarouseSlides: ImageCarouselDefinition[] = [
    {
      src: "/allprojects/esc/flat_2.jpg",
      alt: "1b",
    },
  ];
  const subUnitItems: SubUnitTpyDefinitions[] = [
    {
      key: "shop",
      subUnitName: "Shop House",
      properties: [
        {
            iconItem: "/home-items/images/land.png",
            descriptionItem: translateESP("shop_house.land")
          },
        {
          iconItem: "/home-items/images/house.png",
          descriptionItem: translateESP("shop_house.size")
        },
        {
            iconItem: "/home-items/images/bedroom.png",
            descriptionItem: translateESP("shop_house.bedroom")
          },
          {
            iconItem: "/home-items/images/livingroom.png",
            descriptionItem: translateESP("shop_house.living_rooms")
          },
          {
            iconItem: "/home-items/images/bathroom.png",
            descriptionItem: translateESP("shop_house.bath_room")
          },
          {
            iconItem: "/home-items/images/kitchen.png",
            descriptionItem: translateESP("shop_house.kitchen")
          },
      ]
    },
    

      
  ]
  const oneBedroomEMC3: ImageTypeDefinition[] = [
    {
    src: "/cataloge/images/esp/shop/ShopHouse.jpg",
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
export default EspShopHouse