"use client";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import React from "react";
import {
  battambongParagraph,
  interParagraph,
  koulenHeader,
  vigaHeader,
} from "../../../fonts";

import ImageNextUI from "@/components/component-build/image-next-ui/ImageNextUI";
import FeatureNearby from "@/components/component-build/mixFeatureNearby/FeatureNearby";
import PropertiesDynamic from "@/components/component-build/properties/PropertiesDynamic";
import CarouselByProject from "@/components/component-build/CarouselSlide/CarouselByProject";

const EscProjectPage = () => {
  const param = useParams();
  const translatLocation = useTranslations("project_plans");
  const translatProperties = useTranslations("properties");
  const translateEsc = useTranslations("esc");
  const locale = param.locale;
  const langHeader =
    locale === "kh" ? koulenHeader.className : vigaHeader.className;
  const langParagraph =
    locale === "kh" ? battambongParagraph.className : interParagraph.className;
  const imageMap = "/map/images/esc.jpg";
  const url =
    "https://www.google.com/maps/@10.5838628,103.6962259,3a,75y,2.88h,86.4t/data=!3m6!1e1!3m4!1s2LnV-6pAeQkKIiQFhWfRPw!2e0!7i13312!8i6656?entry=ttu&g_ep=EgoyMDI0MDkwOS4wIKXMDSoASAFQAw%3D%3D";
  /* ====== Data ====== */
  const bungalow_bk = {
    title: translatLocation("east_sihanouk"),
    types: translateEsc("esc_tap.bungalow"),
    unit: "BK",
    images: [
      "/master_image_project/ESC/projects/bungalow/bk_1.jpg",
      "/master_image_project/ESC/projects/bungalow/bk_2.png",
      "/master_image_project/ESC/projects/bungalow/bk_3.png",
      "/master_image_project/ESC/projects/bungalow/back_bk.jpg",
    ],
    items: [
      {
        icon: "/home-items/images/land.png",
        iconTitle: translateEsc("bugalow_items.bk.land"),
      },
      {
        icon: "/home-items/images/house.png",
        iconTitle: translateEsc("bugalow_items.bk.size"),
      },
      {
        icon: "/home-items/images/bedroom.png",
        iconTitle: translateEsc("bugalow_items.bk.bedroom"),
      },
      {
        icon: "/home-items/images/bathroom.png",
        iconTitle: translateEsc("bugalow_items.bk.bath_room"),
      },
      {
        icon: "/home-items/images/kitchen.png",
        iconTitle: translateEsc("bugalow_items.bk.kitchen"),
      },
      
    ],
    cataloge:
      "/master_image_project/ESC/cataloge/bungalow/BK.jpg",
    layout:  "/master_image_project/ESC/projects/bungalow/back_bk.jpg",
  };
  const bungalow_bt1room = {
    title: translatLocation("east_sihanouk"),
    types: translateEsc("esc_tap.bungalow"),
    unit: "BT1ROOM",
    images: [
      "/master_image_project/ESC/projects/bungalow/font_bt1room.jpg",
      "/master_image_project/ESC/projects/bungalow/bk1room_1.jpg",
      "/master_image_project/ESC/projects/bungalow/bk1room_2.jpg",
      "/master_image_project/ESC/projects/bungalow/back_bt1room.jpg",
    ],
    items: [
      {
        icon: "/home-items/images/land.png",
        iconTitle: translateEsc("bugalow_items.bt1room.land"),
      },
      {
        icon: "/home-items/images/house.png",
        iconTitle: translateEsc("bugalow_items.bt1room.size"),
      },
      {
        icon: "/home-items/images/bedroom.png",
        iconTitle: translateEsc("bugalow_items.bt1room.bedroom"),
      },
      {
        icon: "/home-items/images/bathroom.png",
        iconTitle: translateEsc("bugalow_items.bt1room.bath_room"),
      },
      {
        icon: "/home-items/images/kitchen.png",
        iconTitle: translateEsc("bugalow_items.bt1room.kitchen"),
      },
      
    ],
    cataloge:
      "/master_image_project/ESC/cataloge/bungalow/BT1Room.jpg",
    layout:  "/master_image_project/ESC/projects/bungalow/back_bt1room.jpg",
  };
  const bungalow_bt2room = {
    title: translatLocation("east_sihanouk"),
    types: translateEsc("esc_tap.bungalow"),
    unit: "BT2ROOM",
    images: [
      "/master_image_project/ESC/projects/bungalow/bk2room_1.jpg",
      "/master_image_project/ESC/projects/bungalow/bk2room_3.jpg",
      "/master_image_project/ESC/projects/bungalow/bk2room_2.jpg",
      "/master_image_project/ESC/projects/bungalow/back_bt2room.jpg",
    ],
    items: [
      {
        icon: "/home-items/images/land.png",
        iconTitle: translateEsc("bugalow_items.bt2room.land"),
      },
      {
        icon: "/home-items/images/house.png",
        iconTitle: translateEsc("bugalow_items.bt2room.size"),
      },
      {
        icon: "/home-items/images/bedroom.png",
        iconTitle: translateEsc("bugalow_items.bt2room.bedroom"),
      },
      {
        icon: "/home-items/images/bathroom.png",
        iconTitle: translateEsc("bugalow_items.bt2room.bath_room"),
      },
      {
        icon: "/home-items/images/kitchen.png",
        iconTitle: translateEsc("bugalow_items.bt2room.kitchen"),
      },
      
    ],
    cataloge:
      "/master_image_project/ESC/cataloge/bungalow/BT2Room.jpg",
    layout:  "/master_image_project/ESC/projects/bungalow/back_bt2room.jpg",
  };
  // => Flat
  const flat_she0 = {
    title: translatLocation("east_sihanouk"),
    types: translateEsc("esc_tap.flat"),
    unit: "SH-E0",
    images: [
      "/master_image_project/ESC/projects/flat/front_she0_s2.PNG",
      "/master_image_project/ESC/projects/flat/sheo_1.jpg",
      "/master_image_project/ESC/projects/flat/sheo_2.jpg",
      "/master_image_project/ESC/projects/flat/back_she0_s4.jpg",

    ],
    items: [
      {
        icon: "/home-items/images/land.png",
        iconTitle: translateEsc("flat_items.sheo.land"),
      },
      {
        icon: "/home-items/images/house.png",
        iconTitle: translateEsc("flat_items.sheo.size"),
      },
      {
        icon: "/home-items/images/bedroom.png",
        iconTitle: translateEsc("flat_items.sheo.bedroom"),
      },
      {
        icon: "/home-items/images/livingroom.png",
        iconTitle: translateEsc("flat_items.sheo.living_rooms"),
      },
      {
        icon: "/home-items/images/bathroom.png",
        iconTitle: translateEsc("flat_items.sheo.bath_room"),
      },
      {
        icon: "/home-items/images/kitchen.png",
        iconTitle: translateEsc("flat_items.sheo.kitchen"),
      },
      
    ],
    cataloge:
      "/master_image_project/ESC/cataloge/flat/SH-E0.jpg",
    layout:  "/master_image_project/ESC/projects/flat/back_she0_s4.jpg",
  };
  const flat_she0_s1 = {
    title: translatLocation("east_sihanouk"),
    types: translateEsc("esc_tap.flat"),
    unit: "SHE0 S1",
    images: [
      "/master_image_project/ESC/projects/flat/front_she0_s2.PNG",
      "/master_image_project/ESC/projects/flat/sheo-s1_1.jpg",
      "/master_image_project/ESC/projects/flat/sheo-s1_2.jpg",
      "/master_image_project/ESC/projects/flat/back_she0_s1.jpg",

    ],
    items: [
      {
        icon: "/home-items/images/land.png",
        iconTitle: translateEsc("flat_items.sheos1.land"),
      },
      {
        icon: "/home-items/images/house.png",
        iconTitle: translateEsc("flat_items.sheos1.size"),
      },
      {
        icon: "/home-items/images/bedroom.png",
        iconTitle: translateEsc("flat_items.sheos1.bedroom"),
      },
      {
        icon: "/home-items/images/livingroom.png",
        iconTitle: translateEsc("flat_items.sheos1.living_rooms"),
      },
      {
        icon: "/home-items/images/bathroom.png",
        iconTitle: translateEsc("flat_items.sheos1.bath_room"),
      },
      {
        icon: "/home-items/images/kitchen.png",
        iconTitle: translateEsc("flat_items.sheos1.kitchen"),
      },
      
    ],
    cataloge:
      "/master_image_project/ESC/cataloge/flat/SH-E0-S1.jpg",
    layout:  "/master_image_project/ESC/projects/flat/back_she0_s1.jpg",
  };
  const flat_she0_s2 = {
    title: translatLocation("east_sihanouk"),
    types: translateEsc("esc_tap.flat"),
    unit: "SHE0 S2",
    images: [
      "/master_image_project/ESC/projects/flat/front_she0_s2.PNG",
      "/master_image_project/ESC/projects/flat/sheo-s2_1.jpg",
      "/master_image_project/ESC/projects/flat/sheo-s2_2.jpg",
      "/master_image_project/ESC/projects/flat/back_she0_s2.jpg",

    ],
    items: [
      {
        icon: "/home-items/images/land.png",
        iconTitle: translateEsc("flat_items.sheos2.land"),
      },
      {
        icon: "/home-items/images/house.png",
        iconTitle: translateEsc("flat_items.sheos2.size"),
      },
      {
        icon: "/home-items/images/bedroom.png",
        iconTitle: translateEsc("flat_items.sheos2.bedroom"),
      },
      {
        icon: "/home-items/images/livingroom.png",
        iconTitle: translateEsc("flat_items.sheos2.living_rooms"),
      },
      {
        icon: "/home-items/images/bathroom.png",
        iconTitle: translateEsc("flat_items.sheos2.bath_room"),
      },
      {
        icon: "/home-items/images/kitchen.png",
        iconTitle: translateEsc("flat_items.sheos2.kitchen"),
      },
      
    ],
    cataloge:
      "/master_image_project/ESC/cataloge/flat/SH-E0-S2.jpg",
    layout:  "/master_image_project/ESC/projects/flat/back_she0_s2.jpg",
  };
  const flat_she0_s4 = {
    title: translatLocation("east_sihanouk"),
    types: translateEsc("esc_tap.flat"),
    unit: "SHE0 S4",
    images: [
      "/master_image_project/ESC/projects/flat/front_she0_s2.PNG",
      "/master_image_project/ESC/projects/flat/sheo-s4_1.jpg",
      "/master_image_project/ESC/projects/flat/sheo-s4_2.jpg",
      "/master_image_project/ESC/projects/flat/back_she0_s4.jpg",

    ],
    items: [
      {
        icon: "/home-items/images/land.png",
        iconTitle: translateEsc("flat_items.sheos4.land"),
      },
      {
        icon: "/home-items/images/house.png",
        iconTitle: translateEsc("flat_items.sheos4.size"),
      },
      {
        icon: "/home-items/images/bedroom.png",
        iconTitle: translateEsc("flat_items.sheos4.bedroom"),
      },
      {
        icon: "/home-items/images/livingroom.png",
        iconTitle: translateEsc("flat_items.sheos4.living_rooms"),
      },
      {
        icon: "/home-items/images/bathroom.png",
        iconTitle: translateEsc("flat_items.sheos4.bath_room"),
      },
      {
        icon: "/home-items/images/kitchen.png",
        iconTitle: translateEsc("flat_items.sheos4.kitchen"),
      },
      
    ],
    cataloge:
      "/master_image_project/ESC/cataloge/flat/SH-E0-S4.jpg",
    layout:  "/master_image_project/ESC/projects/flat/back_she0_s4.jpg",
  };
  const flat_she2 = {
    title: translatLocation("east_sihanouk"),
    types: translateEsc("esc_tap.flat"),
    unit: "SHE2",
    images: [
      "/master_image_project/ESC/projects/flat/front_she0_s2.PNG",
      "/master_image_project/ESC/projects/flat/she2_1.jpg",
      "/master_image_project/ESC/projects/flat/she2_2.jpg",
      "/master_image_project/ESC/projects/flat/back_she2.jpg",

    ],
    items: [
      {
        icon: "/home-items/images/land.png",
        iconTitle: translateEsc("flat_items.she2.land"),
      },
      {
        icon: "/home-items/images/house.png",
        iconTitle: translateEsc("flat_items.she2.size"),
      },
      {
        icon: "/home-items/images/bedroom.png",
        iconTitle: translateEsc("flat_items.she2.bedroom"),
      },
      {
        icon: "/home-items/images/livingroom.png",
        iconTitle: translateEsc("flat_items.she2.living_rooms"),
      },
      {
        icon: "/home-items/images/bathroom.png",
        iconTitle: translateEsc("flat_items.she2.bath_room"),
      },
      {
        icon: "/home-items/images/kitchen.png",
        iconTitle: translateEsc("flat_items.she2.kitchen"),
      },
      
    ],
    cataloge:
      "/master_image_project/ESC/cataloge/flat/SHE2.jpg",
    layout:  "/master_image_project/ESC/projects/flat/back_she2.jpg",
  };
  // Villa
  const villa_la = {
    title: translatLocation("east_sihanouk"),
    types: translateEsc("esc_tap.flat"),
    unit: "LA",
    images: [
      "/master_image_project/ESC/projects/villa/front_la.jpg",
      "/master_image_project/ESC/projects/villa/la_2.jpg",
     
      "/master_image_project/ESC/projects/villa/back_la.png",

    ],
    items: [
      {
        icon: "/home-items/images/land.png",
        iconTitle: translateEsc("villa_items.la.land"),
      },
      {
        icon: "/home-items/images/house.png",
        iconTitle: translateEsc("villa_items.la.size"),
      },
      {
        icon: "/home-items/images/bedroom.png",
        iconTitle: translateEsc("villa_items.la.bedroom"),
      },
      {
        icon: "/home-items/images/livingroom.png",
        iconTitle: translateEsc("villa_items.la.living_rooms"),
      },
      {
        icon: "/home-items/images/bathroom.png",
        iconTitle: translateEsc("villa_items.la.bath_room"),
      },
      {
        icon: "/home-items/images/kitchen.png",
        iconTitle: translateEsc("villa_items.la.kitchen"),
      },
      
    ],
    cataloge:
      "/master_image_project/ESC/cataloge/villa/LA.jpg",
    layout:  "/master_image_project/ESC/projects/villa/back_la.png",
  };
  const villa_lb = {
    title: translatLocation("east_sihanouk"),
    types: translateEsc("esc_tap.flat"),
    unit: "LB",
    images: [
      "/master_image_project/ESC/projects/villa/front_lb.png",
      "/master_image_project/ESC/projects/villa/lb_1.jpg",
      "/master_image_project/ESC/projects/villa/lb_2.jpg",
      "/master_image_project/ESC/projects/villa/back_lb.jpg",

    ],
    items: [
      {
        icon: "/home-items/images/land.png",
        iconTitle: translateEsc("villa_items.lb.land"),
      },
      {
        icon: "/home-items/images/house.png",
        iconTitle: translateEsc("villa_items.lb.size"),
      },
      {
        icon: "/home-items/images/bedroom.png",
        iconTitle: translateEsc("villa_items.lb.bedroom"),
      },
      {
        icon: "/home-items/images/livingroom.png",
        iconTitle: translateEsc("villa_items.lb.living_rooms"),
      },
      {
        icon: "/home-items/images/bathroom.png",
        iconTitle: translateEsc("villa_items.lb.bath_room"),
      },
      {
        icon: "/home-items/images/kitchen.png",
        iconTitle: translateEsc("villa_items.lb.kitchen"),
      },
      
    ],
    cataloge:
      "/master_image_project/ESC/cataloge/villa/LB.jpg",
    layout:  "/master_image_project/ESC/projects/villa/back_lb.jpg",
  };
  const villa_vta = {
    title: translatLocation("east_sihanouk"),
    types: translateEsc("esc_tap.villa"),
    unit: "VTA",
    images: [
      "/master_image_project/ESC/projects/villa/front_vta.jpg",
      "/master_image_project/ESC/projects/villa/vta_1.png",
      "/master_image_project/ESC/projects/villa/vta_2.jpg",
      "/master_image_project/ESC/projects/villa/back_vta.jpg",

    ],
    items: [
      {
        icon: "/home-items/images/land.png",
        iconTitle: translateEsc("villa_items.vta.land"),
      },
      {
        icon: "/home-items/images/house.png",
        iconTitle: translateEsc("villa_items.vta.size"),
      },
      {
        icon: "/home-items/images/bedroom.png",
        iconTitle: translateEsc("villa_items.vta.bedroom"),
      },
      {
        icon: "/home-items/images/livingroom.png",
        iconTitle: translateEsc("villa_items.vta.living_rooms"),
      },
      {
        icon: "/home-items/images/bathroom.png",
        iconTitle: translateEsc("villa_items.vta.bath_room"),
      },
      {
        icon: "/home-items/images/kitchen.png",
        iconTitle: translateEsc("villa_items.vta.kitchen"),
      },
      
    ],
    cataloge:
      "/master_image_project/ESC/cataloge/villa/VTA.jpg",
    layout:  "/master_image_project/ESC/projects/villa/back_vta.jpg",
  };
  // Land
  const land_villa = {
    title: translatLocation("east_sihanouk"),
    types: translateEsc("esc_tap.land"),
    unit: "Villa",
    images: [
      "/master_image_project/ESC/projects/land/land_1.jpg",
      "/master_image_project/ESC/projects/land/land_2.jpg",
    ],
    items: [
      {
        icon: "/home-items/images/land.png",
        iconTitle: translateEsc("land_items.villa.land"),
      },
      
    ],
    cataloge:
      "/master_image_project/ESC/cataloge/land/ESC-LAND-Villa.jpg",
    layout:  "/master_image_project/ESC/projects/land/land_2.jpg",
  };
  const land_land = {
    title: translatLocation("east_sihanouk"),
    types: translateEsc("esc_tap.land"),
    unit: "Land",
    images: [
      "/master_image_project/ESC/projects/land/land_1.jpg",
      "/master_image_project/ESC/projects/land/land_2.jpg",
    ],
    items: [
      {
        icon: "/home-items/images/land.png",
        iconTitle: translateEsc("land_items.land.land"),
      },
      
    ],
    cataloge:
      "/master_image_project/ESC/cataloge/land/ESC-Land.jpg",
    layout:  "/master_image_project/ESC/projects/land/land_2.jpg",
  };
  const land_flat = {
    title: translatLocation("east_sihanouk"),
    types: translateEsc("esc_tap.land"),
    unit: "Flat",
    images: [
      "/master_image_project/ESC/projects/land/land_1.jpg",
      "/master_image_project/ESC/projects/land/land_2.jpg",
    ],
    items: [
      {
        icon: "/home-items/images/land.png",
        iconTitle: translateEsc("land_items.flat.land"),
      },
      
    ],
    cataloge:
      "/master_image_project/ESC/cataloge/land/ESC-LAND2.jpg",
    layout:  "/master_image_project/ESC/projects/land/land_2.jpg",
  };
  const imageProjects = [
    "/master_image_project/ESC/bg1.jpg",
    "/master_image_project/ESC/bg2.jpg",
  ];
  return (
    <main className={`w-full `}>
      {/* Background Image */}
      {/* <section className="w-full h-[72vh]">
        <ImageNextUI
          src="/master_image_project/ESC/projects/bungalow/font_bt1room.jpg"
          className="w-[100vw] h-[72vh]  rounded-none object-cover"
        />
      </section> */}
      <CarouselByProject images={imageProjects}/>
      <h1 className={`text-logo ${langHeader} px-4 lg:px-[10%] mt-12`}>
        {translatProperties("property")}
      </h1>
      {/* Project Type Tab Properties */}
      {/* <div className="m-auto w-[100%] py-2 mt-8">
        <div className="flex w-full flex-col">
          <Tabs aria-label="Options" size="lg">
            <Tab
              key="bungalow"
              title={translatCatalog("bungalow")}
              style={{ height: "45px", width: "90px", fontSize: "14px" }}
              className={`${langParagraph}`}
            >
              <BungalowCatalog />
            </Tab>
            <Tab
              key="flat"
              title={translatCatalog("flat")}
              style={{ height: "45px", width: "90px", fontSize: "16px" }}
              className={`${langParagraph}`}
            >
              <FlatCatalog />
            </Tab>
            <Tab
              key="land"
              title={translatCatalog("land")}
              style={{ height: "45px", width: "90px", fontSize: "16px" }}
              className={`${langParagraph}`}
            >
              <LandCatalog />
            </Tab>
            <Tab
              key="villa"
              title={translatCatalog("villa")}
              style={{ height: "45px", width: "90px", fontSize: "16px" }}
              className={`${langParagraph}`}
            >
              <VillaCatalog />
            </Tab>
          </Tabs>
        </div>
      </div> */}

      {/* Bungalow */}
      <div className="divider divider-start mt-8 divider-success px-4 lg:px-[10%]">
        <h3 className={`text-logo ${langHeader}`}>
          {translateEsc("esc_tap.bungalow")}
        </h3>
      </div>
      <div
        className={`px-4 lg:px-[10%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 flex-wrap mt-8`}
      >
        <PropertiesDynamic {...bungalow_bk}/>
        <PropertiesDynamic {...bungalow_bt1room}/>
        <PropertiesDynamic {...bungalow_bt2room}/>
      </div>
      {/* Flat */}
      <div className="divider divider-start mt-8 divider-success px-4 lg:px-[10%]">
        <h3 className={`text-logo ${langHeader}`}>
          {translateEsc("esc_tap.villa")}
        </h3>
      </div>
      <div
        className={`px-4 lg:px-[10%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 flex-wrap mt-8`}
      >
        <PropertiesDynamic {...flat_she0}/>
        <PropertiesDynamic {...flat_she0_s1}/>
        <PropertiesDynamic {...flat_she0_s2}/>
        <PropertiesDynamic {...flat_she0_s4}/>
        <PropertiesDynamic {...flat_she2}/>
      </div>
      {/* Villa */}
      <div className="divider divider-start mt-8 divider-success px-4 lg:px-[10%]">
        <h3 className={`text-logo ${langHeader}`}>
          {translateEsc("esc_tap.flat")}
        </h3>
      </div>
      <div
        className={`px-4 lg:px-[10%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 flex-wrap mt-8`}
      >
        <PropertiesDynamic {...villa_la}/>
        <PropertiesDynamic {...villa_lb}/>
        <PropertiesDynamic {...villa_vta}/>
      </div>
       {/* Land */}
       <div className="divider divider-start mt-8 divider-success px-4 lg:px-[10%]">
        <h3 className={`text-logo ${langHeader}`}>
          {translateEsc("esc_tap.land")}
        </h3>
      </div>
      <div
        className={`px-4 lg:px-[10%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 flex-wrap mt-8`}
      >
        <PropertiesDynamic {...land_villa}/>
        <PropertiesDynamic {...land_flat}/>
        <PropertiesDynamic {...land_land}/>
      </div>

      {/* feature & nearby*/}
      <FeatureNearby
        lat={10.58420364701027}
        lng={103.69689784976066}
        locationTitle={translatLocation("east_sihanouk_location")}
        imageMap={imageMap}
        urlLiveLocation={url}
      />
    </main>
  );
};

export default EscProjectPage;
