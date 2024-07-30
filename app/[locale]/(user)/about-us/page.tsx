'use client'
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import React from 'react'
import {
  interParagraph,
  vigaHeader,
  battambongParagraph,
  koulenHeader,
} from "../fonts";
import AboutQuote from '@/components/aboutus/AboutQuote';
import Vision from '@/components/aboutus/Vision';
import Timeline from '@/components/aboutus/Timeline';

const AboutUs = () => {
  const translator = useTranslations("AboutUs");
  const param = useParams();
  const locale = param.locale;
  const langHeader =
    locale === "kh" ? koulenHeader.className : vigaHeader.className;
  const langParagraph =
    locale === "kh" ? battambongParagraph.className : interParagraph.className;
  return (
    <main
      className={`mt-16 mb-16 w-[74%] m-auto flex min-h-screen text-center flex-col items-center`}
    >
      <AboutQuote/>
      <Vision/>
      <Timeline/>
    </main>
  );
}

export default AboutUs;