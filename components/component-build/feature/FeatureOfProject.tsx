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

const FeatureOfProject = () => {
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
          {/* Water */}
          <li className={`${classes.isoPro}`}>
            <span></span>
            <span></span>
            <span></span>
            <Image
              alt=""
              src="/feature/images/ទឹក6.png"
              className={`${classes.svg} bg-logo`}
            />
            <div className={`${classes.text}  ${langParagraph}`}>
              {translator("water")}
            </div>
          </li>

          {/* Electric */}
          <li className={`${classes.isoPro}`}>
            <span></span>
            <span></span>
            <span></span>

            <Image
              alt=""
              src="/feature/images/ភ្លើង1.png"
              className={`${classes.svg} bg-logo`}
            />
            <div className={`${classes.text}  ${langParagraph}`}>
              {translator("electric")}
            </div>
          </li>

          {/* Road */}
          <li className={`${classes.isoPro}`}>
            <span></span>
            <span></span>
            <span></span>
            <Image
              alt=""
              src="/feature/images/road5.png"
              className={`${classes.svg} bg-logo`}
            />
            <div className={`${classes.text}  ${langParagraph}`}>
              {translator("road")}
            </div>
          </li>

          {/* Lu */}
          <li className={`${classes.isoPro}`}>
            <span></span>
            <span></span>
            <span></span>
            <Image
              alt=""
              src="/feature/images/លូ២.png"
              className={`${classes.svg} bg-logo`}
            />
            <div className={`${classes.text}  ${langParagraph}`}>
              {translator("lu")}
            </div>
          </li>

          {/* Cleaner */}
          <li className={`${classes.isoPro}`}>
            <span></span>
            <span></span>
            <span></span>
            <Image
              alt=""
              src="/feature/images/អនាម័យ4.png"
              className={`${classes.svg} bg-logo`}
            />
            <div className={`${classes.text}  ${langParagraph}`}>
              {translator("clean")}
            </div>
          </li>

          {/* Guard */}
          <li className={`${classes.isoPro}`}>
            <span></span>
            <span></span>
            <span></span>
            <Image
              alt=""
              src="/feature/images/សន្តិសុខ3.png"
              className={`${classes.svg} bg-logo`}
            />
            <div className={`${classes.text} ${langParagraph}`}>
              {translator("secur")}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default FeatureOfProject;
