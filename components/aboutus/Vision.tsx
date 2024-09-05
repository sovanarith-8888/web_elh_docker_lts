"use client";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
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

    useEffect(() => {
      AOS.init({
        duration: 1200
      });
    }, []);
    
  return (
    <>
    <section className={`px-4 lg:px-[13%] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`}>
    <div className="w-full" data-aos="zoom-out-up">
      <VisionCard
        avatar="/vision/images/eye.png"
        title={translator("vision")}
        description={translator("vision_description")}
      />
      </div>
      <div className="w-full " data-aos="zoom-out-up">
      <VisionCard
        avatar="/vision/images/gold.png"
        title={translator("mission")}
        description={translator("mission_description")}
      />
      </div>
      
      <div className="w-full " data-aos="zoom-out-up">
      <VisionCard
        avatar="/vision/images/love.png"
        title={translator("value")}
        description={translator("value_description")}
      />
      </div>
      
    </section>
    </>
    
  );
};

export default Vision;
