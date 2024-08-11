"use client";
import React from "react";
import MixCatalog from "../MixCatalog";
import { Carousel } from "@material-tailwind/react";
import RoomItems from "./RoomItems";
import { ImageCarouselDefinition, ImageTypeDefinition, SubUnitTpyDefinitions } from "@/lib/definitions";
import Catalog from "@/components/component-build/catalog/Catalog";
import CarouseSlide from "@/components/component-build/CarouselSlide/CarouseSlide";
import Houseware from "@/components/component-build/housewares/Houseware";
import { useTranslations } from "next-intl";
const LandCatalog = () => {
  const translateLandElh = useTranslations("elh")
  const landCatalogImages: ImageTypeDefinition[] = [
    {
      src: "/allprojects/elh/land/ELHland.jpg",
      alt: "ELHland",
    },
    {
      src: "/allprojects/elh/land/ELHlandVilla.jpg",
      alt: "ELHlandVilla",
    },
    {
      src: "/allprojects/elh/land/ELHlandVY.jpg",
      alt: "ELHlandVY",
    },
  ];
  const landCarouseSlides: ImageCarouselDefinition[] = [
    {
      src: "/allprojects/elh/land/land1.JPG",
      alt: "ELHland",
    },
    {
      src: "/allprojects/elh/land/land2.JPG",
      alt: "ELHland",
    },
    {
      src: "/allprojects/elh/land/land3.JPG",
      alt: "ELHland",
    },
  ];
  const subUnitItems:SubUnitTpyDefinitions[] = [
    {
      key:"land flat",
      subUnitName:"Land for Flat",
      properties: [
        {
          iconItem: "/home-items/images/land.png",
          descriptionItem: translateLandElh("land.land_flat")
        }
      ]
    },
    {
      key:"land villa",
      subUnitName:"Land for Villa",
      properties: [
        {
          iconItem: "/home-items/images/land.png",
          descriptionItem: translateLandElh("land.land_villa")
        },
    
      ]
    },
    {
      key:"land villa vy",
      subUnitName:"Land for Villa-VY",
      properties: [
        {
          iconItem: "/home-items/images/land.png",
          descriptionItem: translateLandElh("land.land_flat_vy")
        },
      ]
    }
  ]
  return (
    <main className={` mt-2`}>
      <section className={`mt-12 flex`}>
        <div className={`w-1/2 `}>
          <CarouseSlide images={landCarouseSlides} />
        </div>
        <div className={`w-1/2 flex justify-center`}>
          <Houseware items={subUnitItems}/>
        </div>
      </section>
      <main className="flex flex-wrap m-auto mt-32 gap-16">
        <Catalog images={landCatalogImages} />
      </main>
    </main>
  );
};

export default LandCatalog;
