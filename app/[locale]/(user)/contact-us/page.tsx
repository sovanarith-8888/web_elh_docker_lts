'use client'
import { useParams } from "next/navigation";
import React from 'react'
import { battambongParagraph, interParagraph, koulenHeader, vigaHeader } from '../fonts';
import { useTranslations } from 'next-intl';
import ContactCall from "@/components/contactus/ContactCall";
import ContactEmail from "@/components/contactus/ContactEmail";
import MapLive from "@/components/contactus/MapLive";

const ContactUs = () => {
  const param = useParams();
  const locale = param.locale;
  const langParagraph =
    locale === "kh" ? battambongParagraph.className : interParagraph.className;
  const langHeader =
    locale === "kh" ? koulenHeader.className : vigaHeader.className;
  const translator = useTranslations("contactus");
  return (
    <main className={`mt-12 flex flex-col gap-8 justify-center items-center `}>
      <h1 className={`text-logo ${langHeader} `}>{translator("conact")}</h1>
      <p className={``}>{translator("query")}</p>
      <ContactCall/>
      <ContactEmail/>
      <MapLive/>
    </main>
  );
}

export default ContactUs;
