"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
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
//sm:w-full md:w-full  mt-16 mb-16 w-[74%] m-auto flex min-h-screen text-center flex-col items-center

const News = () => {
  const translator = useTranslations("promotions");
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
        <ImageNextUI
          src="/background/new2.jpg"
          className="h-[35vh] w-[100vh] lg:h-[72vh] lg:w-[100vw]  rounded-none object-cover"
        />
      </section>
      <section className={`mt-32 px-4 lg:px-[11%]`}>
        <div className="text-justify lg:text-center">
          <h1 className={`${langHeader} text-logo`} data-aos="zoom-out">
            {translator("title")}
          </h1>
          <br />
          <p className={`${langParagraph}`} data-aos="zoom-out">
            {translator("description")}
          </p>
          <br />
          <p className={`${langParagraph}`} data-aos="zoom-out">
            {translator("more")}
          </p>
        </div>
      </section>
      <section className="px-4 lg:px-[11%] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-32">
        <div className="w-full" data-aos="zoom-out">
          <ImageNextUI
            data-aos="zoom-out"
            src="/promotions/a1.jpg"
            className="w-full  rounded-none object-cover"
          />
        </div>
        <div className="w-full" data-aos="zoom-out">
          <ImageNextUI
            data-aos="zoom-out"
            src="/promotions/a2.jpg"
            className="w-full  rounded-none object-cover"
          />
        </div>
        <div className="w-full" data-aos="zoom-out">
          <ImageNextUI
            data-aos="zoom-out"
            src="/promotions/a3.jpg"
            className="w-full  rounded-none object-cover"
          />
        </div>
        <div className="w-full" data-aos="zoom-out">
          <ImageNextUI
            data-aos="zoom-out"
            src="/promotions/a4.jpg"
            className="w-full  rounded-none object-cover"
          />
        </div>
        <div className="w-full" data-aos="zoom-out">
          <ImageNextUI
            data-aos="zoom-out"
            src="/promotions/l1.jpg"
            className="w-full  rounded-none object-cover"
          />
        </div>
        <div className="w-full" data-aos="zoom-out">
          <ImageNextUI
            data-aos="zoom-out"
            src="/promotions/l2.jpg"
            className="w-full  rounded-none object-cover"
          />
        </div>
        <div className="w-full" data-aos="zoom-out">
          <ImageNextUI
            data-aos="zoom-out"
            src="/promotions/l3.jpg"
            className="w-full  rounded-none object-cover"
          />
        </div>
        <div className="w-full" data-aos="zoom-out">
          <ImageNextUI
            data-aos="zoom-out"
            src="/promotions/s1.jpg"
            className="w-full  rounded-none object-cover"
          />
        </div>
        <div className="w-full" data-aos="zoom-out">
          <ImageNextUI
            data-aos="zoom-out"
            src="/promotions/s2.jpg"
            className="w-full  rounded-none object-cover"
          />
        </div>
        <div className="w-full" data-aos="zoom-out">
          <ImageNextUI
            data-aos="zoom-out"
            src="/promotions/s3.jpg"
            className="w-full  rounded-none object-cover"
          />
        </div>
        <div className="w-full" data-aos="zoom-out">
          <ImageNextUI
            data-aos="zoom-out"
            src="/promotions/s4.jpg"
            className="w-full  rounded-none object-cover"
          />
        </div>
        <div className="w-full" data-aos="zoom-out">
          <ImageNextUI
            data-aos="zoom-out"
            src="/promotions/pro1.jpg"
            className="w-full  rounded-none object-cover"
          />
        </div>
      </section>
    </main>
  );
};

export default News;
