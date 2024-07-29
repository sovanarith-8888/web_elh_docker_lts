"use client";
import {
  battambongParagraph,
  interParagraph,
  koulenHeader,
  vigaHeader,
} from "@/app/[locale]/(user)/fonts";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import React from "react";
import { CallLocalSvg, EarthLocalSvg, LocationLocalSvg, MailLocalSvg } from "./InfoIcons";

const FooterInformation = () => {
  const translator = useTranslations("Footer");
  const param = useParams();
  const locale = param.locale;
  const langHeader =
    locale === "kh" ? koulenHeader.className : vigaHeader.className;
  const langParagraph =
    locale === "kh" ? battambongParagraph.className : interParagraph.className;
  return (
    <div>
      <h2 className={`${langHeader} text-gold`}>
        {translator("elhHeadOffice")}
      </h2>
      <br />
      <div className="text-white">
        <p className={`${langParagraph} text-white leading-[3rem] flex items-center gap-2`}>
          <LocationLocalSvg/>
          {translator("elhLocation")}
        </p>
        <p className={`${langParagraph} text-white leading-[3rem] flex items-center gap-2`}>
          <CallLocalSvg/>
          {translator("phone")}
        </p>
        <p className={`${langParagraph} text-white leading-[3rem] flex items-center gap-2`}>
          <MailLocalSvg/>
          {translator("gmail")}
        </p>
        <p
          className={`${langParagraph} text-white leading-[3rem] flex items-center gap-2`}
        >
          <EarthLocalSvg />
          {translator("website")}
        </p>
      </div>
    </div>
  );
};

export default FooterInformation;
