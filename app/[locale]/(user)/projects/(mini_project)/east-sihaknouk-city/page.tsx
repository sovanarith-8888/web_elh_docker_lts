'use client'
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import React from "react";
import {
  battambongParagraph,
  interParagraph,
  koulenHeader,
  vigaHeader,
} from "../../../fonts";
import { Tab, Tabs } from "@nextui-org/react";
import BungalowCatalog from "@/components/east-sihanouk-city/bungalow/BungalowCatalog";
import FlatCatalog from "@/components/east-sihanouk-city/flat/FlatCatalog";
import LandCatalog from "@/components/east-sihanouk-city/land/LandCatalog";
import VillaCatalog from "@/components/east-sihanouk-city/villa/VillaCatalog";
import FeatureOfProject from "@/components/component-build/feature/FeatureOfProject";
import AroundPlan from "@/components/component-build/feature/AroundPlan";
import LocationMap from "@/components/component-build/location-map/LocationMap";

const EscProjectPage = () => {
  const param = useParams();
  const translatCatalog = useTranslations("esc_catalog");
  const translatLocation = useTranslations("project_plans");
  const translateNearby = useTranslations("nearby");
  const translatProperties = useTranslations("properties");
  const locale = param.locale;
  const langHeader =
    locale === "kh" ? koulenHeader.className : vigaHeader.className;
  const langParagraph =
    locale === "kh" ? battambongParagraph.className : interParagraph.className;
  return (
    <main className={`flex flex-col mt-12  border w-[74%] m-auto bg-red-500`}>
      <h1 className={`text-logo ${langHeader} `}>
        {translatProperties("property")}
      </h1>
      {/* Project Type Tab Properties */}
      <div className="m-auto w-[100%] py-2 mt-8">
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
              style={{ height: "45px", width: "90px", fontSize: "14px" }}
              className={`${langParagraph}`}
            >
              <FlatCatalog />
            </Tab>
            <Tab
              key="land"
              title={translatCatalog("land")}
              style={{ height: "45px", width: "90px", fontSize: "14px" }}
              className={`${langParagraph}`}
            >
              <LandCatalog />
            </Tab>
            <Tab
              key="villa"
              title={translatCatalog("villa")}
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
      {/* <AroundPlan images={NearbyImageList} /> */}
      {/* Map */}
      <LocationMap
        location={translatLocation("east_land_location")}
        imageMap="/map/images/elh.jpg"
      />
    </main>
  );
};

export default EscProjectPage;
