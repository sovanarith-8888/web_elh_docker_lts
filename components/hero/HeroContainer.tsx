'use client'
import { battambongParagraph, interParagraph, koulenHeader,vigaHeader, } from '@/app/[locale]/(user)/fonts';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import React, { useState } from 'react'
import GradualSpacing from "@/components/magicui/gradual-spacing";
import "animate.css";
import { Image } from '@nextui-org/react';
import BusinessUnit from '../business/BusinessUnit';

const HeroContainer = () => {
  const translator = useTranslations("HeroSection");
  const [isVideoLoaded, setIsVideoLoaded] = useState<boolean>(false);
  const param = useParams();
  const locale = param.locale;
  const langHeader =
    locale === "kh" ? koulenHeader.className : vigaHeader.className;
    const langParagraph =
      locale === "kh" ? battambongParagraph.className : interParagraph.className;
  return (
    <>
      <main className=" w-ful flex flex-col justify-start gap-4">
        <GradualSpacing
          text={translator("titleA")}
          className={`${langHeader} text-[2rem] tracking-[-0.1em]`}
        ></GradualSpacing>
        <h1
          className={`${langHeader} text-logo animate__animated animate__slideInUp`}
        >
          {translator("titleB")}
        </h1>
        <br />
        <p className={`${langParagraph}`}>{translator("paragraphA")}</p>
        <br />
        <p className={`${langParagraph}`}>{translator("paragraphB")}</p>
        <p className={`${langParagraph}`}>{translator("paragraphC")}</p>
        <section className="flex gap-12 mt-12">
          <div className="w-2/3">
            <Image
              isZoomed
              src={"/resources/images/company/projectB.jpg"}
              alt="project B"
              style={{ width: "100%" }}
            />
          </div>
          <div className="w-1/3">
            <Image
              isZoomed
              src={"/resources/images/company/projectA.jpg"}
              alt="project A"
              style={{ width: "100%" }}
            />
          </div>
        </section>
        <BusinessUnit/>
      </main>
    </>
  );
}

export default HeroContainer