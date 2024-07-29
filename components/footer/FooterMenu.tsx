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
      <Link href="#" className={`${langParagraph}`}>
      <p className={`${langParagraph} leading-[3rem] text-white `}>{translator("home")}</p>
      </Link>
      <Link href="#" className={`${langParagraph}`}>
      <p className={`${langParagraph} text-white leading-[3rem]`}>{translator("aboutus")}</p>
      </Link>
      <Link href="#" className={`${langParagraph}`}>
      <p className={`${langParagraph} text-white leading-[3rem]`}>{translator("unit_elh")}</p>
      </Link>
      <Link href="#" className={`${langParagraph}`}>
      <p className={`${langParagraph} text-white leading-[3rem]`}>{translator("unit_resort")}</p>
      </Link>
      <Link href="#" className={`${langParagraph}`}>
      <p className={`${langParagraph} text-white leading-[3rem]`}>{translator("unit_micro")}</p>
      </Link>
      <Link href="#" className={`${langParagraph}`}>
      <p className={`${langParagraph} text-white leading-[3rem]`}>{translator("new_news")}</p>
      </Link>
      <Link href="#" className={`${langParagraph}`}>
      <p className={`${langParagraph} text-white leading-[3rem]`}>{translator("gallery")}</p>
      </Link>
      <Link href="#" className={`${langParagraph}`}>
      <p className={`${langParagraph} text-white leading-[3rem]`}>{translator("carrer")}</p>
      </Link>
      <Link href="#" className={`${langParagraph}`}>
      <p className={`${langParagraph} text-white leading-[3rem]`}>{translator("contactus")}</p>
      </Link>
      </div>
    </div>
  );
};

export default FooterMenu;

