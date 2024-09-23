'use client'
import React from 'react'
import LocationMap from '@/components/component-build/location-map/LocationMap';
import { useTranslations } from 'next-intl';
import { battambongParagraph, interParagraph, koulenHeader, vigaHeader } from "@/app/[locale]/(user)/fonts";
import { Tab, Tabs } from '@nextui-org/react';
import FetureDynamic from '@/components/component-build/feature/FetureDynamic';
import AroundPlan from '@/components/component-build/feature/AroundPlan';
import { useParams } from 'next/navigation';
import { NearbyDefinitions } from '@/lib/definitions';
import EscBungalow from '@/components/esc/taps/EscBungalow';
import EscFlat from '@/components/esc/taps/EscFlat';
import EscLand from '@/components/esc/taps/EscLand';
import EscVilla from '@/components/esc/taps/EscVilla';
import FeatureNearby from '@/components/component-build/mixFeatureNearby/FeatureNearby';
import ImageNextUI from '@/components/component-build/image-next-ui/ImageNextUI';
import PropertiesDynamic from '@/components/component-build/properties/PropertiesDynamic';
import CarouselByProject from '@/components/component-build/CarouselSlide/CarouselByProject';

type FeatureType = {
  image?: string | undefined,
  des?: string | undefined
}

const EastSenSokCondominium = () => {
  const translateESC = useTranslations("project_plans");
  const translatLocation = useTranslations("project_plans");
  const translatProperties = useTranslations("properties");
  const translateNearby = useTranslations("nearby")
  const translateESPTap = useTranslations("esp");
  const translatorFeature = useTranslations("features");
  const translateESS= useTranslations("ess");
  const param = useParams();
  const locale = param.locale;
  const langHeader =
    locale === "kh" ? koulenHeader.className : vigaHeader.className;
  const langParagraph =
    locale === "kh" ? battambongParagraph.className : interParagraph.className;

    const url = "https://www.google.com/maps/place/East+Sen+Sok+Condominium/@11.5880949,104.8727974,3a,75y,219.94h,125.61t/data=!3m9!1e1!3m7!1svN_evOUT16TTtJhlAHAh9g!2e0!7i13312!8i6656!9m2!1b1!2i38!4m7!3m6!1s0x31095169e1b72d4f:0xbf34b3d2bae67638!8m2!3d11.5752186!4d104.8654239!10e5!16s%2Fg%2F11hdjgdmyr?entry=ttu&g_ep=EgoyMDI0MDkxMC4wIKXMDSoASAFQAw%3D%3D";
      // Water | Road ...
  const features: FeatureType[] = [
    {
      image: "/feature/images/swimming.png",
      des: translatorFeature("swiming")
    },
    {
      image: "/feature/images/garden.png",
      des: translatorFeature("garden")
    },
    {
      image: "/feature/images/អនាម័យ4.png",
      des: translatorFeature("clean")
    },
    {
      image: "/feature/images/gym.png",
      des: translatorFeature("gym")
    },
    {
      image: "/feature/images/skybar.png",
      des: translatorFeature("skybar")
    },
    {
      image: "/feature/images/សន្តិសុខ3.png",
      des: translatorFeature("secur")
    },
  ]
    // market | school | hospital | Bank
    const nearbyPotential: NearbyDefinitions[] = [
      {
        src: "/featureAround/images/market150.png",
        alt: "Market",
        des: translateNearby("market"),
      },
      {
        src: "/featureAround/images/school150.png",
        alt: "School",
        des: translateNearby("uni"),
      },
      {
        src: "/featureAround/images/hospital150.png",
        alt: "Hospitals",
        des: translateNearby("hospital"),
      },
      {
        src: "/featureAround/images/bank150.png",
        alt: "Bank",
        des: translateNearby("bank"),
      },
    ]
    const condo_1bed = {
      title: translatLocation("east_sensok"),
      types: translateESPTap("esp_tap.condo"),
      unit: "1BedRoom",
      images: [
        "/master_image_project/ESS/projects/front_ess.png",
        "/master_image_project/ESS/projects/1bedroom_1.jpg",
        "/master_image_project/ESS/projects/1bedroom_2.jpg",
      ],
      items: [
        {
          icon: "/home-items/images/land.png",
          iconTitle: translateESS("1bed.size"),
        },
        {
          icon: "/home-items/images/bedroom.png",
          iconTitle: translateESS("1bed.bedroom"),
        },
        {
          icon: "/home-items/images/livingroom.png",
          iconTitle: translateESS("1bed.living_rooms"),
        },
        {
          icon: "/home-items/images/bathroom.png",
          iconTitle: translateESS("1bed.bath_room"),
        },
        {
          icon: "/home-items/images/kitchen.png",
          iconTitle: translateESS("1bed.kitchen"),
        },
      ],
      cataloge: "/master_image_project/ESS/cataloge/1bedroom.jpg",
      layout: "",
    };
    const condo_2bed = {
      title: translatLocation("east_sensok"),
      types: translateESPTap("esp_tap.condo"),
      unit: "2BedRoom",
      images: [
        "/master_image_project/ESS/projects/front_ess.png",
        "/master_image_project/ESS/projects/2bedroom_1.jpg",
        "/master_image_project/ESS/projects/2bedroom_2.jpg",
      ],
      items: [
        {
          icon: "/home-items/images/land.png",
          iconTitle: translateESS("2bed.size"),
        },
        {
          icon: "/home-items/images/bedroom.png",
          iconTitle: translateESS("2bed.bedroom"),
        },
        {
          icon: "/home-items/images/livingroom.png",
          iconTitle: translateESS("2bed.living_rooms"),
        },
        {
          icon: "/home-items/images/bathroom.png",
          iconTitle: translateESS("2bed.bath_room"),
        },
        {
          icon: "/home-items/images/kitchen.png",
          iconTitle: translateESS("2bed.kitchen"),
        },
      ],
      cataloge: "/master_image_project/ESS/cataloge/2bedroom.jpg",
      layout: "",
    };
    const std = {
      title: translatLocation("east_sensok"),
      types: translateESPTap("esp_tap.std"),
      unit: "Studio",
      images: [
        "/master_image_project/ESS/projects/front_ess.png",
        "/master_image_project/ESS/projects/std_1.jpg",
        "/master_image_project/ESS/projects/std_2.jpg",
      ],
      items: [
        {
          icon: "/home-items/images/land.png",
          iconTitle: translateESS("std.size"),
        },
        {
          icon: "/home-items/images/bedroom.png",
          iconTitle: translateESS("std.bedroom"),
        },
        {
          icon: "/home-items/images/livingroom.png",
          iconTitle: translateESS("std.living_rooms"),
        },
        {
          icon: "/home-items/images/bathroom.png",
          iconTitle: translateESS("std.bath_room"),
        },
        {
          icon: "/home-items/images/kitchen.png",
          iconTitle: translateESS("std.kitchen"),
        },
      ],
      cataloge: "/master_image_project/ESS/cataloge/std.jpg",
      layout: "",
    };
    const imageProjects = [
      "/master_image_project/ESS/bg1.jpg",
      "/master_image_project/ESS/bg2.png",

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
           
     {/* 1 Bedroom */}
     <div className="divider divider-start mt-8 divider-success px-4 lg:px-[10%]">
        <h3 className={`text-logo ${langHeader}`}>
          {translateESS("ess_tap.1bed")}
        </h3>
      </div>
      <div
        className={`px-4 lg:px-[10%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 flex-wrap mt-8`}
      >
        <PropertiesDynamic {...condo_1bed} />
      </div>
      {/* 2 Bedroom */}
     <div className="divider divider-start mt-8 divider-success px-4 lg:px-[10%]">
        <h3 className={`text-logo ${langHeader}`}>
          {translateESS("ess_tap.2bed")}
        </h3>
      </div>
      <div
        className={`px-4 lg:px-[10%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 flex-wrap mt-8`}
      >
        <PropertiesDynamic {...condo_2bed} />
      </div>
       {/* Studio */}
     <div className="divider divider-start mt-8 divider-success px-4 lg:px-[10%]">
        <h3 className={`text-logo ${langHeader}`}>
          {translateESS("ess_tap.std")}
        </h3>
      </div>
      <div
        className={`px-4 lg:px-[10%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 flex-wrap mt-8`}
      >
        <PropertiesDynamic {...std} />
      </div>
      {/* feature & nearby*/}
      <FeatureNearby
        lat={11.575250120479478}
        lng={104.86543462525059}
        locationTitle={translatLocation("east_sensok_location")}
        imageMap={"/map/images/ess.jpg"}
        urlLiveLocation={url}
      />
    </main>
  )
}

export default EastSenSokCondominium