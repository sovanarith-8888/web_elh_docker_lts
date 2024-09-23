'use client'
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from "react";
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
import Link from "next/link";
type UnitType = {
  title: string | undefined,
  sub: string | undefined,
  des: string | undefined
  avatar: string | undefined,
  link: string | undefined
}
const CardUnit = ({title, sub, des, avatar,link}: UnitType) => {
  useEffect(() => {
    AOS.init({
      duration: 1200
    });
  }, []);
  const param = useParams();
  const locale = param.locale;
  const langHeader =
    locale === "kh" ? koulenHeader.className : vigaHeader.className;
  const langParagraph =
    locale === "kh" ? battambongParagraph.className : interParagraph.className;
  return (
    // hvr-sweep-to-top
    <Card className="w-full lg:h-[270px] p-0 " radius="none">
      <div className="p-6 h-[320px] lg-[270px]">
        <CardHeader className="justify-between">
          <div className="flex gap-5">
            <Avatar isBordered radius="full" size="lg" src={avatar} data-aos="zoom-out-up"/>
            <div className="flex flex-col gap-1 items-start justify-center">
              <div className="flex  gap-2" data-aos="zoom-out-up">
                <h3 className={`${langHeader} text-logo`}>{title}</h3>
                <Verify />
              </div>
              <small className={`${langParagraph} leading-3`} data-aos="zoom-out-up">{sub}</small>
            </div>
          </div>
        </CardHeader>
        <div className="mt-8" data-aos="zoom-out-up">
          <p className={`indent-12 text-justify ${langParagraph}`}>{des}</p>
        </div>
        <div className="flex mt-8">
          <button className={`${buttonStyle.button} ${langParagraph}`} data-aos="zoom-out-up">
            <small>
              <Link href={`${link}`} target="_blank">Reed more</Link>
            </small>
          </button>
        </div>
        <br />
      </div>
    </Card>
  );
};

export default CardUnit;
