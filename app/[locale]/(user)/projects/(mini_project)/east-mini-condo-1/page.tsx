'use client'
import LocationMap from '@/components/component-build/location-map/LocationMap';
import { useTranslations } from 'next-intl';
import React from 'react'
import { battambongParagraph, interParagraph, koulenHeader, vigaHeader } from "@/app/[locale]/(user)/fonts";
import { Tab, Tabs } from '@nextui-org/react';
import FetureDynamic from '@/components/component-build/feature/FetureDynamic';
import AroundPlan from '@/components/component-build/feature/AroundPlan';
import { useParams } from 'next/navigation';

import { NearbyDefinitions } from '@/lib/definitions';
import Emc1Bedroom from '@/components/emc1/tap/Emc1Bedroom';
import Emc2Bedroom from '@/components/emc1/tap/Emc2Bedroom';
import EmcStore from '@/components/emc1/tap/EmcStore';

type FeatureType = {
  image?: string | undefined,
  des?: string | undefined
}

const EastMiniCondo1Page = () => {
  const translateMini1Ads = useTranslations("project_plans");
  const translatProperties = useTranslations("properties");
  const translateNearby = useTranslations("nearby")
  const translatorFeature = useTranslations("features");
  const translateEmc1Tap = useTranslations("emc1");
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
              key="land_flat"
              title={translateEmc1Tap("emc1_tap.1bed")}
              style={{ height: "45px", width: "120px", fontSize: "16px" }}
              className={`${langParagraph}`}
            >
              {/* khos name for flat */}
              <Emc1Bedroom/>
            </Tab>
            <Tab
              key="land_vill"
              title={translateEmc1Tap("emc1_tap.2bed")}
              style={{ height: "45px", width: "120px", fontSize: "16px" }}
              className={`${langParagraph}`}
            >
              <Emc2Bedroom/>
            </Tab>
            <Tab
              key="store"
              title={translateEmc1Tap("emc1_tap.store")}
              style={{ height: "45px", width: "120px", fontSize: "16px" }}
              className={`${langParagraph}`}
            >
              <EmcStore/>
            </Tab>
          </Tabs>
        </div>
      </div>
      {/* Feature of Projecct */}
      <FetureDynamic features={features} />

      {/* Nearby Potential */}
      <AroundPlan images={nearbyPotential} />
      <LocationMap
        location={translateMini1Ads("east_minicondo1_location")}
        imageMap='/map/images/emc.jpg'
      />
    </main>
  )
}

export default EastMiniCondo1Page