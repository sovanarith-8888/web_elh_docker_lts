"use client";
import React from "react";
import { cn } from "@/lib/utils";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import { Button } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { useParams,usePathname,useRouter, useSearchParams } from "next/navigation";
import  CloseSvg  from "@/components/iconsvg/icon";
import "@/app/globals.css";
import {
  battambongParagraph,
  interParagraph,
} from "@/app/[locale]/(user)/fonts";
import KhFlag from "../flag/KhFlag";
import EnFlag from "../flag/EnFlag";
import { useState } from "react";


const HeaderTitleContainer = () => {
  const [isHided, setIsHided] = useState<boolean>(false);
  const [isKh,setIsKh] = useState<boolean>(false);
  const pathname = usePathname();
  const router = useRouter();
  const urlFull = `${pathname}`
  const param = useParams();
  const locale = param.locale;
  const langParagraph =
    locale === "kh" ? battambongParagraph.className : interParagraph.className;
  const formatKhParagraph =
    locale === "kh" ? "tracking-[0.1rem] text-[1.4rem]" : "";
  const translator = useTranslations("Footer");
  const translatorLang = useTranslations("Lang");

  function handleClickLang(isKh: boolean){
    const url = urlFull.substring(4);
    if(isKh) {
      router.push(`/en/${url}`)
    }else{
      router.push(`/kh/${url}`)
      
    }
    setIsKh(!isKh);
    
  }
  function handleHideHeader(){
    setIsHided(!isHided);
  }
  return (
    <main
      className={` ${
        isHided === true ? "hidden" : "block"
      } w-full bg-[#C9A9E9] h-[35px] flex items-center`}
    >
      <div className={`w-[74%] flex justify-between m-auto bg-transparent`}>
        <div>
          <AnimatedGradientText>
            <span
              className={cn(
                `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent p-1
            ${formatKhParagraph} ${langParagraph}`
              )}
            >
              {translator("topTitle")}
            </span>
          </AnimatedGradientText>
        </div>
        <div className="flex gap-2 justify-center items-center ">
          <p className={`${langParagraph}`}>{translatorLang("preferlang")}</p>
          <Button
            onClick={() => handleClickLang(isKh)}
            className="p-0 outline-none"
          >
            {isKh === true ? <EnFlag /> : <KhFlag />}
          </Button>
        </div>
      </div>

      {/* Button close container */}
      {/* <div className="absolute right-8 ">
        <Button
          onClick={handleHideHeader}
          variant="light"
          className="p-0 outline-none"
        >
          <CloseSvg />
        </Button>
      </div> */}
    </main>
  );
};

export default HeaderTitleContainer;
