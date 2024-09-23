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

type FeatureType = {
  image?: string | undefined;
  des?: string | undefined;
};

const EastkeansvayCityPage = () => {
  const translatekeansvayCityAds = useTranslations("project_plans");
  const translatLocation = useTranslations("project_plans");
  const translatProperties = useTranslations("properties");
  const translateNearby = useTranslations("nearby");
  const translatorFeature = useTranslations("features");
  const translateEkc = useTranslations("ekc");
  const param = useParams();
  const locale = param.locale;
  const langHeader =
    locale === "kh" ? koulenHeader.className : vigaHeader.className;
  const langParagraph =
    locale === "kh" ? battambongParagraph.className : interParagraph.className;
  const url =
    "https://www.google.com/maps/@11.513833,105.059403,3a,75y,11.86h,94.03t/data=!3m6!1e1!3m4!1sj-jA74E48zg-sg5BEqD0dg!2e0!7i13312!8i6656?entry=ttu&g_ep=EgoyMDI0MDkwOS4wIKXMDSoASAFQAw%3D%3D";

  // Villa
  const villa_ksv3 = {
    title: translatLocation("east_keansvay"),
    types: translateEkc("ekc_tap.villa"),
    unit: "KSV3",
    images: [
      "/master_image_project/EKC/projects/villa/front.jpg",
      "/master_image_project/EKC/projects/villa/new.jpg",
      "/master_image_project/EKC/projects/villa/villa_ksv3_1.jpg",
      "/master_image_project/EKC/projects/villa/back_ksv3.jpg",
    ],
    items: [
      {
        icon: "/home-items/images/land.png",
        iconTitle: translateEkc("villa_items.ksv3.land"),
      },
      {
        icon: "/home-items/images/house.png",
        iconTitle: translateEkc("villa_items.ksv3.size"),
      },
      {
        icon: "/home-items/images/bedroom.png",
        iconTitle: translateEkc("villa_items.ksv3.bedroom"),
      },
      {
        icon: "/home-items/images/livingroom.png",
        iconTitle: translateEkc("villa_items.ksv3.living_rooms"),
      },
      {
        icon: "/home-items/images/bathroom.png",
        iconTitle: translateEkc("villa_items.ksv3.bath_room"),
      },
      {
        icon: "/home-items/images/kitchen.png",
        iconTitle: translateEkc("villa_items.ksv3.kitchen"),
      },
    ],
    cataloge:
      "/master_image_project/EKC/cataloge/villa/cataloge_villa_ksv3.jpg",
    layout: "/master_image_project/EKC/projects/villa/back_ksv3.jpg",
  };
  // Flat
  const flat_ksf1 = {
    title: translatLocation("east_keansvay"),
    types: translateEkc("ekc_tap.flat"),
    unit: "KSF1",
    images: [
      "/master_image_project/EKC/projects/flat/front_ksf1.jpg",
      "/master_image_project/EKC/projects/flat/flat_ksf1_1.jpg",
      "/master_image_project/EKC/projects/flat/flat_ksf1_2.jpg",
      "/master_image_project/EKC/projects/flat/back_ksf1.jpg",
    ],
    items: [
      {
        icon: "/home-items/images/land.png",
        iconTitle: translateEkc("flat_items.ksf1.land"),
      },
      {
        icon: "/home-items/images/house.png",
        iconTitle: translateEkc("flat_items.ksf1.size"),
      },
      {
        icon: "/home-items/images/bedroom.png",
        iconTitle: translateEkc("flat_items.ksf1.bedroom"),
      },
      {
        icon: "/home-items/images/livingroom.png",
        iconTitle: translateEkc("flat_items.ksf1.living_rooms"),
      },
      {
        icon: "/home-items/images/bathroom.png",
        iconTitle: translateEkc("flat_items.ksf1.bath_room"),
      },
      {
        icon: "/home-items/images/kitchen.png",
        iconTitle: translateEkc("flat_items.ksf1.kitchen"),
      },
    ],
    cataloge: "/master_image_project/EKC/cataloge/flat/cataloge_flat_ksf1.jpg",
    layout: "/master_image_project/EKC/projects/flat/back_ksf1.jpg",
  };
  const flat_kss1 = {
    title: translatLocation("east_keansvay"),
    types: translateEkc("ekc_tap.flat"),
    unit: "KSS1",
    images: [
      "/master_image_project/EKC/projects/flat/front_kss1.jpg",
      "/master_image_project/EKC/projects/flat/flat_kss1_1.png",
      "/master_image_project/EKC/projects/flat/flat_kss1_2.jpg",
    ],
    items: [
      {
        icon: "/home-items/images/land.png",
        iconTitle: translateEkc("flat_items.ksf2.land"),
      },
      {
        icon: "/home-items/images/house.png",
        iconTitle: translateEkc("flat_items.ksf2.size"),
      },
      {
        icon: "/home-items/images/bedroom.png",
        iconTitle: translateEkc("flat_items.ksf2.bedroom"),
      },
      {
        icon: "/home-items/images/livingroom.png",
        iconTitle: translateEkc("flat_items.ksf2.living_rooms"),
      },
      {
        icon: "/home-items/images/bathroom.png",
        iconTitle: translateEkc("flat_items.ksf2.bath_room"),
      },
      {
        icon: "/home-items/images/kitchen.png",
        iconTitle: translateEkc("flat_items.ksf2.kitchen"),
      },
    ],
    cataloge: "/master_image_project/EKC/cataloge/flat/cataloge_flat_kss1.jpg",
    layout: "",
  };
  const flat_ksv1 = {
    title: translatLocation("east_keansvay"),
    types: translateEkc("ekc_tap.flat"),
    unit: "KSV1",
    images: [
      "/master_image_project/EKC/projects/flat/front_ksv1.jpg",
      "/master_image_project/EKC/projects/flat/flat_ksv1_1.jpg",
      "/master_image_project/EKC/projects/flat/back_ksv1.jpg",
    ],
    items: [
      {
        icon: "/home-items/images/land.png",
        iconTitle: translateEkc("flat_items.ksv1.land"),
      },
      {
        icon: "/home-items/images/house.png",
        iconTitle: translateEkc("flat_items.ksv1.size"),
      },
      {
        icon: "/home-items/images/bedroom.png",
        iconTitle: translateEkc("flat_items.ksv1.bedroom"),
      },
      {
        icon: "/home-items/images/livingroom.png",
        iconTitle: translateEkc("flat_items.ksv1.living_rooms"),
      },
      {
        icon: "/home-items/images/bathroom.png",
        iconTitle: translateEkc("flat_items.ksv1.bath_room"),
      },
      {
        icon: "/home-items/images/kitchen.png",
        iconTitle: translateEkc("flat_items.ksv1.kitchen"),
      },
    ],
    cataloge: "/master_image_project/EKC/cataloge/flat/cataloge_flat_ksv1.jpg",
    layout: "/master_image_project/EKC/projects/flat/back_ksv1.jpg",
  };
  // Land
  const land_ksl1 = {
    title: translatLocation("east_keansvay"),
    types: translateEkc("ekc_tap.land"),
    unit: "KSL1",
    images: [
      "/master_image_project/EKC/projects/land/land_1.jpg",
      "/master_image_project/EKC/projects/land/land_2.jpg",
      "/master_image_project/EKC/projects/land/land_3.jpg",
    ],
    items: [
      {
        icon: "/home-items/images/land.png",
        iconTitle: translateEkc("land_items.ksl1.land"),
      },
    ],
    cataloge: "/master_image_project/EKC/cataloge/land/cataloge_land_ksl1.jpg",
    layout: "",
  };
  const land_ksl3 = {
    title: translatLocation("east_keansvay"),
    types: translateEkc("ekc_tap.land"),
    unit: "KSL3",
    images: [
      "/master_image_project/EKC/projects/land/land_1.jpg",
      "/master_image_project/EKC/projects/land/land_2.jpg",
      "/master_image_project/EKC/projects/land/land_3.jpg",
    ],
    items: [
      {
        icon: "/home-items/images/land.png",
        iconTitle: translateEkc("land_items.ksl3.land"),
      },
    ],
    cataloge: "/master_image_project/EKC/cataloge/land/cataloge_land_ksl3.jpg",
    layout: "",
  };
  const land_villa = {
    title: translatLocation("east_keansvay"),
    types: translateEkc("ekc_tap.land"),
    unit: "Villa",
    images: [
      "/master_image_project/EKC/projects/land/land_1.jpg",
      "/master_image_project/EKC/projects/land/land_2.jpg",
      "/master_image_project/EKC/projects/land/land_3.jpg",
    ],
    items: [
      {
        icon: "/home-items/images/land.png",
        iconTitle: translateEkc("land_items.villa.land"),
      },
    ],
    cataloge: "/master_image_project/EKC/cataloge/land/cataloge_land_villa.jpg",
    layout: "",
  };
  const land_land = {
    title: translatLocation("east_keansvay"),
    types: translateEkc("ekc_tap.land"),
    unit: "Flat",
    images: [
      "/master_image_project/EKC/projects/land/land_1.jpg",
      "/master_image_project/EKC/projects/land/land_2.jpg",
      "/master_image_project/EKC/projects/land/land_3.jpg",
    ],
    items: [
      {
        icon: "/home-items/images/land.png",
        iconTitle: translateEkc("land_items.flat.land"),
      },
    ],
    cataloge: "/master_image_project/EKC/cataloge/land/cataloge_land.jpg",
    layout: "",
  };
  const imageProjects = [
    "/master_image_project/EKC/bg1.jpg",
    "/master_image_project/EKC/bg2.jpg",
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
      
      {/* Villa */}
      <div className="divider divider-start mt-8 divider-success px-4 lg:px-[10%]">
        <h3 className={`text-logo ${langHeader}`}>
          {translateEkc("ekc_tap.villa")}
        </h3>
      </div>
      <div
        className={`px-4 lg:px-[10%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 flex-wrap mt-8`}
      >
        <PropertiesDynamic {...villa_ksv3} />
      </div>
      {/* Flat */}
      <div className="divider divider-start mt-8 divider-success px-4 lg:px-[10%]">
        <h3 className={`text-logo ${langHeader}`}>
          {translateEkc("ekc_tap.flat")}
        </h3>
      </div>
      <div
        className={`px-4 lg:px-[10%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 flex-wrap mt-8`}
      >
        <PropertiesDynamic {...flat_ksf1} />
        <PropertiesDynamic {...flat_kss1} />
        <PropertiesDynamic {...flat_ksv1} />
      </div>
      {/* Flat */}
      <div className="divider divider-start mt-8 divider-success px-4 lg:px-[10%]">
        <h3 className={`text-logo ${langHeader}`}>
          {translateEkc("ekc_tap.land")}
        </h3>
      </div>
      <div
        className={`px-4 lg:px-[10%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 flex-wrap mt-8`}
      >
        <PropertiesDynamic {...land_ksl1} />
        <PropertiesDynamic {...land_ksl3} />
        <PropertiesDynamic {...land_villa} />
        <PropertiesDynamic {...land_land} />
      </div>

      {/* feature & nearby*/}
      <FeatureNearby
        lat={11.519761973987816}
        lng={105.05982992166057}
        locationTitle={translatLocation("east_keansvay_location")}
        imageMap={"/map/images/ekc.jpg"}
        urlLiveLocation={url}
      />
    </main>
  );
};

export default EastkeansvayCityPage;
