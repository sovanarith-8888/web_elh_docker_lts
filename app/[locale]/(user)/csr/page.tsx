"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  interParagraph,
  vigaHeader,
  battambongParagraph,
  koulenHeader,
} from "../fonts";
import AboutQuote from "@/components/aboutus/AboutQuote";
import Vision from "@/components/aboutus/Vision";
import Timeline from "@/components/aboutus/Timeline";
import ImageNextUI from "@/components/component-build/image-next-ui/ImageNextUI";
import CsrCarosel from "@/components/csr/Csr-Carosel";
import Activity from "@/components/csr/Activity";
import Certifycates from "@/components/csr/Certifycates";
//sm:w-full md:w-full  mt-16 mb-16 w-[74%] m-auto flex min-h-screen text-center flex-col items-center

const CSR = () => {
  const translator = useTranslations("csr");
  const param = useParams();
  const locale = param.locale;
  const langHeader =
    locale === "kh" ? koulenHeader.className : vigaHeader.className;
  const langParagraph =
    locale === "kh" ? battambongParagraph.className : interParagraph.className;
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <main className={`w-full`}>
      <section className="w-full">
        <CsrCarosel />
      </section>

      <section className={`mt-32 px-4 lg:px-[11%]`}>
        <div className="text-justify lg:text-center">
          <h1 className={`${langHeader} text-logo`} data-aos="zoom-out">
            {translator("title")}
          </h1>
          <br />
          <p className={`${langParagraph} indent-20 text-justify`} data-aos="zoom-out">
            {translator("des")}
          </p>
          <br />
        </div>
      </section>
      
     
      <section className="px-4 lg:px-[11%] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-12 mt-32">

        <div role="tablist" className="  tabs tabs-bordered w-full ">
           <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            style={{maxWidth: "250px",fontSize: "15px", paddingBottom: "20px",width:"140px"}}
            className="tab text-xl px-8  text-wrap"
            aria-label= {translator("activity")}
            defaultChecked={false}
          />
          <div role="tabpanel" className="tab-content w-full mt-12">
          <Activity/>
          
          </div>
      
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            style={{maxWidth: "350px",fontSize: "15px", paddingBottom: "20px",width: "140px"}}
            className="tab text-xl flex text-wrap"
            aria-label={translator("certi")}
            defaultChecked
            
          />
          <div role="tabpanel" className="tab-content w-full mt-12">
          
          <Certifycates/>
          </div>
          </div>
      </section>
    </main>
  );
};

export default CSR;
