"use client";
import React from "react";
import { cn } from "@/lib/utils";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import { Button } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import {
  useParams,
  usePathname,
  useRouter,
} from "next/navigation";
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
  const [isKh, setIsKh] = useState<boolean>(false);
  const pathname = usePathname();
  const router = useRouter();
  const urlFull = `${pathname}`;
  const param = useParams();
  const locale = param.locale;
  const langParagraph =
    locale === "kh" ? battambongParagraph.className : interParagraph.className;
  const formatKhParagraph =
    locale === "kh" ? "tracking-[0.1rem] text-[1.4rem]" : "";
  const translator = useTranslations("Footer");
  const translatorLang = useTranslations("Lang");

  function handleClickLang(isKh: boolean) {
    const url = urlFull.substring(4);
    if (isKh) {
      router.push(`/en/${url}`);
    } else {
      router.push(`/kh/${url}`);
    }
    setIsKh(!isKh);
  }
  return (
    <>
      <main
        className={`
      h-[70px] bg-[#cf87e9] lg:h-[35px] lg:bg-[#D980FA]
      w-full sm:w-full md:w-full lg:px-[13%] py-2 lg:py-2
      flex sm:flex-col md:flex-col lg:flex-row justify-between lg:items-center
      flex-wrap
      gap-1 lg:gap-0
    `}
      >
        <div className="flex w-full lg:w-1/2 justify-start">
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
          
        </div>
        <div className="flex w-full lg:w-1/2  gap-4 justify-end px-2 lg:px-0">
          <p className={`${langParagraph} hidden xl:block`}>
            {translatorLang("preferlang")}
          </p>
          <Button
            onClick={() => handleClickLang(isKh)}
            className="p-0 outline-none"
          >
            {isKh === true ? <EnFlag /> : <KhFlag />}
          </Button>
        </div>
      </main>
    </>
  );
};

export default HeaderTitleContainer;
