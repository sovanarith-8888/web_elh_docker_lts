'use client'
import React from "react";
import { Image } from "@nextui-org/react";
import { useParams } from "next/navigation";
import {
  interParagraph,
  vigaHeader,
  battambongParagraph,
  koulenHeader,
} from "@/app/[locale]/(user)/fonts";

type TimelineCardType = {
  avatar: string | undefined;
  year: string | undefined;
  title: string | undefined;
  subtitle?: string | undefined;
  description: string | undefined;
};
const TimelineCard = ({
  avatar,
  year,
  title,
  subtitle,
  description,
}: TimelineCardType) => {
  const param = useParams();
  const locale = param.locale;
  const langHeader =
    locale === "kh" ? koulenHeader.className : vigaHeader.className;
  const langParagraph =
    locale === "kh" ? battambongParagraph.className : interParagraph.className;
  return (
    <>
      <li>
        <div className="item-inner">
          <div className="time-wrapper">
            <time className=" block items-center">
              <Image
                radius="none"
                className="img"
                src={avatar}
                alt="2023"
                width={125}
              />
            </time>
            <time className={`${langHeader} text-[#199249]`}>{year}</time>
          </div>
          <div className="details ">
            <h3 className={`${langHeader} text-logo `}>{title}</h3>
            {/* <small className={`${langParagraph} bg-black mb-4`}>{subtitle}</small> */}
            <p className={langParagraph}>{description}</p>
            
          </div>
        </div>
      </li>
    </>
  );
};

export default TimelineCard;
