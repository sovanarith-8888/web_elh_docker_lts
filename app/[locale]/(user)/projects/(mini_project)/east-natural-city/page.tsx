"use client";
import FeatureNearby from "@/components/component-build/mixFeatureNearby/FeatureNearby";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import React from "react";
import {
  battambongParagraph,
  interParagraph,
  koulenHeader,
  vigaHeader,
} from "../../../fonts";
import PropertiesDynamic from "@/components/component-build/properties/PropertiesDynamic";
import CarouselByProject from "@/components/component-build/CarouselSlide/CarouselByProject";

const EastNaturalCityPage = () => {
  const translatLocation = useTranslations("project_plans");
  const translatProperties = useTranslations("properties");
  const translateEnc = useTranslations("enc");
  const param = useParams();
  const locale = param.locale;
  const langHeader =
    locale === "kh" ? koulenHeader.className : vigaHeader.className;
  const langParagraph =
    locale === "kh" ? battambongParagraph.className : interParagraph.className;

  const url =
    "https://www.google.com/maps/@10.612352,103.931639,3a,75y,17.34h,94.3t/data=!3m6!1e1!3m4!1sxOJl1416J9_kQ-7AIAOCZg!2e0!7i13312!8i6656?entry=ttu&g_ep=EgoyMDI0MDkwOS4wIKXMDSoASAFQAw%3D%3D";
  const bungalow_k1b1 = {
    title: translatLocation("east_natural"),
    types: translateEnc("enc_tap.bungalow"),
    unit: "K1B1",
    images: [
      "/master_image_project/ENC/projects/bugalow/bungalow_k1b1_1.png",
      "/master_image_project/ENC/projects/bugalow/bungalow_k1b1_2.png",
      "/master_image_project/ENC/projects/bugalow/bungalow_k1b1_3.png",
    ],
    items: [
      {
        icon: "/home-items/images/land.png",
        iconTitle: translateEnc("bunglow_items.k1b1.land"),
      },
      {
        icon: "/home-items/images/house.png",
        iconTitle: translateEnc("bunglow_items.k1b1.size"),
      },
      {
        icon: "/home-items/images/bedroom.png",
        iconTitle: translateEnc("bunglow_items.k1b1.bedroom"),
      },
      {
        icon: "/home-items/images/bathroom.png",
        iconTitle: translateEnc("bunglow_items.k1b1.bath_room"),
      },
      {
        icon: "/home-items/images/kitchen.png",
        iconTitle: translateEnc("bunglow_items.k1b1.kitchen"),
      },
    ],
    cataloge: "/master_image_project/ENC/cataloge/bunglow/k1b1.jpg",
    layout: "",
  };
  const bungalow_k1b2 = {
    title: translatLocation("east_natural"),
    types: translateEnc("enc_tap.bungalow"),
    unit: "K1B2",
    images: [
      "/master_image_project/ENC/projects/bugalow/bungalow_k1b2_1.jpg",
      "/master_image_project/ENC/projects/bugalow/bungalow_k1b2_2.jpg",
      "/master_image_project/ENC/projects/bugalow/bungalow_k1b2_3.jpg",
      "/master_image_project/ENC/projects/bugalow/back_k1b2.jpg",
    ],
    items: [
      {
        icon: "/home-items/images/land.png",
        iconTitle: translateEnc("bunglow_items.k1b2.land"),
      },
      {
        icon: "/home-items/images/house.png",
        iconTitle: translateEnc("bunglow_items.k1b2.size"),
      },
      {
        icon: "/home-items/images/bedroom.png",
        iconTitle: translateEnc("bunglow_items.k1b2.bedroom"),
      },
      {
        icon: "/home-items/images/bathroom.png",
        iconTitle: translateEnc("bunglow_items.k1b2.bath_room"),
      },
      {
        icon: "/home-items/images/kitchen.png",
        iconTitle: translateEnc("bunglow_items.k1b2.kitchen"),
      },
    ],
    cataloge: "/master_image_project/ENC/cataloge/bunglow/k1b2.jpg",
    layout: "/master_image_project/ENC/projects/bugalow/back_k1b2.jpg",
  };
  const bungalow_k1b3 = {
    title: translatLocation("east_natural"),
    types: translateEnc("enc_tap.bungalow"),
    unit: "K1B3",
    images: [
      "/master_image_project/ENC/projects/bugalow/bungalow_k1b3_1.jpg",
      "/master_image_project/ENC/projects/bugalow/bungalow_k1b3_2.jpg",
      "/master_image_project/ENC/projects/bugalow/bungalow_k1b3_3.jpg",
      "/master_image_project/ENC/projects/bugalow/back_k1b3.jpg",
    ],
    items: [
      {
        icon: "/home-items/images/land.png",
        iconTitle: translateEnc("bunglow_items.k1b3.land"),
      },
      {
        icon: "/home-items/images/house.png",
        iconTitle: translateEnc("bunglow_items.k1b3.size"),
      },
      {
        icon: "/home-items/images/bedroom.png",
        iconTitle: translateEnc("bunglow_items.k1b3.bedroom"),
      },
      {
        icon: "/home-items/images/bathroom.png",
        iconTitle: translateEnc("bunglow_items.k1b3.bath_room"),
      },
      {
        icon: "/home-items/images/kitchen.png",
        iconTitle: translateEnc("bunglow_items.k1b3.kitchen"),
      },
    ],
    cataloge: "/master_image_project/ENC/cataloge/bunglow/k1b3.jpg",
    layout: "/master_image_project/ENC/projects/bugalow/back_k1b3.jpg",
  };
  const bungalow_k1b5 = {
    title: translatLocation("east_natural"),
    types: translateEnc("enc_tap.bungalow"),
    unit: "K1B5",
    images: [
      "/master_image_project/ENC/projects/bugalow/bungalow_k1b5_1.png",
      "/master_image_project/ENC/projects/bugalow/bungalow_k1b5_2.jpg",
      "/master_image_project/ENC/projects/bugalow/bungalow_k1b5_3.jpg",
    ],
    items: [
      {
        icon: "/home-items/images/land.png",
        iconTitle: translateEnc("bunglow_items.k1b5.land"),
      },
      {
        icon: "/home-items/images/house.png",
        iconTitle: translateEnc("bunglow_items.k1b5.size"),
      },
      {
        icon: "/home-items/images/bedroom.png",
        iconTitle: translateEnc("bunglow_items.k1b5.bedroom"),
      },
      {
        icon: "/home-items/images/bathroom.png",
        iconTitle: translateEnc("bunglow_items.k1b5.bath_room"),
      },
      {
        icon: "/home-items/images/kitchen.png",
        iconTitle: translateEnc("bunglow_items.k1b5.kitchen"),
      },
    ],
    cataloge: "/master_image_project/ENC/cataloge/bunglow/k1b5.jpg",
    layout: "",
  };
  const bungalow_k1b6 = {
    title: translatLocation("east_natural"),
    types: translateEnc("enc_tap.bungalow"),
    unit: "K1B6",
    images: [
      "/master_image_project/ENC/projects/bugalow/bungalow_k1b6_1.png",
      "/master_image_project/ENC/projects/bugalow/bungalow_k1b6_2.png",
    ],
    items: [
      {
        icon: "/home-items/images/land.png",
        iconTitle: translateEnc("bunglow_items.k1b6.land"),
      },
      {
        icon: "/home-items/images/house.png",
        iconTitle: translateEnc("bunglow_items.k1b6.size"),
      },
      {
        icon: "/home-items/images/bedroom.png",
        iconTitle: translateEnc("bunglow_items.k1b6.bedroom"),
      },
      {
        icon: "/home-items/images/bathroom.png",
        iconTitle: translateEnc("bunglow_items.k1b6.bath_room"),
      },
      {
        icon: "/home-items/images/kitchen.png",
        iconTitle: translateEnc("bunglow_items.k1b6.kitchen"),
      },
    ],
    cataloge: "/master_image_project/ENC/cataloge/bunglow/k1b6.jpg",
    layout: "",
  };
  const bungalow_k1v5 = {
    title: translatLocation("east_natural"),
    types: translateEnc("enc_tap.bungalow"),
    unit: "K1V5",
    images: [
      "/master_image_project/ENC/projects/bugalow/bungalow_k1v5_1.png",
      "/master_image_project/ENC/projects/bugalow/bungalow_k1v5_2.png",
      "/master_image_project/ENC/projects/bugalow/bungalow_k1v5_3.png",
    ],
    items: [
      {
        icon: "/home-items/images/land.png",
        iconTitle: translateEnc("bunglow_items.k1b5.land"),
      },
      {
        icon: "/home-items/images/house.png",
        iconTitle: translateEnc("bunglow_items.k1b5.size"),
      },
      {
        icon: "/home-items/images/bedroom.png",
        iconTitle: translateEnc("bunglow_items.k1b5.bedroom"),
      },
      {
        icon: "/home-items/images/bathroom.png",
        iconTitle: translateEnc("bunglow_items.k1b5.bath_room"),
      },
      {
        icon: "/home-items/images/kitchen.png",
        iconTitle: translateEnc("bunglow_items.k1b5.kitchen"),
      },
    ],
    cataloge: "/master_image_project/ENC/cataloge/bunglow/k1v5.jpg",
    layout: "",
  };
  // Hosue
  const house_k1s2 = {
    title: translatLocation("east_natural"),
    types: translateEnc("enc_tap.house"),
    unit: "K1S2",
    images: [
      "/master_image_project/ENC/projects/house/house_k1s2_1.png",
      "/master_image_project/ENC/projects/house/house_k1s2_2.png",
    ],
    items: [
      {
        icon: "/home-items/images/land.png",
        iconTitle: translateEnc("house_items.k1s2.land"),
      },
      {
        icon: "/home-items/images/house.png",
        iconTitle: translateEnc("house_items.k1s2.size"),
      },
      {
        icon: "/home-items/images/bedroom.png",
        iconTitle: translateEnc("house_items.k1s2.bedroom"),
      },
      {
        icon: "/home-items/images/livingroom.png",
        iconTitle: translateEnc("house_items.k1s2.living_rooms"),
      },
      {
        icon: "/home-items/images/bathroom.png",
        iconTitle: translateEnc("house_items.k1s2.bath_room"),
      },
      {
        icon: "/home-items/images/kitchen.png",
        iconTitle: translateEnc("house_items.k1s2.kitchen"),
      },
    ],
    cataloge: "/master_image_project/ENC/cataloge/house/k1s2.jpg",
    layout: "",
  };
  const house_k1v1 = {
    title: translatLocation("east_natural"),
    types: translateEnc("enc_tap.house"),
    unit: "K1V1",
    images: [
      "/master_image_project/ENC/projects/house/front_both.png",
      "/master_image_project/ENC/projects/house/house_k1v2_1.png",
      "/master_image_project/ENC/projects/house/house_k1v2_2.png",
    ],
    items: [
      {
        icon: "/home-items/images/land.png",
        iconTitle: translateEnc("house_items.k1v1.land"),
      },
      {
        icon: "/home-items/images/house.png",
        iconTitle: translateEnc("house_items.k1v1.size"),
      },
      {
        icon: "/home-items/images/bedroom.png",
        iconTitle: translateEnc("house_items.k1v1.bedroom"),
      },
      {
        icon: "/home-items/images/livingroom.png",
        iconTitle: translateEnc("house_items.k1v1.living_rooms"),
      },
      {
        icon: "/home-items/images/bathroom.png",
        iconTitle: translateEnc("house_items.k1v1.bath_room"),
      },
      {
        icon: "/home-items/images/kitchen.png",
        iconTitle: translateEnc("house_items.k1v1.kitchen"),
      },
    ],
    cataloge: "/master_image_project/ENC/cataloge/house/k1v1.jpg",
    layout: "",
  };
  const house_k1v2 = {
    title: translatLocation("east_natural"),
    types: translateEnc("enc_tap.house"),
    unit: "K1V2",
    images: [
      "/master_image_project/ENC/projects/house/front_both.png",
      "/master_image_project/ENC/projects/house/house_k1v2_1.png",
      "/master_image_project/ENC/projects/house/house_k1v2_2.png",
    ],
    items: [
      {
        icon: "/home-items/images/land.png",
        iconTitle: translateEnc("house_items.k1v2.land"),
      },
      {
        icon: "/home-items/images/house.png",
        iconTitle: translateEnc("house_items.k1v2.size"),
      },
      {
        icon: "/home-items/images/bedroom.png",
        iconTitle: translateEnc("house_items.k1v2.bedroom"),
      },
      {
        icon: "/home-items/images/livingroom.png",
        iconTitle: translateEnc("house_items.k1v2.living_rooms"),
      },
      {
        icon: "/home-items/images/bathroom.png",
        iconTitle: translateEnc("house_items.k1v2.bath_room"),
      },
      {
        icon: "/home-items/images/kitchen.png",
        iconTitle: translateEnc("house_items.k1v2.kitchen"),
      },
    ],
    cataloge: "/master_image_project/ENC/cataloge/house/k1v2.jpg",
    layout: "",
  };
  // Villa
  const villa_k1v4 = {
    title: translatLocation("east_natural"),
    types: translateEnc("enc_tap.villa"),
    unit: "K1V4",
    images: [
      "/master_image_project/ENC/projects/villa/villa_k1v4_1.png",
      "/master_image_project/ENC/projects/villa/villa_k1v4_1.png",
      "/master_image_project/ENC/projects/villa/back_k1v4.png",
    ],
    items: [
      {
        icon: "/home-items/images/land.png",
        iconTitle: translateEnc("villa_items.k1v4.land"),
      },
      {
        icon: "/home-items/images/house.png",
        iconTitle: translateEnc("villa_items.k1v4.size"),
      },
      {
        icon: "/home-items/images/bedroom.png",
        iconTitle: translateEnc("villa_items.k1v4.bedroom"),
      },
      {
        icon: "/home-items/images/livingroom.png",
        iconTitle: translateEnc("villa_items.k1v4.living_rooms"),
      },
      {
        icon: "/home-items/images/bathroom.png",
        iconTitle: translateEnc("villa_items.k1v4.bath_room"),
      },
      {
        icon: "/home-items/images/kitchen.png",
        iconTitle: translateEnc("villa_items.k1v4.kitchen"),
      },
    ],
    cataloge: "/master_image_project/ENC/cataloge/villa/k1v4.jpg",
    layout: "/master_image_project/ENC/projects/villa/back_k1v4.png",
  };
  // Land
  const land_k1l1 = {
    title: translatLocation("east_natural"),
    types: translateEnc("enc_tap.land"),
    unit: "K1L1",
    images: [
      "/master_image_project/ENC/projects/land/land_1.jpg",
      "/master_image_project/ENC/projects/land/land_2.jpg",
      "/master_image_project/ENC/projects/land/land.jpg",
    ],
    items: [
      {
        icon: "/home-items/images/land.png",
        iconTitle: translateEnc("land_items.k1l1.land"),
      },
    ],
    cataloge: "/master_image_project/ENC/cataloge/land/k1l1.jpg",
    layout: "",
  };
  const land_k1l2 = {
    title: translatLocation("east_natural"),
    types: translateEnc("enc_tap.land"),
    unit: "K1L2",
    images: [
      "/master_image_project/ENC/projects/land/land_1.jpg",
      "/master_image_project/ENC/projects/land/land_2.jpg",
      "/master_image_project/ENC/projects/land/land.jpg",
    ],
    items: [
      {
        icon: "/home-items/images/land.png",
        iconTitle: translateEnc("land_items.k1l2.land"),
      },
    ],
    cataloge: "/master_image_project/ENC/cataloge/land/k1l2.jpg",
    layout: "",
  };
  const imageProjects = [
    "/master_image_project/ENC/bg1.png",
    "/master_image_project/ENC/bg3.png",
  ];
  return (
    <main className={`w-full`}>
      {/* Background Image */}
      {/* <section className="w-full h-[72vh]">
        <ImageNextUI
          src="/master_image_project/ENC/projects/house/front_both.png"
          className="w-[100vw] h-[72vh]  rounded-none object-cover"
        />
      </section> */}
      <CarouselByProject images={imageProjects}/>
      <h1 className={`text-logo ${langHeader} px-4 lg:px-[10%] mt-12`}>
        {translatProperties("property")}
      </h1>
      {/* Bungalow */}
      <div className="divider divider-start mt-8 divider-success px-4 lg:px-[10%]">
        <h3 className={`text-logo ${langHeader}`}>
          {translateEnc("enc_tap.bungalow")}
        </h3>
      </div>
      <div
        className={`px-4 lg:px-[10%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 flex-wrap mt-8`}
      >
        <PropertiesDynamic {...bungalow_k1b1} />
        <PropertiesDynamic {...bungalow_k1b2} />
        <PropertiesDynamic {...bungalow_k1b3} />
        <PropertiesDynamic {...bungalow_k1b5} />
        <PropertiesDynamic {...bungalow_k1b6} />
        <PropertiesDynamic {...bungalow_k1v5} />
      </div>
      {/* House */}
      <div className="divider divider-start mt-8 divider-success px-4 lg:px-[10%]">
        <h3 className={`text-logo ${langHeader}`}>
          {translateEnc("enc_tap.house")}
        </h3>
      </div>
      <div
        className={`px-4 lg:px-[10%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 flex-wrap mt-8`}
      >
        <PropertiesDynamic {...house_k1s2} />
        <PropertiesDynamic {...house_k1v1} />
        <PropertiesDynamic {...house_k1v2} />
      </div>
      {/* Villa */}
      <div className="divider divider-start mt-8 divider-success px-4 lg:px-[10%]">
        <h3 className={`text-logo ${langHeader}`}>
          {translateEnc("enc_tap.villa")}
        </h3>
      </div>
      <div
        className={`px-4 lg:px-[10%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 flex-wrap mt-8`}
      >
        <PropertiesDynamic {...villa_k1v4} />
      </div>
      {/* Land */}
      <div className="divider divider-start mt-8 divider-success px-4 lg:px-[10%]">
        <h3 className={`text-logo ${langHeader}`}>
          {translateEnc("enc_tap.land")}
        </h3>
      </div>
      <div
        className={`px-4 lg:px-[10%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 flex-wrap mt-8`}
      >
        <PropertiesDynamic {...land_k1l1} />
        <PropertiesDynamic {...land_k1l2} />
      </div>
      {/* feature & nearby*/}
      <FeatureNearby
        lat={10.624357379296478}
        lng={103.94168426772683}
        locationTitle={translatLocation("east_natural")}
        imageMap={"/map/images/enc.jpg"}
        urlLiveLocation={url}
      />
    </main>
  );
};
export default EastNaturalCityPage;
