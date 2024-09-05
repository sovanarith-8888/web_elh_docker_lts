'use client'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { battambongParagraph, interParagraph, koulenHeader,vigaHeader, } from '@/app/[locale]/(user)/fonts';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react'
import GradualSpacing from "@/components/magicui/gradual-spacing";
import "animate.css";
import { Image } from '@nextui-org/react';
import BusinessUnit from '../business/BusinessUnit';

const HeroContainer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200
    });
  }, []);
  const translator = useTranslations("HeroSection");
  const param = useParams();
  const locale = param.locale;
  const langHeader =
    locale === "kh" ? koulenHeader.className : vigaHeader.className;
    const langParagraph =
      locale === "kh" ? battambongParagraph.className : interParagraph.className;
  return (
    <>
      <main className="text-wrap w-ful flex flex-col justify-start gap-4 px-4 lg:px-0 overflow-hidden">
        {/* <GradualSpacing
          text={translator("titleA")}
          className={`${langHeader} text-[2rem] tracking-[-0.1em] text-justify lg:text-center`}
        ></GradualSpacing> */}
        <h3 data-aos="zoom-out-up" className={`${langHeader} text-justify lg:text-center`}>{translator("titleA")}</h3>
        <h1
        data-aos="zoom-out-up"
          className={`${langHeader} text-logo text-justify lg:text-center`}
        >
          {translator("titleB")}
        </h1>
        <br />
        <p className={`${langParagraph} text-justify indent-12`}>{translator("paragraphA")}</p>
        <br />
        <p className={`${langParagraph} text-justify lg:text-center`}>{translator("paragraphB")}</p>                  
        <p className={`${langParagraph} text-justify lg:text-center`}>{translator("paragraphC")}</p>
        <section className="flex gap-12 mt-12 flex-col lg:flex-row xl:flex-row">         
          <div className="sm:w-full lg:w-2/3">
            <Image
              isZoomed
              src={"/resources/images/company/projectB.jpg"}
              alt="project B"
              style={{ width: "100%" }}
            />
          </div>
          <div className="sm:w-full lg:w-1/3">
            <Image
              isZoomed
              src={"/resources/images/company/projectA.jpg"}
              alt="project A"
              style={{ width: "100%",objectFit: "cover" }}
            />
          </div>
        </section>
        <div className='w-[100%] m-auto'>
        <BusinessUnit/>
        </div>
        
      </main>
    </>
  );
}

export default HeroContainer