'use client'
import { useTranslations } from 'next-intl';
import React from 'react'
import { battambongParagraph, interParagraph, koulenHeader, vigaHeader } from "@/app/[locale]/(user)/fonts";
import { useParams } from 'next/navigation';
import FeatureNearby from '@/components/component-build/mixFeatureNearby/FeatureNearby';
import ImageNextUI from '@/components/component-build/image-next-ui/ImageNextUI';
import PropertiesDynamic from '@/components/component-build/properties/PropertiesDynamic';
import CarouselByProject from '@/components/component-build/CarouselSlide/CarouselByProject';

type FeatureType = {
  image?: string | undefined,
  des?: string | undefined
}

const EastSihaknoukParkPage = () => {
  const translatLocation = useTranslations("project_plans");
  const translatProperties = useTranslations("properties");
  const translateESPTap = useTranslations("esp");
  const param = useParams();
  const locale = param.locale;
  const langHeader =
    locale === "kh" ? koulenHeader.className : vigaHeader.className;
  const langParagraph =
    locale === "kh" ? battambongParagraph.className : interParagraph.className;
  const url = "https://www.google.com/maps/@10.7041087,103.5453385,3a,75y,74.37h,93.77t/data=!3m9!1e1!3m7!1snZKbRyz8TxgE63QL08dgwA!2e0!7i13312!8i6656!9m2!1b1!2i38?entry=ttu&g_ep=EgoyMDI0MDkxMC4wIKXMDSoASAFQAw%3D%3D";
    const condo_2bd_kp = {
      title: translatLocation("east_sihanoukpark"),
      types: translateESPTap("esp_tap.condo"),
      unit: "2BedRoom KP",
      images: [
        "/master_image_project/ESP/projects/front.jpg",
        "/master_image_project/ESP/projects/2bedroomkp_1.jpg",
        "/master_image_project/ESP/projects/2bedroomkp_2.jpg",
      ],
      items: [
        {
          icon: "/home-items/images/land.png",
          iconTitle: translateESPTap("condo_items.2br_kp.land"),
        },
        {
          icon: "/home-items/images/bedroom.png",
          iconTitle: translateESPTap("condo_items.2br_kp.bedroom"),
        },
        {
          icon: "/home-items/images/livingroom.png",
          iconTitle: translateESPTap("condo_items.2br_kp.living_rooms"),
        },
        {
          icon: "/home-items/images/bathroom.png",
          iconTitle: translateESPTap("condo_items.2br_kp.bath_room"),
        },
        {
          icon: "/home-items/images/kitchen.png",
          iconTitle: translateESPTap("condo_items.2br_kp.kitchen"),
        },
      ],
      cataloge: "/master_image_project/ESP/cataloge/condo/2bedroomkp.jpg",
      layout: "",
    };
    const condo_2bd_kr = {
      title: translatLocation("east_sihanoukpark"),
      types: translateESPTap("esp_tap.condo"),
      unit: "2BedRoom KR",
      images: [
        "/master_image_project/ESP/projects/front.jpg",
        "/master_image_project/ESP/projects/2bedroomkr_1.jpg",
        "/master_image_project/ESP/projects/2bedroomkr_2.jpg",
      ],
      items: [
        {
          icon: "/home-items/images/land.png",
          iconTitle: translateESPTap("condo_items.2br_kr.land"),
        },
        {
          icon: "/home-items/images/bedroom.png",
          iconTitle: translateESPTap("condo_items.2br_kr.bedroom"),
        },
        {
          icon: "/home-items/images/livingroom.png",
          iconTitle: translateESPTap("condo_items.2br_kr.living_rooms"),
        },
        {
          icon: "/home-items/images/bathroom.png",
          iconTitle: translateESPTap("condo_items.2br_kr.bath_room"),
        },
        {
          icon: "/home-items/images/kitchen.png",
          iconTitle: translateESPTap("condo_items.2br_kr.kitchen"),
        },
      ],
      cataloge: "/master_image_project/ESP/cataloge/condo/2bedroomkr.jpg",
      layout: "",
    };
    const std__kp = {
      title: translatLocation("east_sihanoukpark"),
      types: translateESPTap("esp_tap.condo"),
      unit: "Studio KP",
      images: [
        "/master_image_project/ESP/projects/front.jpg",
        "/master_image_project/ESP/projects/stdkp_1.jpg",
        "/master_image_project/ESP/projects/stdkp_2.PNG",
      ],
      items: [
        {
          icon: "/home-items/images/land.png",
          iconTitle: translateESPTap("condo_items.std_kp.land"),
        },
        {
          icon: "/home-items/images/bedroom.png",
          iconTitle: translateESPTap("condo_items.std_kp.bedroom"),
        },
        {
          icon: "/home-items/images/livingroom.png",
          iconTitle: translateESPTap("condo_items.std_kp.living_rooms"),
        },
        {
          icon: "/home-items/images/bathroom.png",
          iconTitle: translateESPTap("condo_items.std_kp.bath_room"),
        },
        {
          icon: "/home-items/images/kitchen.png",
          iconTitle: translateESPTap("condo_items.std_kp.kitchen"),
        },
      ],
      cataloge: "/master_image_project/ESP/cataloge/condo/stdkp.jpg",
      layout: "",
    };
    const std__kr = {
      title: translatLocation("east_sihanoukpark"),
      types: translateESPTap("esp_tap.condo"),
      unit: "Studio KR",
      images: [
        "/master_image_project/ESP/projects/front.jpg",
        "/master_image_project/ESP/projects/stdkr_1.jpg",
        "/master_image_project/ESP/projects/stdkr_2.PNG",
      ],
      items: [
        {
          icon: "/home-items/images/land.png",
          iconTitle: translateESPTap("condo_items.std_kr.land"),
        },
        {
          icon: "/home-items/images/bedroom.png",
          iconTitle: translateESPTap("condo_items.std_kr.bedroom"),
        },
        {
          icon: "/home-items/images/livingroom.png",
          iconTitle: translateESPTap("condo_items.std_kr.living_rooms"),
        },
        {
          icon: "/home-items/images/bathroom.png",
          iconTitle: translateESPTap("condo_items.std_kr.bath_room"),
        },
        {
          icon: "/home-items/images/kitchen.png",
          iconTitle: translateESPTap("condo_items.std_kr.kitchen"),
        },
      ],
      cataloge: "/master_image_project/ESP/cataloge/condo/stdkr.jpg",
      layout: "",
    };
    const shop = {
      title: translatLocation("east_sihanoukpark"),
      types: translateESPTap("esp_tap.condo"),
      unit: "Shop House",
      images: [
        "/master_image_project/ESP/projects/front.jpg",
        "/master_image_project/ESP/projects/shophouse_1.jpg",
        "/master_image_project/ESP/projects/shophouse_2.jpg",
      ],
      items: [
        {
          icon: "/home-items/images/land.png",
          iconTitle: translateESPTap("condo_items.std_kr.land"),
        },
        {
          icon: "/home-items/images/bedroom.png",
          iconTitle: translateESPTap("condo_items.std_kr.bedroom"),
        },
        {
          icon: "/home-items/images/livingroom.png",
          iconTitle: translateESPTap("condo_items.std_kr.living_rooms"),
        },
        {
          icon: "/home-items/images/bathroom.png",
          iconTitle: translateESPTap("condo_items.std_kr.bath_room"),
        },
        {
          icon: "/home-items/images/kitchen.png",
          iconTitle: translateESPTap("condo_items.std_kr.kitchen"),
        },
      ],
      cataloge: "/master_image_project/ESP/cataloge/shop/shophouse.jpg",
      layout: "",
    };
    const imageProjects = [
      "/master_image_project/ESP/bg1.jpg",
      "/master_image_project/ESP/bg2.jpg",

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
      {/* Condo */}
      <div className="divider divider-start mt-8 divider-success px-4 lg:px-[10%]">
        <h3 className={`text-logo ${langHeader}`}>
          {translateESPTap("esp_tap.condo")}
        </h3>
      </div>
      <div
        className={`px-4 lg:px-[10%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 flex-wrap mt-8`}
      >
        <PropertiesDynamic {...condo_2bd_kp} />
        <PropertiesDynamic {...condo_2bd_kr} />
        <PropertiesDynamic {...std__kp} />
        <PropertiesDynamic {...std__kr} />
      </div>
       {/* Condo */}
       <div className="divider divider-start mt-8 divider-success px-4 lg:px-[10%]">
        <h3 className={`text-logo ${langHeader}`}>
          {translateESPTap("esp_tap.shop_house")}
        </h3>
      </div>
      <div
        className={`px-4 lg:px-[10%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 flex-wrap mt-8`}
      >
        <PropertiesDynamic {...shop} />
       
      </div>
      {/* feature & nearby*/}
      <FeatureNearby
        lat={10.70720997442294}
        lng={103.54901933413248}
        locationTitle={translatLocation("east_sihanoukpark_location")}
        imageMap={"/map/images/esp.jpg"}
        urlLiveLocation={url}
      />
    </main>
  )
}

export default EastSihaknoukParkPage