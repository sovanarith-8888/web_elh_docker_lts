"use client";
import React from "react";
import FooterLogo from "./FooterLogo";
import FooterInformation from "./FooterInformation";
import FooterMenu from "./FooterMenu";
import { useTranslations } from "next-intl";
import {
  battambongParagraph,
  interParagraph,
  koulenHeader,
  vigaHeader,
} from "@/app/[locale]/(user)/fonts";
import { useParams } from "next/navigation";

const FooterContainer = () => {
  const translator = useTranslations("Footer");
  const param = useParams();
  const locale = param.locale;
  const langHeader =
    locale === "kh" ? koulenHeader.className : vigaHeader.className;
  const langParagraph =
    locale === "kh" ? battambongParagraph.className : interParagraph.className;
  return (
    <footer className={`w-[100%] py-12 bg-logo mt-32`}>
      <main className="w-[74%] m-auto flex justify-between">
        <FooterLogo />
        <FooterInformation />
        <FooterMenu />
      </main>
      <hr className="border-white w-[74%] m-auto mt-12" />
      {/* Main footer buttom */}
      <main className="w-[74%] m-auto flex justify-center mt-8 ">
        <small className="text-center">
          {translator("license")} 
          {" "}|{" "}<span className="underline underline-offset-1">Terms of Service</span>
          {" "}|{" "}<span className="underline underline-offset-1">Privacy</span>
        </small>
      </main>
    </footer>
  );
};

export default FooterContainer;
