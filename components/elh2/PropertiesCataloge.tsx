import React from "react";
import { Card, CardBody, Tab, Tabs } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import {
  battambongParagraph,
  interParagraph,
  koulenHeader,
  vigaHeader,
} from "@/app/[locale]/(user)/fonts";
import ImageNextUI from "../component-build/image-next-ui/ImageNextUI";
import { GalleryIcon } from "./GalleryIcon";
import HousewareSingle from "../component-build/housewares/HousewareSingle";
import CatalogeTapProperties from "../component-build/CatalogeTapsType/CatalogeTapProperties";
import { SubUnitItemCardDefinition } from "@/lib/definitions";

const PropertiesCataloge = () => {
  const translateElhFlat = useTranslations("elh");
  const param = useParams();
  const translator = useTranslations("elh_catalog");
  const translatLocation = useTranslations("project_plans");
  const translatProperties = useTranslations("properties");
  const translateNearby = useTranslations("nearby");
  const locale = param.locale;
  const langHeader =
    locale === "kh" ? koulenHeader.className : vigaHeader.className;
  const langParagraph =
    locale === "kh" ? battambongParagraph.className : interParagraph.className;

  // ======================== Mockup Data =========================
  // home land size bathroom kitchen living-room
  const unitItems: SubUnitItemCardDefinition[] = [
    {
      iconItem: "/home-items/images/land.png",
      descriptionItem: translateElhFlat("flat.efh.land"),
    },
    {
      iconItem: "/home-items/images/house.png",
      descriptionItem: translateElhFlat("flat.efh.size"),
    },
    {
      iconItem: "/home-items/images/bedroom.png",
      descriptionItem: translateElhFlat("flat.efh.bedroom"),
    },
    {
      iconItem: "/home-items/images/livingroom.png",
      descriptionItem: translateElhFlat("flat.efh.living_rooms"),
    },
    {
      iconItem: "/home-items/images/bathroom.png",
      descriptionItem: translateElhFlat("flat.efh.bath_room"),
    },
    {
      iconItem: "/home-items/images/kitchen.png",
      descriptionItem: translateElhFlat("flat.efh.kitchen"),
    },
  ];
  const unitItemsFlatvh2: SubUnitItemCardDefinition[] = [
    {
      iconItem: "/home-items/images/land.png",
      descriptionItem: translateElhFlat("flat.efh2.land"),
    },
    {
      iconItem: "/home-items/images/house.png",
      descriptionItem: translateElhFlat("flat.efh2.size"),
    },
    {
      iconItem: "/home-items/images/bedroom.png",
      descriptionItem: translateElhFlat("flat.efh2.bedroom"),
    },
    {
      iconItem: "/home-items/images/livingroom.png",
      descriptionItem: translateElhFlat("flat.efh2.living_rooms"),
    },
    {
      iconItem: "/home-items/images/bathroom.png",
      descriptionItem: translateElhFlat("flat.efh2.bath_room"),
    },
    {
      iconItem: "/home-items/images/kitchen.png",
      descriptionItem: translateElhFlat("flat.efh2.kitchen"),
    },
  ];
  const unitItemsFlatvh3: SubUnitItemCardDefinition[] = [
    {
      iconItem: "/home-items/images/land.png",
      descriptionItem: translateElhFlat("flat.efh3.land"),
    },
    {
      iconItem: "/home-items/images/house.png",
      descriptionItem: translateElhFlat("flat.efh3.size"),
    },
    {
      iconItem: "/home-items/images/bedroom.png",
      descriptionItem: translateElhFlat("flat.efh3.bedroom"),
    },
    {
      iconItem: "/home-items/images/livingroom.png",
      descriptionItem: translateElhFlat("flat.efh3.living_rooms"),
    },
    {
      iconItem: "/home-items/images/bathroom.png",
      descriptionItem: translateElhFlat("flat.efh3.bath_room"),
    },
    {
      iconItem: "/home-items/images/kitchen.png",
      descriptionItem: translateElhFlat("flat.efh3.kitchen"),
    },
  ];
  const unitItemsVilla: SubUnitItemCardDefinition[] = [
    {
      iconItem: "/home-items/images/land.png",
      descriptionItem: translateElhFlat("villa.vh1.land"),
    },
    {
      iconItem: "/home-items/images/house.png",
      descriptionItem: translateElhFlat("villa.vh1.size"),
    },
    {
      iconItem: "/home-items/images/bedroom.png",
      descriptionItem: translateElhFlat("villa.vh1.bedroom"),
    },
    {
      iconItem: "/home-items/images/livingroom.png",
      descriptionItem: translateElhFlat("villa.vh1.living_rooms"),
    },
    {
      iconItem: "/home-items/images/bathroom.png",
      descriptionItem: translateElhFlat("villa.vh1.bath_room"),
    },
    {
      iconItem: "/home-items/images/kitchen.png",
      descriptionItem: translateElhFlat("villa.vh1.kitchen"),
    },
  ];
  // Villa VH2
  const unitItemsVillaVH2: SubUnitItemCardDefinition[] = [
    {
      iconItem: "/home-items/images/land.png",
      descriptionItem: translateElhFlat("villa.vh2.land"),
    },
    {
      iconItem: "/home-items/images/house.png",
      descriptionItem: translateElhFlat("villa.vh2.size"),
    },
    {
      iconItem: "/home-items/images/bedroom.png",
      descriptionItem: translateElhFlat("villa.vh2.bedroom"),
    },
    {
      iconItem: "/home-items/images/livingroom.png",
      descriptionItem: translateElhFlat("villa.vh2.living_rooms"),
    },
    {
      iconItem: "/home-items/images/bathroom.png",
      descriptionItem: translateElhFlat("villa.vh2.bath_room"),
    },
    {
      iconItem: "/home-items/images/kitchen.png",
      descriptionItem: translateElhFlat("villa.vh2.kitchen"),
    },
  ];
  // Villa VH2A
  const unitItemsVillaVH2A: SubUnitItemCardDefinition[] = [
    {
      iconItem: "/home-items/images/land.png",
      descriptionItem: translateElhFlat("villa.vh2a.land"),
    },
    {
      iconItem: "/home-items/images/house.png",
      descriptionItem: translateElhFlat("villa.vh2a.size"),
    },
    {
      iconItem: "/home-items/images/bedroom.png",
      descriptionItem: translateElhFlat("villa.vh2a.bedroom"),
    },
    {
      iconItem: "/home-items/images/livingroom.png",
      descriptionItem: translateElhFlat("villa.vh2a.living_rooms"),
    },
    {
      iconItem: "/home-items/images/bathroom.png",
      descriptionItem: translateElhFlat("villa.vh2a.bath_room"),
    },
    {
      iconItem: "/home-items/images/kitchen.png",
      descriptionItem: translateElhFlat("villa.vh2a.kitchen"),
    },
  ];
  // Vh3
  const unitItemsVillaVH3: SubUnitItemCardDefinition[] = [
    {
      iconItem: "/home-items/images/land.png",
      descriptionItem: translateElhFlat("villa.vh3.land"),
    },
    {
      iconItem: "/home-items/images/house.png",
      descriptionItem: translateElhFlat("villa.vh3.size"),
    },
    {
      iconItem: "/home-items/images/bedroom.png",
      descriptionItem: translateElhFlat("villa.vh3.bedroom"),
    },
    {
      iconItem: "/home-items/images/livingroom.png",
      descriptionItem: translateElhFlat("villa.vh3.living_rooms"),
    },
    {
      iconItem: "/home-items/images/bathroom.png",
      descriptionItem: translateElhFlat("villa.vh3.bath_room"),
    },
    {
      iconItem: "/home-items/images/kitchen.png",
      descriptionItem: translateElhFlat("villa.vh3.kitchen"),
    },
  ];
  // vh3a
  const unitItemsVillaVH3a: SubUnitItemCardDefinition[] = [
    {
      iconItem: "/home-items/images/land.png",
      descriptionItem: translateElhFlat("villa.vh3a.land"),
    },
    {
      iconItem: "/home-items/images/house.png",
      descriptionItem: translateElhFlat("villa.vh3a.size"),
    },
    {
      iconItem: "/home-items/images/bedroom.png",
      descriptionItem: translateElhFlat("villa.vh3a.bedroom"),
    },
    {
      iconItem: "/home-items/images/livingroom.png",
      descriptionItem: translateElhFlat("villa.vh3a.living_rooms"),
    },
    {
      iconItem: "/home-items/images/bathroom.png",
      descriptionItem: translateElhFlat("villa.vh3a.bath_room"),
    },
    {
      iconItem: "/home-items/images/kitchen.png",
      descriptionItem: translateElhFlat("villa.vh3a.kitchen"),
    },
  ];
  //vh3b
  const unitItemsVillaVH3b: SubUnitItemCardDefinition[] = [
    {
      iconItem: "/home-items/images/land.png",
      descriptionItem: translateElhFlat("villa.vh3b.land"),
    },
    {
      iconItem: "/home-items/images/house.png",
      descriptionItem: translateElhFlat("villa.vh3b.size"),
    },
    {
      iconItem: "/home-items/images/bedroom.png",
      descriptionItem: translateElhFlat("villa.vh3b.bedroom"),
    },
    {
      iconItem: "/home-items/images/livingroom.png",
      descriptionItem: translateElhFlat("villa.vh3b.living_rooms"),
    },
    {
      iconItem: "/home-items/images/bathroom.png",
      descriptionItem: translateElhFlat("villa.vh3b.bath_room"),
    },
    {
      iconItem: "/home-items/images/kitchen.png",
      descriptionItem: translateElhFlat("villa.vh3b.kitchen"),
    },
  ];
  //vh5
  const unitItemsvillaVH5: SubUnitItemCardDefinition[] = [
    {
      iconItem: "/home-items/images/land.png",
      descriptionItem: translateElhFlat("villa.vh3b.land"),
    },
    {
      iconItem: "/home-items/images/house.png",
      descriptionItem: translateElhFlat("villa.vh3b.size"),
    },
    {
      iconItem: "/home-items/images/bedroom.png",
      descriptionItem: translateElhFlat("villa.vh3b.bedroom"),
    },
    {
      iconItem: "/home-items/images/livingroom.png",
      descriptionItem: translateElhFlat("villa.vh3b.living_rooms"),
    },
    {
      iconItem: "/home-items/images/bathroom.png",
      descriptionItem: translateElhFlat("villa.vh3b.bath_room"),
    },
    {
      iconItem: "/home-items/images/kitchen.png",
      descriptionItem: translateElhFlat("villa.vh3b.kitchen"),
    },
  ];
  //vh5
  const unitItemsvillaVHT: SubUnitItemCardDefinition[] = [
    {
      iconItem: "/home-items/images/land.png",
      descriptionItem: translateElhFlat("villa.vh3b.land"),
    },
    {
      iconItem: "/home-items/images/house.png",
      descriptionItem: translateElhFlat("villa.vh3b.size"),
    },
    {
      iconItem: "/home-items/images/bedroom.png",
      descriptionItem: translateElhFlat("villa.vh3b.bedroom"),
    },
    {
      iconItem: "/home-items/images/livingroom.png",
      descriptionItem: translateElhFlat("villa.vh3b.living_rooms"),
    },
    {
      iconItem: "/home-items/images/bathroom.png",
      descriptionItem: translateElhFlat("villa.vh3b.bath_room"),
    },
    {
      iconItem: "/home-items/images/kitchen.png",
      descriptionItem: translateElhFlat("villa.vh3b.kitchen"),
    },
  ];
  // Image slide
  // EFH
  const efhImageSlide = [
    {
      imgUrl: "/master_image_project/ELH/projects/flat/flat_efh_1.jpg",
      alt: "Flat of ELH",
    },
    {
      imgUrl: "/master_image_project/ELH/projects/flat/flat_efh_2.jpg",
      alt: "Flat of ELH",
    },
  ];
  const efhImageCataloge = {
    imgUrl: "/master_image_project/ELH/cataloge/flat/cataloge_flat_efh.jpg",
    alt: "Flat of ELH",
  };
  // EFH2
  const efh2ImageSlide = [
    {
      imgUrl: "/master_image_project/ELH/projects/flat/flat_efh2_1.jpg",
      alt: "Flat of ELH",
    },
    {
      imgUrl: "/master_image_project/ELH/projects/flat/flat_efh2_2.jpg",
      alt: "Flat of ELH",
    },
  ];
  const efh2ImageCataloge = {
    imgUrl: "/master_image_project/ELH/cataloge/flat/cataloge_flat_efh2.jpg",
    alt: "Flat of ELH",
  };
  // EFH3
  const efh3ImageSlide = [
    {
      imgUrl: "/master_image_project/ELH/projects/flat/flat_efh3_2.jpg",
      alt: "Flat of ELH",
    },
    {
      imgUrl: "/master_image_project/ELH/projects/flat/flat_efh3_1.jpg",
      alt: "Flat of ELH",
    },
  ];
  const efh3ImageCataloge = {
    imgUrl: "/master_image_project/ELH/cataloge/flat/cataloge_flat_efh3.jpg",
    alt: "Flat of ELH",
  };
  // Villa Slide and Cotaloge
  const villavh1Slides = [
    {
      imgUrl: "/master_image_project/ELH/projects/villa/villa_vh1_1.png",
      alt: "Villa of ELH",
    },
    {
      imgUrl: "/master_image_project/ELH/projects/villa/villa_vh1_2.png",
      alt: "Villa of ELH",
    },
  ];
  const villavh1Cataloge = {
    imgUrl: "/master_image_project/ELH/cataloge/villa/cataloge_villa_vh1.jpg",
    alt: "Flat of ELH",
  };
  // Villa Slide and Cotaloge
  const villavh2Slides = [
    {
      imgUrl: "/master_image_project/ELH/projects/villa/villa_vh2_1.png",
      alt: "Villa of ELH",
    },
    {
      imgUrl: "/master_image_project/ELH/projects/villa/villa_vh2_2.png",
      alt: "Villa of ELH",
    },
  ];
  const villavh2Cataloge = {
    imgUrl: "/master_image_project/ELH/cataloge/villa/cataloge_villa_vh2.jpg",
    alt: "Flat of ELH",
  };
  const villavh2aSlides = [
    {
      imgUrl: "/master_image_project/ELH/projects/villa/villa_vh2a_1.png",
      alt: "Villa of ELH",
    },
    {
      imgUrl: "/master_image_project/ELH/projects/villa/villa_vh2a_2.png",
      alt: "Villa of ELH",
    },
  ];
  const villavh2aCataloge = {
    imgUrl: "/master_image_project/ELH/cataloge/villa/cataloge_villa_vh2a.jpg",
    alt: "Flat of ELH",
  };
  const villavh3Slides = [
    {
      imgUrl: "/master_image_project/ELH/projects/villa/villa_vh3_1.jpg",
      alt: "Villa of ELH",
    },
    {
      imgUrl: "/master_image_project/ELH/projects/villa/villa_vh3_2.jpg",
      alt: "Villa of ELH",
    },
  ];
  const villavh3Cataloge = {
    imgUrl: "/master_image_project/ELH/cataloge/villa/cataloge_villa_vh3.jpg",
    alt: "Flat of ELH",
  };
  const villavh3aSlides = [
    {
      imgUrl: "/master_image_project/ELH/projects/villa/villa_vh3a_1.jpg",
      alt: "Villa of ELH",
    },
    {
      imgUrl: "/master_image_project/ELH/projects/villa/villa_vh3a_2.jpg",
      alt: "Villa of ELH",
    },
  ];
  const villavh3aCataloge = {
    imgUrl: "/master_image_project/ELH/cataloge/villa/cataloge_villa_vh3a.jpg",
    alt: "Flat of ELH",
  };
  const villavh3bSlides = [
    {
      imgUrl: "/master_image_project/ELH/projects/villa/villa_vh3b_1.png",
      alt: "Villa of ELH",
    },
    {
      imgUrl: "/master_image_project/ELH/projects/villa/villa_vh3b_2.png",
      alt: "Villa of ELH",
    },
  ];
  const villavh3bCataloge = {
    imgUrl: "/master_image_project/ELH/cataloge/villa/cataloge_villa_vh3b.jpg",
    alt: "Flat of ELH",
  };
  const villavh5Slides = [
    {
      imgUrl: "/master_image_project/ELH/projects/villa/villa_vh5_1.png",
      alt: "Villa of ELH",
    },
    {
      imgUrl: "/master_image_project/ELH/projects/villa/villa_vh5_2.png",
      alt: "Villa of ELH",
    },
  ];
  const villavh5Cataloge = {
    imgUrl: "/master_image_project/ELH/cataloge/villa/cataloge_villa_vh5.jpg",
    alt: "Flat of ELH",
  };
  const villavthSlides = [
    {
      imgUrl: "/master_image_project/ELH/projects/villa/villa_vth_1.jpg",
      alt: "Villa of ELH",
    },
    {
      imgUrl: "/master_image_project/ELH/projects/villa/villa_vth_2.jpg",
      alt: "Villa of ELH",
    },
  ];
  const villavthCataloge = {
    imgUrl: "/master_image_project/ELH/cataloge/villa/cataloge_villa_vth.jpg",
    alt: "Flat of ELH",
  };

  // Land land
  const landLandSlides = [
    {
      imgUrl: "/master_image_project/ELH/projects/land/land_1.jpg",
      alt: "Villa of ELH",
    },
    {
      imgUrl: "/master_image_project/ELH/projects/land/land_2.jpg",
      alt: "Villa of ELH",
    },
    {
      imgUrl: "/master_image_project/ELH/projects/land/land_3.jpg",
      alt: "Villa of ELH",
    },
  ];
  const unitItemsLand: SubUnitItemCardDefinition[] = [{
    iconItem: "/home-items/images/land.png",
    descriptionItem: translateElhFlat("land.land_flat"),
  }];
  const landLandCataloge = {
    imgUrl: "/master_image_project/ELH/cataloge/land/cataloge_land.jpg",
    alt: "Flat of ELH",
  };
  // Land Villa
  // Land
  const landVillaSlides = [
    {
      imgUrl: "/master_image_project/ELH/projects/land/land_1.jpg",
      alt: "Villa of ELH",
    },
    {
      imgUrl: "/master_image_project/ELH/projects/land/land_2.jpg",
      alt: "Villa of ELH",
    },
    {
      imgUrl: "/master_image_project/ELH/projects/land/land_3.jpg",
      alt: "Villa of ELH",
    },
  ];
  const unitItemsLandVilla: SubUnitItemCardDefinition[] = [{
    iconItem: "/home-items/images/land.png",
    descriptionItem: translateElhFlat("land.land_villa"),
  }];
  const landVillaCataloge = {
    imgUrl: "/master_image_project/ELH/cataloge/land/cataloge_land_villa.jpg",
    alt: "Flat of ELH",
  };
  // Land Villa
  // Land
  const landVySlides = [
    {
      imgUrl: "/master_image_project/ELH/projects/land/land_1.jpg",
      alt: "Villa of ELH",
    },
    {
      imgUrl: "/master_image_project/ELH/projects/land/land_2.jpg",
      alt: "Villa of ELH",
    },
    {
      imgUrl: "/master_image_project/ELH/projects/land/land_3.jpg",
      alt: "Villa of ELH",
    },
  ];
  const unitItemsLandVy: SubUnitItemCardDefinition[] = [{
    iconItem: "/home-items/images/land.png",
    descriptionItem: translateElhFlat("land.land_flat_vy"),
  }];
  const landVyCataloge = {
    imgUrl: "/master_image_project/ELH/cataloge/land/cataloge_land_vy.jpg",
    alt: "Flat of ELH",
  };
  return (
    <section className={`w-[74%] m-auto mt-16`}>
      {/* ====== Main of Tap ======= */}
      <Tabs aria-label="Options">
        {/* ======== Flat ======= */}
        <Tab
          key="flat"
          title={translator("flat")}
          style={{ height: "40px", width: "120px", fontSize: "16px" }}
          className={`${langParagraph}`}
        >
          <main className="w-full mt-2">
            <Tabs aria-label="Options" placement="start">
              <Tab
                key="efh"
                title={
                  <div className="flex items-center justify-evenly gap-2 w-[90px]">
                    <GalleryIcon />
                    <p>EFH</p>
                  </div>
                }
                style={{ height: "40px", width: "120px", fontSize: "16px" }}
                className={`${langParagraph}`}
              >
                <CatalogeTapProperties
                  slide={efhImageSlide}
                  items={unitItems}
                  cataloge={efhImageCataloge}
                />
              </Tab>
              <Tab
                key="efh2"
                title={
                  <div className="flex items-center justify-evenly gap-2 w-[90px]">
                    <GalleryIcon />
                    <p>EFH2</p>
                  </div>
                }
                style={{ height: "40px", width: "120px", fontSize: "16px" }}
                className={`${langParagraph}`}
              >
                <CatalogeTapProperties
                  slide={efh2ImageSlide}
                  items={unitItemsFlatvh2}
                  cataloge={efh2ImageCataloge}
                />
              </Tab>
              <Tab
                key="efh3"
                title={
                  <div className="flex items-center justify-evenly gap-2 w-[90px]">
                    <GalleryIcon />
                    <p>EFH3</p>
                  </div>
                }
                style={{ height: "40px", width: "120px", fontSize: "16px" }}
                className={`${langParagraph}`}
              >
                <CatalogeTapProperties
                  slide={efh3ImageSlide}
                  items={unitItemsFlatvh3}
                  cataloge={efh3ImageCataloge}
                />
              </Tab>
            </Tabs>
          </main>
        </Tab>

        {/* ======== Villa ======== */}
        <Tab
          key="villa"
          title={translator("villa")}
          style={{ height: "40px", width: "120px", fontSize: "16px" }}
          className={`${langParagraph}`}
        >
          <main className="w-full mt-2">
            <Tabs aria-label="Options" placement="start">
              <Tab
                key="vh1"
                title={
                  <div className="flex items-center justify-evenly gap-2 w-[100px]">
                    <GalleryIcon />
                    <p>VH1</p>
                  </div>
                }
                style={{ height: "40px", width: "120px", fontSize: "16px" }}
                className={`${langParagraph}`}
              >
                <CatalogeTapProperties
                  slide={villavh1Slides}
                  items={unitItemsVilla}
                  cataloge={villavh1Cataloge}
                />
              </Tab>
              <Tab
                key="vh2"
                title={
                  <div className="flex items-center justify-evenly gap-2 w-[100px]">
                    <GalleryIcon />
                    <p>VH2</p>
                  </div>
                }
                style={{ height: "40px", width: "120px", fontSize: "16px" }}
                className={`${langParagraph}`}
              >
                <CatalogeTapProperties
                  slide={villavh2Slides}
                  items={unitItemsVillaVH2}
                  cataloge={villavh2Cataloge}
                />
              </Tab>
              <Tab
                key="vh2a"
                title={
                  <div className="flex items-center justify-evenly gap-2 w-[90px]">
                    <GalleryIcon />
                    <p>VH2A</p>
                  </div>
                }
                style={{ height: "40px", width: "120px", fontSize: "16px" }}
                className={`${langParagraph}`}
              >
                <CatalogeTapProperties
                  slide={villavh2aSlides}
                  items={unitItemsVillaVH2A}
                  cataloge={villavh2aCataloge}
                />
              </Tab>
              <Tab
                key="vh3"
                title={
                  <div className="flex items-center justify-evenly gap-2 w-[90px]">
                    <GalleryIcon />
                    <p>VH3</p>
                  </div>
                }
                style={{ height: "40px", width: "120px", fontSize: "16px" }}
                className={`${langParagraph}`}
              >
                <CatalogeTapProperties
                  slide={villavh3Slides}
                  items={unitItemsVillaVH3}
                  cataloge={villavh3Cataloge}
                />
              </Tab>
              <Tab
                key="vh3a"
                title={
                  <div className="flex items-center justify-evenly gap-2 w-[90px]">
                    <GalleryIcon />
                    <p>VH3A</p>
                  </div>
                }
                style={{ height: "40px", width: "120px", fontSize: "16px" }}
                className={`${langParagraph}`}
              >
                <CatalogeTapProperties
                  slide={villavh3aSlides}
                  items={unitItemsVillaVH3a}
                  cataloge={villavh3aCataloge}
                />
              </Tab>
              <Tab
                key="vh3b"
                title={
                  <div className="flex items-center justify-evenly gap-2 w-[90px]">
                    <GalleryIcon />
                    <p>VH3B</p>
                  </div>
                }
                style={{ height: "40px", width: "120px", fontSize: "16px" }}
                className={`${langParagraph}`}
              >
                <CatalogeTapProperties
                  slide={villavh3bSlides}
                  items={unitItemsVillaVH3b}
                  cataloge={villavh3bCataloge}
                />
              </Tab>
              <Tab
                key="vh5"
                title={
                  <div className="flex items-center justify-evenly gap-2 w-[90px]">
                    <GalleryIcon />
                    <p>VH5</p>
                  </div>
                }
                style={{ height: "40px", width: "120px", fontSize: "16px" }}
                className={`${langParagraph}`}
              >
                <CatalogeTapProperties
                  slide={villavh5Slides}
                  items={unitItemsvillaVH5}
                  cataloge={villavh5Cataloge}
                />
              </Tab>
              <Tab
                key="vth"
                title={
                  <div className="flex items-center justify-evenly gap-2  w-[90px]">
                    <GalleryIcon />
                    <p>VTH</p>
                  </div>
                }
                style={{ height: "40px", width: "120px", fontSize: "16px" }}
                className={`${langParagraph}`}
              >
                <CatalogeTapProperties
                  slide={villavthSlides}
                  items={unitItemsvillaVHT}
                  cataloge={villavthCataloge}
                />
              </Tab>
            </Tabs>
          </main>
        </Tab>
        {/* Land */}
        <Tab
          key="land"
          title={translator("land​")}
          style={{ height: "40px", width: "120px", fontSize: "16px" }}
          className={`${langParagraph}`}
        >
          <main className="w-full mt-2">
            <Tabs aria-label="Options" placement="start">
              <Tab
                key="Land"
                title={
                  <div className="flex items-center justify-evenly gap-2 w-[100px]">
                    <GalleryIcon />
                    <p>Land</p>
                  </div>
                }
                style={{ height: "40px", width: "120px", fontSize: "16px" }}
                className={`${langParagraph}`}
              >
                <CatalogeTapProperties
                  slide={landLandSlides}
                  items={unitItemsLand}
                  cataloge={landLandCataloge}
                />
              </Tab>
              <Tab
                key="villa"
                title={
                  <div className="flex items-center justify-evenly gap-2 w-[100px]">
                    <GalleryIcon />
                    <p>Villa</p>
                  </div>
                }
                style={{ height: "40px", width: "120px", fontSize: "16px" }}
                className={`${langParagraph}`}
              >
                <CatalogeTapProperties
                  slide={landVillaSlides}
                  items={unitItemsLandVilla}
                  cataloge={landVillaCataloge}
                />
              </Tab>
              <Tab
                key="vh2a"
                title={
                  <div className="flex items-center justify-evenly gap-2 w-[90px]">
                    <GalleryIcon />
                    <p>VY</p>
                  </div>
                }
                style={{ height: "40px", width: "120px", fontSize: "16px" }}
                className={`${langParagraph}`}
              >
                <CatalogeTapProperties
                  slide={landVySlides}
                  items={unitItemsLandVy}
                  cataloge={landVyCataloge}
                />
              </Tab>
            </Tabs>
          </main>
        </Tab>
      </Tabs>
    </section>
  );
};

export default PropertiesCataloge;
