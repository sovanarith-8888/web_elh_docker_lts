"use client";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import React from "react";
import {
  battambongParagraph,
  interParagraph,
  koulenHeader,
  vigaHeader,
} from "@/app/[locale]/(user)/fonts";
import FeatureNearby from "@/components/component-build/mixFeatureNearby/FeatureNearby";
import PropertiesDynamic from "@/components/component-build/properties/PropertiesDynamic";
import ImageNextUI from "@/components/component-build/image-next-ui/ImageNextUI";
import CarouselByProject from "@/components/component-build/CarouselSlide/CarouselByProject";

const EastPrimeLandPage = () => {
  const translatLocation = useTranslations("project_plans");
  const translateEpl = useTranslations("epl_tap");
  const translateVilla = useTranslations("epl_land");
  const translatProperties = useTranslations("properties");
  const param = useParams();
  const locale = param.locale;
  const langHeader =
    locale === "kh" ? koulenHeader.className : vigaHeader.className;
  const langParagraph =
    locale === "kh" ? battambongParagraph.className : interParagraph.className;

  // Land for villa
  const land_villa = {
    title: translatLocation("east_primeland"),
    types: translateEpl("land_villa"),
    unit: "Villa",
    images: [
      "/master_image_project/EPL/projects/land_1.jpg",
      "/master_image_project/EPL/projects/land_1.jpg",
      "/master_image_project/EPL/projects/land_1.jpg",
    ],
    items: [
      {
        icon: "/home-items/images/land.png",
        iconTitle: translateVilla("epl_villa"),
      },
    ],
    cataloge: "/master_image_project/EPL/cataloge/cataloge_villa.jpg",
    layout: "",
  };
  // Land for villa
  const land_flat = {
    title: translatLocation("east_primeland"),
    types: translateEpl("land_flat"),
    unit: "Flat",
    images: [
      "/master_image_project/EPL/projects/land_1.jpg",
      "/master_image_project/EPL/projects/land_1.jpg",
      "/master_image_project/EPL/projects/land_1.jpg",
    ],
    items: [
      {
        icon: "/home-items/images/land.png",
        iconTitle: translateVilla("epl_flat"),
      },
    ],
    cataloge: "/master_image_project/EPL/cataloge/cataloge_land.jpg",
    layout: "",
  };
  const imageProjects = [
    "/master_image_project/EDH/land/land_1.jpg",
    "/master_image_project/EDH/land/land_2.jpg",
    "/master_image_project/EDH/land/land_3.jpg",
  ];
  return (
    <main className={`w-full`}>
      {/* Background Image */}
      <section className="w-full h-[72vh]">
        {/* <ImageNextUI
          src="/master_image_project/ELH/background.jpg"
          className="w-[100vw] h-[72vh]  rounded-none object-cover"
        /> */}
         <CarouselByProject images={imageProjects}/>
      </section>
      <h1 className={`text-logo ${langHeader} px-4 lg:px-[10%] mt-12`}>
        {translatProperties("property")}
      </h1>

      {/* land for villa*/}
      <div className="divider divider-start mt-8 divider-success px-4 lg:px-[10%]">
        <h3 className={`text-logo ${langHeader}`}>
          {translateEpl("land_villa")}
        </h3>
      </div>
      <div
        className={`px-4 lg:px-[10%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 flex-wrap mt-8`}
      >
        <PropertiesDynamic {...land_villa} />
      </div>
      {/* land for flat*/}
      <div className="divider divider-start mt-8 divider-success px-4 lg:px-[10%]">
        <h3 className={`text-logo ${langHeader}`}>
          {translateEpl("land_flat")}
        </h3>
      </div>
      <div
        className={`px-4 lg:px-[10%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 flex-wrap mt-8`}
      >
        <PropertiesDynamic {...land_flat} />
      </div>
      <FeatureNearby
        // lat={11.595669664265985}
        // lng={104.95908570245213}
        locationTitle={translatLocation("east_primeland_location")}
        imageMap={"/map/images/epl.jpg"}
        //urlLiveLocation={url}
      />
    </main>
  );
};

export default EastPrimeLandPage;
