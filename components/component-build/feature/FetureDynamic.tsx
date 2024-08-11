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

type FeatureType = {
  image?: string | undefined,
  des?: string | undefined
}
type FeatureLists = {
  features: FeatureType[]
}
const FetureDynamic = ({ features }: FeatureLists) => {
  const param = useParams();
  const translator = useTranslations("features");
  const locale = param.locale;
  const langHeader =
    locale === "kh" ? koulenHeader.className : vigaHeader.className;
  const langParagraph =
    locale === "kh" ? battambongParagraph.className : interParagraph.className;
  return (
    <div className={`w-[100%] m-auto mt-32`}>
      <h2 className={`${langHeader} text-logo`}>{translator("feature")}</h2>
      <div className={`${classes.card}`}>
        <ul>
          {
            features.map(feature => (
              <li className={`${classes.isoPro}`}>
                <span></span>
                <span></span>
                <span></span>
                <Image
                  alt=""
                  src={feature.image}
                  className={`${classes.svg} bg-logo`}
                />
                <div className={`${classes.text}  ${langParagraph}`}>
                  {feature.des}
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};
export default FetureDynamic