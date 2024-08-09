'use client'

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import React from 'react'
import { Tabs, Tab } from "@nextui-org/react"; 
import { battambongParagraph, interParagraph, koulenHeader, vigaHeader } from '../../../fonts';
import FlatCatalog from '@/components/eastland-and-home/flat/FlatCatalog';
import LandCatalog from "@/components/eastland-and-home/land/LandCatalog";
import VillaCatalog from '@/components/eastland-and-home/villa/VillaCatalog';
import FeatureOfProject from '@/components/component-build/feature/FeatureOfProject';
import LocationMap from '@/components/component-build/location-map/LocationMap';
import AroundPlan from '@/components/component-build/feature/AroundPlan';
import { NearbyDefinitions } from '@/lib/definitions';


const ElhProjectPage = () => {
  const param = useParams();
  const translator = useTranslations("elh_catalog");
  const translatLocation = useTranslations("project_plans");
  const translatProperties = useTranslations("properties");
  const translateNearby = useTranslations("nearby");
  const locale = param.locale;
  const langHeader =
    locale === "kh" ? koulenHeader.className : vigaHeader.className;
  const langParagraph =
    locale === "kh" ? battambongParagraph.className : interParagraph.className;

    const NearbyImageList: NearbyDefinitions[] = [
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
    ];

  return (
    <main className={`flex flex-col mt-12 items-center `}>
      {/* <BannerProject /> */}
      <div className="m-auto w-[74%]  mt-16">
        <h1 className={`text-logo ${langHeader}`}>
          {translatProperties("property")}
        </h1>
      </div>
      <div className="m-auto w-[74%] py-2 mt-8">
        <div className="flex w-full flex-col">
          <Tabs aria-label="Options" size="lg">
            <Tab
              key="photos"
              title={translator("flat")}
              style={{ height: "45px", width: "90px", fontSize: "14px" }}
              className={`${langParagraph}`}
            >
              <FlatCatalog />
            </Tab>
            <Tab
              key="music"
              title={translator("land​")}
              style={{ height: "45px", width: "90px", fontSize: "14px" }}
              className={`${langParagraph}`}
            >
              <LandCatalog />
            </Tab>
            <Tab
              key="villa"
              title={translator("villa")}
              style={{ height: "45px", width: "90px", fontSize: "14px" }}
              className={`${langParagraph}`}
            >
              <VillaCatalog />
            </Tab>
          </Tabs>
        </div>
      </div>

      {/* feature */}
      <FeatureOfProject />
      <AroundPlan images={NearbyImageList} />
      {/* Map */}
      <LocationMap
        location={translatLocation("east_land_location")}
        imageMap="/map/images/elh.jpg"
      />
    </main>
  );
}

export default ElhProjectPage;