"use client";
import { DOMAIN_NAME } from "@/lib/domain";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";
export const Logo = () => {
  const param = useParams();
  const locale = param.locale;

  return (
    <div className="">
      <Image
        width={200}
        height={200}
        src={`/static/images/LogoLTS.png`}
        alt="Logo company"
        className="ml-[-15px]"
      />
    </div>
  );
};
