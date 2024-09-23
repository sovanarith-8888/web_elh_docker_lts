/* eslint-disable @next/next/no-sync-scripts */
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import {
  vigaHeader,
  interParagraph,
  koulenHeader,
  battambongParagraph,
} from "@/app/[locale]/(user)/fonts";
import HeaderTitleContainer from "@/components/header/HeaderContainer";
import NavbarContainer from "@/components/navbar/NavbarContainer";
import MediaContainer from "@/components/video-show/MediaContainer";
import { Suspense } from "react";
import FooterContainer from "@/components/footer/FooterContainer";
const inter = Inter({ subsets: ["latin"] });
import Head from "next/head";

// for all

export const metadata: Metadata = {
  title: "Our project",
  description:
    "Beautiful home for sale in Phnom Phen. Featuring 3 bedrooms, 2 bathrooms, and highlight unique features. Perfect for target audience. Contact us today for a viewing!",
};

export default async function CommonLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <head></head>
      <body
        className={`${vigaHeader.variable} relative ${interParagraph.variable} ${koulenHeader.variable} ${battambongParagraph.variable}`}
      >
        <NextIntlClientProvider messages={messages}>
          {/* Container Header  Navbar */}
          <header className={`w-full`}>
            {/* Heaer */}
            <HeaderTitleContainer />

            {/* <MediaContainer /> */}
            {/* Navbar */}
            <NavbarContainer />
          </header>
          {/* <MediaContainer /> */}
          {/* <HeaderTitleContainer />
          <div >
          <NavbarContainer />
          </div> */}

          {children}
          <FooterContainer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
