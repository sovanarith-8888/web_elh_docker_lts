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
import { Link } from "@nextui-org/react";

const FooterContainer = () => {
  const translator = useTranslations("Footer");
  const param = useParams();
  const locale = param.locale;
  const langHeader =
    locale === "kh" ? koulenHeader.className : vigaHeader.className;
  const langParagraph =
    locale === "kh" ? battambongParagraph.className : interParagraph.className;
  return (
    <footer className={`w-[100%] py-12 bg-logo mt-32 overflow-hidden`}>
      <main className="w-full lg:w-[74%] m-auto flex sm:flex-col md:flex-col lg:flex-row justify-between">
        <div className="hidden lg:block px-2 lg:px-0">
        <FooterLogo />
        </div>
        
        <FooterInformation />
        <FooterMenu />
      </main>
      <hr className="border-white w-[74%] m-auto mt-12" />
      <div className="sm:inline lg:hidden xl:hidden">
        <FooterLogo/>
      </div>
      {/* Main footer buttom */}
      <main className="w-[74%] m-auto flex justify-center mt-8 ">
        <small className={`text-center ${langParagraph}`}>
          {translator("license")} |{" "}
          <Link href={`/${locale}/privacy-policy`}>
            <span className="underline underline-offset-1">
              Terms of Service & Privacy
            </span>{" "}
          </Link>
        </small>
      </main>
    </footer>
  );
};

export default FooterContainer;
