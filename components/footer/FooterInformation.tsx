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
import Link from "next/link";
const FooterInformation = () => {
  const translator = useTranslations("Footer");
  const param = useParams();
  const locale = param.locale;
  const langHeader =
    locale === "kh" ? koulenHeader.className : vigaHeader.className;
  const langParagraph =
    locale === "kh" ? battambongParagraph.className : interParagraph.className;
  return (
    <div className=" w-full sm:w-full px-2 text-justify lg:px-40">
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
          <Link href={"tel:+85578342168"}>
          {translator("phone")}</Link>
          
        </p>
        <p className={`${langParagraph} text-white leading-[3rem] flex items-center gap-2`}>
          <MailLocalSvg/>
          <Link href={"mailto:info@eastlandandhome.com"}>{translator("gmail")}</Link>
          
        </p>
        <p
          className={`${langParagraph} text-white leading-[3rem] flex items-center gap-2`}
        >
          <EarthLocalSvg />
          <Link href={"https://eastlandandhome.com/"} target="_blank">
          {translator("website")}
          </Link>
          
        </p>
      </div>
    </div>
  );
};

export default FooterInformation;
