import React from "react";
import AroundPlan from "../feature/AroundPlan";
import FeatureOfProject from "../feature/FeatureOfProject";
import { NearbyDefinitions } from "@/lib/definitions";
import { useTranslations } from "next-intl";
import MapLocation from "@/components/MapLive/MapLocation";
import LocationMap from "../location-map/LocationMap";
import { battambongParagraph, interParagraph, koulenHeader, vigaHeader } from "@/app/[locale]/(user)/fonts";
import { useParams } from "next/navigation";

type mapLocationType = {
  lat?: number,
  lng?: number,
  locationTitle?: string,
  imageMap?: string,
  urlLiveLocation?: string
}
const FeatureNearby = ({lat,lng,locationTitle,imageMap, urlLiveLocation}: mapLocationType) => {
  const translateNearby = useTranslations("nearby");
  const location = useTranslations("locations");
  const translatLocation = useTranslations("project_plans");
  const param = useParams();
  const locale = param.locale;
  const langHeader =
  locale === "kh" ? koulenHeader.className : vigaHeader.className;
const langParagraph =
  locale === "kh" ? battambongParagraph.className : interParagraph.className;

  /* ====== Data ====== */
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
    <div className="w-full">
      <section className="px-4 lg:px-[10%] flex justify-start items-center">
        <FeatureOfProject />
      </section>

      <section className="px-4 lg:px-[10%] flex justify-start items-center ">
        <AroundPlan images={NearbyImageList} />
      </section>

      <section className="px-4 lg:px-[10%] m-auto mt-16">
        <h2 className={`text-logo ${langHeader}`}>{location("location")}</h2>
        <br />
        <MapLocation lat={lat} lng={lng} />
      </section>
      
      <section className="px-4 lg:px-[10%] mt-16">
        <LocationMap
          location={locationTitle}
          imageMap={imageMap}
          urlLocation={urlLiveLocation}
        />
      </section>
    </div>
  );
};

export default FeatureNearby;
