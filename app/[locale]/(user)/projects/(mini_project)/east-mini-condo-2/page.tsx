"use client";
import { useTranslations } from "next-intl";
import React from "react";
import {
  battambongParagraph,
  interParagraph,
  koulenHeader,
  vigaHeader,
} from "@/app/[locale]/(user)/fonts";
import { useParams } from "next/navigation";
import FeatureNearby from "@/components/component-build/mixFeatureNearby/FeatureNearby";
import ImageNextUI from "@/components/component-build/image-next-ui/ImageNextUI";
import PropertiesDynamic from "@/components/component-build/properties/PropertiesDynamic";
import CarouselByProject from "@/components/component-build/CarouselSlide/CarouselByProject";

const EastMiniCondo2Page = () => {
  const translatLocation = useTranslations("project_plans");

  const translatProperties = useTranslations("properties");

  const translateEmc2 = useTranslations("emc2");
  const param = useParams();
  const locale = param.locale;
  const langHeader =
    locale === "kh" ? koulenHeader.className : vigaHeader.className;
  const langParagraph =
    locale === "kh" ? battambongParagraph.className : interParagraph.className;
  const url =
    "https://www.google.com/maps/place/East+Mini+Condo/@11.5956257,104.9591329,3a,75y,52.57h,91.59t/data=!3m6!1e1!3m4!1shExyScMUWat5LQaR2y6JNQ!2e0!7i13312!8i6656!4m9!1m2!2m1!1sMaps+East+Mini!3m5!1s0x3109550025dbfc8b:0x95d12d2f2410d558!8m2!3d11.5955546!4d104.9590451!16s%2Fg%2F11vz48mp1m?entry=ttu&g_ep=EgoyMDI0MDkwOS4wIKXMDSoASAFQAw%3D%3D";
  // Water | Road ...

  // 1 Bedroom
  const condo_1bd = {
    title: translatLocation("east_minicond2"),
    types: translateEmc2("emc2_tap.1bed"),
    unit: "MC",
    images: [
      "/master_image_project/EMC2(MC)/projects/front.jpg",
      "/master_image_project/EMC2(MC)/projects/1bedroom_1.jpg",
    ],
    items: [
      {
        icon: "/home-items/images/land.png",
        iconTitle: translateEmc2("emc2_1bed.land"),
      },
      {
        icon: "/home-items/images/bedroom.png",
        iconTitle: translateEmc2("emc2_1bed.bedroom"),
      },
      {
        icon: "/home-items/images/livingroom.png",
        iconTitle: translateEmc2("emc2_1bed.living_rooms"),
      },
      {
        icon: "/home-items/images/bathroom.png",
        iconTitle: translateEmc2("emc2_1bed.bath_room"),
      },
      {
        icon: "/home-items/images/kitchen.png",
        iconTitle: translateEmc2("emc2_1bed.kitchen"),
      },
    ],
    cataloge: "/master_image_project/EMC2(MC)/cataloge/1bedroom.jpg",
    layout: "",
  };
  // 1 Bedroom
  const condo_2bd = {
    title: translatLocation("east_minicond2"),
    types: translateEmc2("emc2_tap.1bed"),
    unit: "MC",
    images: [
      "/master_image_project/EMC2(MC)/projects/front.jpg",
      "/master_image_project/EMC2(MC)/projects/2bedroom_1.jpg",
    ],
    items: [
      {
        icon: "/home-items/images/land.png",
        iconTitle: translateEmc2("emc2_2bed.land"),
      },
      {
        icon: "/home-items/images/bedroom.png",
        iconTitle: translateEmc2("emc2_2bed.bedroom"),
      },
      {
        icon: "/home-items/images/livingroom.png",
        iconTitle: translateEmc2("emc2_2bed.living_rooms"),
      },
      {
        icon: "/home-items/images/bathroom.png",
        iconTitle: translateEmc2("emc2_2bed.bath_room"),
      },
      {
        icon: "/home-items/images/kitchen.png",
        iconTitle: translateEmc2("emc2_2bed.kitchen"),
      },
    ],
    cataloge: "/master_image_project/EMC2(MC)/cataloge/2bedroom.jpg",
    layout: "",
  };
  const imageProjects = [
    "/master_image_project/EMC2(MC)/bg1.jpg",
    "/master_image_project/EMC2(MC)/bg22.jpg",
    "/master_image_project/EMC2(MC)/bg2.jpg",

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
      {/* 1Bed room */}
      <div className="divider divider-start mt-8 divider-success px-4 lg:px-[10%]">
        <h3 className={`text-logo ${langHeader}`}>
          {translateEmc2("emc2_tap.1bed")}
        </h3>
      </div>
      <div
        className={`px-4 lg:px-[10%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 flex-wrap mt-8`}
      >
        <PropertiesDynamic {...condo_1bd} />
      </div>
      {/* 1Bed room */}
      <div className="divider divider-start mt-8 divider-success px-4 lg:px-[10%]">
        <h3 className={`text-logo ${langHeader}`}>
          {translateEmc2("emc2_tap.2bed")}
        </h3>
      </div>
      <div
        className={`px-4 lg:px-[10%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 flex-wrap mt-8`}
      >
        <PropertiesDynamic {...condo_2bd} />
      </div>
      <FeatureNearby
        lat={11.595669664265985}
        lng={104.95908570245213}
        locationTitle={translatLocation("east_minicond2_location")}
        imageMap={"/map/images/emc.jpg"}
        urlLiveLocation={url}
      />
    </main>
  );
};

export default EastMiniCondo2Page;
