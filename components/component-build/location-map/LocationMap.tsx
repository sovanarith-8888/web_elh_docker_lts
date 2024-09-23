import {
  battambongParagraph,
  interParagraph,
  koulenHeader,
  vigaHeader,
} from "@/app/[locale]/(user)/fonts";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import React from "react";
import ImageNextUI from "../image-next-ui/ImageNextUI";
import { LocationLocalSvg } from "@/components/footer/InfoIcons";
import { Tooltip } from "@nextui-org/react";

type LocationMapType = {
  location?: string;
  imageMap?: string;
  urlLocation?: string;
};

const LocationMap = ({ location, imageMap, urlLocation }: LocationMapType) => {
  const param = useParams();
  const translator = useTranslations("locations");
  const locale = param.locale;
  const langHeader =
    locale === "kh" ? koulenHeader.className : vigaHeader.className;
  const langParagraph =
    locale === "kh" ? battambongParagraph.className : interParagraph.className;

  return (
    <main className={`w-[100%] m-auto mt-32`}>
      {/* <h2 className={`${langHeader} text-logo`}>{translator("location")}</h2> */}
      <br />
      {/* <ImageNextUI src="/featureAround/images/location150.png" alt="location" /> */}
      <br />
      <p className={`${langParagraph} flex items-center gap-2`}>
        <LocationLocalSvg /> {location}
      </p>
      <br />
      <Tooltip title="Hahahah" placement="top" style={{ margin: "100px" }}>
        <div
          className={`w-[100%] mt-12`}
          onClick={() => window.open(urlLocation, "_blank")}
        >
          <ImageNextUI
            src={imageMap}
            alt="Map ELH"
            className="w-[84%] m-auto p-2 bg-[#199249] object-cover"
          />
        </div>
      </Tooltip>
    </main>
  );
};

export default LocationMap;
