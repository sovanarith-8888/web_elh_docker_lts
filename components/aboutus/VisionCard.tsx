import React from "react";
import classes from "./assets/vision.module.css";
import { Image } from "@nextui-org/react";
import {
  interParagraph,
  vigaHeader,
  battambongParagraph,
  koulenHeader,
} from "@/app/[locale]/(user)/fonts";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import Verify from "../business/Verify";

type VisionCardType = {
  avatar: string | undefined;
  title: string | undefined;
  description: string | undefined;
};
const VisionCard = ({ avatar, title, description }: VisionCardType) => {
  const translator = useTranslations("Vision");
  const param = useParams();
  const locale = param.locale;
  const langHeader =
    locale === "kh" ? koulenHeader.className : vigaHeader.className;
  const langParagraph =
    locale === "kh" ? battambongParagraph.className : interParagraph.className;
  return (
    <div className={`${classes.card}`}>
      <div className={`${classes.svg}`}>
        <Image src={avatar} alt="vision" />
        <h3 className={`${langHeader}`}>{title}</h3>
      </div>

      <div
        className={`${classes.cardContent} flex flex-col justify-start text-start`}
      >
        <div className="flex gap-2">
          <p className={`${classes.cardTitle} ${langHeader} flex`}>{title} </p>
          <Image
            src="/vision/images/verify.png"
            alt="verify"
            width={24}
            height={24}
          />
        </div>
        <p className={`${classes.cardDescription} ${langParagraph}`}>
          {description}
        </p>
        <Verify />
      </div>
    </div>
  );
};

export default VisionCard;
