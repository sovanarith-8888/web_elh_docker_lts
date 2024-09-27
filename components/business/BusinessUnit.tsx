'use client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { battambongParagraph, interParagraph, koulenHeader, vigaHeader } from '@/app/[locale]/(user)/fonts';
import { Image } from '@nextui-org/react';
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation';
import CardUnit from "./CardUnit";
import React, { useEffect } from "react";


const BusinessUnit = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200
    });
  }, []);
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

      {/* East Land Unit */}
      <div className="flex mt-32 justify-between flex-wrap overflow-hidden">
      <div className={`w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 mt-12`}>
          <h2 className={`${langHeader} text-logo text-start`}>
            {translator("east_title")}
          </h2>
          <div className="mt-4">
            <CardUnit
              title={translator("elh_unit.title")}
              sub={translator("elh_unit.sub")}
              des={translator("elh_unit.des")}
              avatar="/resources/images/Company/estate.png"
              link={`/${locale}/projects`}
            />
          </div>
        </div>
        <div className={`w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 mt-12 h-fit flex lg:justify-end`}>
          <div className={`bg-logo p-7 w-fit rounded-[16px]`} data-aos="zoom-in-up">
            <Image
              isZoomed
              src="/resources/images/Company/estate.png"
              alt="Project ELH"
              style={{ width: "430px" }}
            />
          </div>
        </div>
        
      </div>

      {/* East Micro Unit */}
      <div className="flex flex-col-reverse sm:flex-col md:flex-col-reverse lg:flex-row xl:flex-row mt-32 flex-wrap overflow-hidden">
        <div className={`w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 mt-12 lg:mt-0`}>
          <div className={`bg-logo p-7 w-fit rounded-[16px]`} data-aos="zoom-in-up">
            <Image
              isZoomed
              src="/resources/images/Company/mfi.png"
              alt="Project ELH"
              style={{ width: "430px" }}
            />
          </div>
        </div>
        <div className={`w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 mt-12`}>
          <h2 className={`${langHeader} text-logo text-start`}>
            {translator("east_title")}
          </h2>
          <div className="mt-4">
            <CardUnit
              title={translator("micro_unit.title")}
              sub={translator("micro_unit.sub")}
              des={translator("micro_unit.des")}
              avatar="/resources/images/company/mfi.png"
              link={`https://www.eastmicro.com.kh/`}
            />
          </div>
        </div>
        
      </div>

      {/* East Resort Unit */}
      <div className="flex sm:flex-col md:flex-col lg:flex-row xl:flex-row mt-32 flex-wrap overflow-hidden">
      <div className={`w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 mt-12`}>
          <h2 className={`${langHeader} text-logo text-start px-6`}>
            {translator("east_title")}
          </h2>
          <div className="mt-4">
            <CardUnit
              title={translator("resort_unit.title")}
              sub={translator("resort_unit.sub")}
              des={translator("resort_unit.des")}
              avatar="/resources/images/company/resort.png"
              link={`https://east-resort.com/`}
            />
          </div>
        </div>
        <div className={`w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 mt-12 lg:flex lg:justify-end `}>
          <div className={`bg-logo p-7 w-fit rounded-[16px]`} data-aos="zoom-in-up" data-aos-duration="500">
            <Image
              isZoomed
              src="/resources/images/Company/resort.png"
              alt="Project ELH"
              style={{ width: "430px" }}
            />
          </div>
        </div>
        
      </div>
    </main>
  );
}

export default BusinessUnit