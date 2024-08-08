"use client";
import React from "react";
import { useParams } from "next/navigation";
import {
  battambongParagraph,
  interParagraph,
  koulenHeader,
  vigaHeader,
} from "@/app/[locale]/(user)/fonts";

const page = () => {
    const param = useParams();
    const locale = param.locale;
  const langHeader =
    locale === "kh" ? koulenHeader.className : vigaHeader.className;
  const langParagraph =
    locale === "kh" ? battambongParagraph.className : interParagraph.className;
  return (
    <main className={`mt-16 m-auto w-[74%]`}>
      <h1 className={`${langHeader} text-logo`}>Privacy Policy</h1>
      <p className={`${langParagraph} text-gray-800 text-[16px]`}>
        Welcome to East Land and Home . This Privacy Policy explains how we
        collect, use, disclose, and safeguard your information when you visit
        our website eastlandandhome.com, including any other media form, media
        channel, mobile website, or mobile application related or connected
        thereto. Please read this privacy policy carefully. If you do not agree
        with the terms of this privacy policy, please do not access the site.
      </p>
      <br /> <br /> <br />
      <p className={`${langParagraph} text-gray-800 text-[16px]`}>
        We may collect information about you in a variety of ways. The
        information we may collect on the Site includes:
      </p>
      <br />
      <h4 className={`${langHeader} text-black text-[22px]`}>Personal Data</h4>
      <p className={`${langParagraph} text-gray-800 text-[16px]`}>
        Personally identifiable information, such as your name, shipping
        address, email address, and telephone number, and demographic
        information, such as your age, gender, hometown, and interests, that you
        voluntarily give to us when you register with the Site or when you
        choose to participate in various activities related to the Site, such as
        online chat and message boards.
      </p>
      <br />
      <h4 className={`${langHeader} text-black text-[22px]`}>
        Derivative Data
      </h4>
      <p className={`${langParagraph} text-gray-800 text-[16px]`}>
        Information our servers automatically collect when you access the Site,
        such as your IP address, your browser type, your operating system, your
        access times, and the pages you have viewed directly before and after
        accessing the Site.
      </p>
      <br />
      <h4 className={`${langHeader} text-black text-[22px]`}>Financial Data</h4>
      <p className={`${langParagraph} text-gray-800 text-[16px]`}>
        Financial information, such as data related to your payment method
        (e.g., valid credit card number, card brand, expiration date) that we
        may collect when you purchase, order, return, exchange, or request
        information about our services from the Site.
      </p>
      <br />
      <br />
      <br />
      <h4 className={`${langHeader} text-black text-[22px]`}>
        We use the information we collect in the following ways:
      </h4>
      <ul className="text-gray-800 text-[16px] px-12">
        <li>To provide, operate, and maintain our Site.</li>
        <li>To improve, personalize, and expand our Site.</li>
        <li>To understand and analyze how you use our Site.</li>
        <li>To develop new products, services, features</li>
      </ul>
    </main>
  );
};

export default page;
