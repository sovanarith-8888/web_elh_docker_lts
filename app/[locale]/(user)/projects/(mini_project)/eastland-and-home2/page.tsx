"use client";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import {
  battambongParagraph,
  interParagraph,
  koulenHeader,
  vigaHeader,
} from "../../../fonts";
import ImageNextUI from "@/components/component-build/image-next-ui/ImageNextUI";
import PropertiesCataloge from "@/components/elh2/PropertiesCataloge";
import FeatureOfProject from "@/components/component-build/feature/FeatureOfProject";
import AroundPlan from "@/components/component-build/feature/AroundPlan";
import { NearbyDefinitions } from "@/lib/definitions";
import MapLive from "@/components/contactus/MapLive";
import LocationMap from "@/components/component-build/location-map/LocationMap";
import MapLocation from "@/components/MapLive/MapLocation";

const EastLandPage = () => {
  const translateElhFlat = useTranslations("elh");
  const location = useTranslations("locations");
  const param = useParams();
  const [selected, setSelected] = useState<boolean | undefined>(false);
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

  const url = `https://www.google.com/maps/@11.6396556,104.9846312,3a,75y,94.65h,96.27t/data=!3m7!1e1!3m5!1spzBDxcSYmS2GRXKvnwFOYA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-6.272921937337813%26panoid%3DpzBDxcSYmS2GRXKvnwFOYA%26yaw%3D94.64500786038079!7i13312!8i6656?coh=205410&entry=ttu&g_ep=EgoyMDI0MDgyNi4wIKXMDSoASAFQAw%3D%3D`;

  return (
    <main className="w-full">
      {/* Background Image */}
      <section className="w-full h-[72vh]">
        <ImageNextUI
          src="/master_image_project/ELH/background.jpg"
          className="w-[100vw] h-[72vh]  rounded-none object-cover"
        />
      </section>
      {/* Properties */}
      <section className={`w-[74%] m-auto mt-16`}>
        <h2 className={`${langHeader} text-logo`}>
          {translatProperties("property")}
        </h2>
      </section>

      {/* Image Slide Cataloge*/}
      <PropertiesCataloge />
      <section className="w-[74%] m-auto">
        <FeatureOfProject />
      </section>
      <section className="w-[74%] m-auto">
        <AroundPlan images={NearbyImageList} />
      </section>
      <section className="w-[74%] m-auto mt-32">
        <h2 className={`text-logo ${langHeader}`}>{location("location")}</h2>
        <br />
        <MapLocation lat={11.639579701449126} lng={104.98476231952276} />
      </section>
      <section className="w-[74%] m-auto">
        <LocationMap
          location={translatLocation("east_land_location")}
          imageMap="/map/images/elh.jpg"
          urlLocation={url}
        />
      </section>
    </main>
  );
};

export default EastLandPage;
