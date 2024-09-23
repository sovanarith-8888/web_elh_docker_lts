'use client'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useParams } from "next/navigation";
import React, { useEffect } from 'react'
import { battambongParagraph, interParagraph, koulenHeader, vigaHeader } from '../fonts';
import { useTranslations } from 'next-intl';
import ContactCall from "@/components/contactus/ContactCall";
import ContactEmail from "@/components/contactus/ContactEmail";
import MapLive from "@/components/contactus/MapLive";
import ImageNextUI from "@/components/component-build/image-next-ui/ImageNextUI";

const ContactUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200
    });
  }, []);
  const param = useParams();
  const locale = param.locale;
  const langParagraph =
    locale === "kh" ? battambongParagraph.className : interParagraph.className;
  const langHeader =
    locale === "kh" ? koulenHeader.className : vigaHeader.className;
  const translator = useTranslations("contactus");
  return (
    <main className={`w-full`}>
      <section className="w-full">
        <ImageNextUI
          src="/background/contactus.png"
          className="h-[35vh] w-[100vh] lg:h-[72vh] lg:w-[100vw]  rounded-none object-cover"
        />
      </section>
      <div className={`px-4 lg:px-[11%] mt-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 ls:grid-cols-1 gap-14`}>
      <h1 className={`text-logo ${langHeader} `} data-aos="zoom-out">{translator("conact")}</h1>
      <p className={``} data-aos="zoom-out">{translator("query")}</p>
      <div data-aos="zoom-out"><ContactCall/></div>
      <div data-aos="zoom-out"><ContactEmail/></div>
      </div>
      
      
      <div className='mt-36'>
      <MapLive/>
      </div>
      
    </main>
  );
}

export default ContactUs;
