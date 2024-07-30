"use client";
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

const AboutQuote = () => {
  const translator = useTranslations("AboutUs");
  const param = useParams();
  const locale = param.locale;
  const langHeader =
    locale === "kh" ? koulenHeader.className : vigaHeader.className;
  const langParagraph =
    locale === "kh" ? battambongParagraph.className : interParagraph.className;
  return (
    <section className="w-full flex mt-16">
      {/* Text */}
      <div className="w-1/2 ">
        <br />
        <h2 className={`${langHeader} `}>{translator("message_chairman")}</h2>
        <br />
        <p
          className={`${langParagraph} indent-12 text-justify leading-[1.6em]`}
        >
          {translator("chairmain_des")}
        </p>
        <br />
        <h1 className={`${langHeader} text-logo`}>
          {translator("chairmain_name")}
        </h1>
        <h2 className={`${langHeader}`}>{translator("chairmain_pos")}</h2>
      </div>
      {/* Image */}
      <div className="w-1/2 flex justify-center">
        <Image
          src="/content/images/Boss/Hea.png"
          width={320}
          alt="Chairman of East Land and Home Co.,Ltd"
        />
      </div>
    </section>
  );
};

export default AboutQuote;
