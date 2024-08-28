'use client';
import { battambongParagraph, interParagraph, koulenHeader, vigaHeader } from '@/app/[locale]/(user)/fonts';
import { Image } from '@nextui-org/react';
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation';
import CardUnit from "./CardUnit";
import React from "react";

const BusinessUnit = () => {
  const translator = useTranslations("OurBusiness");
  const param = useParams();
  const locale = param.locale;
  const langHeader =
    locale === "kh" ? koulenHeader.className : vigaHeader.className;
  const langParagraph =
    locale === "kh" ? battambongParagraph.className : interParagraph.className;
  return (
    <main className={`mt-24`}>
      <h1
        className={`${langHeader} text-gold animate__animated animate__slideInUp`}
      >
        {translator("business")}
      </h1>

      {/* East Micro Unit */}
      <div className="flex mt-32">
        <div className={`w-1/2 h-[500px]`}>
          <div className={`bg-logo p-7 w-fit rounded-[16px]`}>
            <Image
              isZoomed
              src="/resources/images/company/estate.png"
              alt="Project ELH"
              style={{ width: "380px" }}
            />
          </div>
        </div>
        <div className={`w-1/2`}>
          <h2 className={`${langHeader} text-logo`}>
            {translator("east_title")}
          </h2>
          <div className="mt-28">
            <CardUnit
              title={translator("elh_unit.title")}
              sub={translator("elh_unit.sub")}
              des={translator("elh_unit.des")}
              avatar="/resources/images/company/estate.png"
              link={`/${locale}/projects`}
            />
          </div>
        </div>
      </div>

      {/* East Micro Unit */}
      <div className="flex mt-32">
        <div className={`w-1/2`}>
          <h2 className={`${langHeader} text-logo`}>
            {translator("east_title")}
          </h2>
          <div className="mt-28">
            <CardUnit
              title={translator("micro_unit.title")}
              sub={translator("micro_unit.sub")}
              des={translator("micro_unit.des")}
              avatar="/resources/images/company/mfi.png"
              link={`https://www.eastmicro.com.kh/`}
            />
          </div>
        </div>
        <div className={`w-1/2 h-[500px] flex justify-end`}>
          <div className={`bg-logo p-7 w-fit rounded-[16px]`}>
            <Image
              isZoomed
              src="/resources/images/company/mfi.png"
              alt="Project ELH"
              style={{ width: "400px" }}
            />
          </div>
        </div>
      </div>

      {/* East Resort Unit */}
      <div className="flex mt-32">
        <div className={`w-1/2 h-[500px]`}>
          <div className={`bg-logo p-7 w-fit rounded-[16px]`}>
            <Image
              isZoomed
              src="/resources/images/company/resort.png"
              alt="Project ELH"
              style={{ width: "380px" }}
            />
          </div>
        </div>
        <div className={`w-1/2`}>
          <h2 className={`${langHeader} text-logo`}>
            {translator("east_title")}
          </h2>
          <div className="mt-28">
            <CardUnit
              title={translator("resort_unit.title")}
              sub={translator("resort_unit.sub")}
              des={translator("resort_unit.des")}
              avatar="/resources/images/company/resort.png"
              link={`https://east-resort.com/`}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default BusinessUnit