import React from "react";

import classes from "./feature.module.css";
import { Image } from "@nextui-org/react";
import {
  battambongParagraph,
  interParagraph,
  koulenHeader,
  vigaHeader,
} from "@/app/[locale]/(user)/fonts";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { NearbyDefinitions } from "@/lib/definitions";

type NearByListType = {
  images: NearbyDefinitions[]
}

const AroundPlan = ({images}: NearByListType) => {
  const param = useParams();
  const translator = useTranslations("features");
  const nearBy = useTranslations("nearby")
  const locale = param.locale;
  const langHeader =
    locale === "kh" ? koulenHeader.className : vigaHeader.className;
  const langParagraph =
    locale === "kh" ? battambongParagraph.className : interParagraph.className;
  return (
    <div className={`w-[100%] m-auto mt-32`}>
      <h2 className={`${langHeader} text-logo`}>{nearBy("nearby")}</h2>
      <div className={`${classes.card}`}>
        <ul className="w-full flex justify-start items-center flex-wrap gap-8">
          {/* Road */}
          {images.map((image) => (
            <li key={image.des} className={`${classes.isoPro}`}>
              <span></span>
              <span></span>
              <span></span>
              <Image
                alt=""
                src={image.src}
                className={`${classes.svg} bg-logo`}
              />
              <div className={`${classes.text}  ${langParagraph}`}>
                {image.des}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default AroundPlan;
