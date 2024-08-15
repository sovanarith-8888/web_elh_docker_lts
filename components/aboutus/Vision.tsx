"use client"
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import React from "react";
import {
  interParagraph,
  vigaHeader,
  battambongParagraph,
  koulenHeader,
} from "@/app/[locale]/(user)/fonts";
import { Image } from "@nextui-org/react";
import classes from "./assets/vision.module.css";
import VisionCard from "./VisionCard";
const Vision = () => {
  const translator = useTranslations("Vision");
  const param = useParams();
  const locale = param.locale;
  const langHeader =
    locale === "kh" ? koulenHeader.className : vigaHeader.className;
  const langParagraph =
    locale === "kh" ? battambongParagraph.className : interParagraph.className;
  return (
    <section className="w-full flex justify-around mt-16 py-2 ">
      <VisionCard
        avatar="/vision/images/eye.png"
        title={translator("vision")}
        description={translator("vision_description")}
      />
      <VisionCard
        avatar="/vision/images/gold.png"
        title={translator("mission")}
        description={translator("mission_description")}
      />
      <VisionCard
        avatar="/vision/images/love.png"
        title={translator("value")}
        description={translator("value_description")}
      />
    </section>
  );
};

export default Vision;
