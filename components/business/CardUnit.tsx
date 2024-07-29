'use client'
import React from "react";
import {
  battambongParagraph,
  interParagraph,
  koulenHeader,
  vigaHeader,
} from "@/app/[locale]/(user)/fonts";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
} from "@nextui-org/react";
import { useParams } from "next/navigation";
import buttonStyle from "./asset/button.module.css";
// import Verify from "./Verify";
import Verify from "./Verify";
type UnitType = {
  title: string | undefined,
  sub: string | undefined,
  des: string | undefined
  avatar: string | undefined
}
const CardUnit = ({title, sub, des, avatar}: UnitType) => {
  const param = useParams();
  const locale = param.locale;
  const langHeader =
    locale === "kh" ? koulenHeader.className : vigaHeader.className;
  const langParagraph =
    locale === "kh" ? battambongParagraph.className : interParagraph.className;
  return (
    <Card className="w-full h-[250px]">
      <div className="p-6 h-[250px] hvr-sweep-to-top">
        <CardHeader className="justify-between">
          <div className="flex gap-5">
            <Avatar isBordered radius="full" size="lg" src={avatar} />
            <div className="flex flex-col gap-1 items-start justify-center">
              <div className="flex  gap-2">
                <h3 className={`${langHeader} text-logo`}>{title}</h3>
                <Verify />
              </div>
              <small className={`${langParagraph} leading-3`}>{sub}</small>
            </div>
          </div>
        </CardHeader>
        <div className="mt-8">
          <p className={`indent-12 text-justify ${langParagraph}`}>{des}</p>
        </div>
        <div className="flex mt-8  justify-end">
          <button className={`${buttonStyle.button} ${langParagraph} mr-0`}>
            <small>See more</small>
          </button>
        </div>
      </div>
    </Card>
  );
};

export default CardUnit;
