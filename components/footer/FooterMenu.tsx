"use client"
import React from "react";
import { battambongParagraph, interParagraph, koulenHeader, vigaHeader } from '@/app/[locale]/(user)/fonts';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import {Link} from "@nextui-org/react";

const FooterMenu = () => {
  const translator = useTranslations("Navbar");
  const param = useParams();
  const locale = param.locale;
  const langHeader =
    locale === "kh" ? koulenHeader.className : vigaHeader.className;
    const langParagraph =
      locale === "kh" ? battambongParagraph.className : interParagraph.className;
  return (
    <div>
      <h2 className={`${langHeader} text-gold`}>
        {translator("company")}
      </h2> 
      <br />
      <div className="flex flex-col siz">
      <Link href="/" className={`${langParagraph}`}>
      <p className={`${langParagraph} hover:bg-[#15803d] rounded px-2 leading-[3rem] text-white `}>{translator("home")}</p>
      </Link>
      <Link href={`/${locale}/about-us`} className={`${langParagraph}`}>
      <p className={`${langParagraph} hover:bg-[#15803d] rounded px-2 text-white leading-[3rem]`}>{translator("aboutus")}</p>
      </Link>
      <Link href={`/${locale}/projects`} target="_blank" className={`${langParagraph}`}>
      <p className={`${langParagraph} hover:bg-[#15803d] rounded px-2 text-white leading-[3rem]`}>{translator("unit_elh")}</p>
      </Link>
      <Link href={`/${locale}/web-underconstruction`} className={`${langParagraph}`}>
      <p className={`${langParagraph} hover:bg-[#15803d] rounded px-2 text-white leading-[3rem]`}>{translator("unit_resort")}</p>
      </Link>
      <Link href={`/${locale}/web-underconstruction`} className={`${langParagraph}`}>
      <p className={`${langParagraph} hover:bg-[#15803d] rounded px-2 text-white leading-[3rem]`}>{translator("unit_micro")}</p>
      </Link>
      <Link href={`/${locale}/web-underconstruction`} className={`${langParagraph}`}>
      <p className={`${langParagraph} hover:bg-[#15803d] rounded px-2 text-white leading-[3rem]`}>{translator("new_news")}</p>
      </Link>
      <Link href={`/${locale}/web-underconstruction`} className={`${langParagraph}`}>
      <p className={`${langParagraph} hover:bg-[#15803d] rounded px-2 text-white leading-[3rem]`}>{translator("gallery")}</p>
      </Link>
      <Link href="https://www.facebook.com/bslandhomecareer" className={`${langParagraph}`} target="_blank">
      <p className={`${langParagraph} hover:bg-[#15803d] rounded px-2 text-white leading-[3rem]`}>{translator("carrer")}</p>
      </Link>
      <Link href={`/${locale}/contact-us`} className={`${langParagraph}`}>
      <p className={`${langParagraph} hover:bg-[#15803d] rounded px-2 text-white leading-[3rem]`}>{translator("contactus")}</p>
      </Link>
      </div>
    </div>
  );
};

export default FooterMenu;

