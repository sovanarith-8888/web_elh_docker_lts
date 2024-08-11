'use client'
import LocationMap from '@/components/component-build/location-map/LocationMap'
import FetureDynamic from '@/components/component-build/feature/FetureDynamic'
import { useTranslations } from 'next-intl'
import { NearbyDefinitions } from '@/lib/definitions'
import AroundPlan from '@/components/component-build/feature/AroundPlan'
import React from 'react'
import { useParams } from 'next/navigation'
import { battambongParagraph, interParagraph, koulenHeader, vigaHeader } from "@/app/[locale]/(user)/fonts";
import { Tab, Tabs } from '@nextui-org/react'
import LandForFlatTap from '@/components/dh-land-svaychrum/taps/LandForFlatTap'
import LandForVillaTap from '@/components/dh-land-svaychrum/taps/LandForVillaTap'

type FeatureType = {
  image?: string | undefined,
  des?: string | undefined
}

const EastlandSvayChrumPage = () => {
  const translateSvayChrumAds = useTranslations("project_plans");
  const translatorFeature = useTranslations("features");  
  const translateNearby = useTranslations("nearby")
  const translatProperties = useTranslations("properties");
  const translateDhTap = useTranslations("dh");
  const param = useParams();
  const locale = param.locale;
  const langHeader =
    locale === "kh" ? koulenHeader.className : vigaHeader.className;
  const langParagraph =
    locale === "kh" ? battambongParagraph.className : interParagraph.className;
  
  // Water | Road ...
  const features: FeatureType[] = [
    {
      image: "/feature/images/ទឹក6.png",
      des: translatorFeature("water")
    },
    {
      image: "/feature/images/ភ្លើង1.png",
      des: translatorFeature("electric")
    },
    {
      image: "/feature/images/លូ២.png",
      des: translatorFeature("road")
    },
    {
      image: "/feature/images/road5.png",
      des: translatorFeature("water")
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
    <main className={`w-[74%] m-auto mt-32`}>
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
              title={translateDhTap("dh_tap.land_flat")}
              style={{ height: "45px", width: "120px", fontSize: "14px" }}
              className={`${langParagraph}`}
            >
              {/* khos name for flat */}
              <LandForFlatTap/>
            </Tab>
            <Tab
              key="land_vill"
              title={translateDhTap("dh_tap.land_villa")}
              style={{ height: "45px", width: "120px", fontSize: "14px" }}
              className={`${langParagraph}`}
            >
              <LandForVillaTap/>
            </Tab>
          </Tabs>
        </div>
      </div>
      {/* Feature of Projecct */}
      <FetureDynamic features={features} />

      {/* Nearby Potential */}
      <AroundPlan images={nearbyPotential} />

      <LocationMap
        location={translateSvayChrumAds("east_svaychrum_location")}
        imageMap='/map/images/elh.jpg'
      />
    </main>
  )
}

export default EastlandSvayChrumPage