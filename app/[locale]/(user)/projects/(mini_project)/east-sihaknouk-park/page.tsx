'use client'
import LocationMap from '@/components/component-build/location-map/LocationMap';
import { useTranslations } from 'next-intl';
import React from 'react'
import { battambongParagraph, interParagraph, koulenHeader, vigaHeader } from "@/app/[locale]/(user)/fonts";
import { Tab, Tabs } from '@nextui-org/react';
import FetureDynamic from '@/components/component-build/feature/FetureDynamic';
import AroundPlan from '@/components/component-build/feature/AroundPlan';
import { useParams } from 'next/navigation';
import Emc1Bedroom from '@/components/emc2/tap/Emc1Bedroom';
import Emc2Bedroom from '@/components/emc2/tap/Emc2Bedroom';
import { NearbyDefinitions } from '@/lib/definitions';
import EscBungalow from '@/components/esc/taps/EscBungalow';
import EscFlat from '@/components/esc/taps/EscFlat';
import EscLand from '@/components/esc/taps/EscLand';
import EscVilla from '@/components/esc/taps/EscVilla';
import EspCondo from '@/components/esp/taps/EspCondo';
import EspShopHouse from '@/components/esp/taps/EspShopHouse';

type FeatureType = {
  image?: string | undefined,
  des?: string | undefined
}

const EastSihaknoukParkPage = () => {
  const translateSihaknoukPark = useTranslations("project_plans");
  const translatProperties = useTranslations("properties");
  const translateNearby = useTranslations("nearby")
  const translatorFeature = useTranslations("features");
  const translateESPTap = useTranslations("esp");
  const param = useParams();
  const locale = param.locale;
  const langHeader =
    locale === "kh" ? koulenHeader.className : vigaHeader.className;
  const langParagraph =
    locale === "kh" ? battambongParagraph.className : interParagraph.className;

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
  return (
    <main className={`w-[74%] mt-32 m-auto`}>
      {/* <BannerProject /> */}
      <div className="m-auto w-[100%]  mt-16">
        <h1 className={`text-logo ${langHeader}`}>
          {translatProperties("property")}
        </h1>
      </div>
      <div className="m-auto w-[100%] py-2 mt-8">
        <div className="flex w-full flex-col">
          <Tabs aria-label="Options" size="lg">
            <Tab
              key="bk"
              title={translateESPTap("esp_tap.condo")}
              style={{ height: "45px", width: "120px", fontSize: "16px" }}
              className={`${langParagraph}`}
            >
              {/* khos name for flat */}
              <EspCondo/>
            </Tab>
            <Tab
              key="flat"
              title={translateESPTap("esp_tap.shop_house")}
              style={{ height: "45px", width: "120px", fontSize: "16px" }}
              className={`${langParagraph}`}
            >
              <EspShopHouse />
            </Tab>
          </Tabs>
        </div>
      </div>
      {/* Feature of Projecct */}
      <FetureDynamic features={features} />

      {/* Nearby Potential */}
      <AroundPlan images={nearbyPotential} />
      <LocationMap
        location={translateSihaknoukPark("east_sihanoukpark_location")}
        imageMap='/map/images/esp.jpg'
      />
    </main>
  )
}

export default EastSihaknoukParkPage