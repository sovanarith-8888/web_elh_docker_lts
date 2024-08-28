/* eslint-disable @next/next/no-sync-scripts */
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";

import HeaderTitleContainer from "@/components/header/HeaderContainer";
import NavbarContainer from "@/components/navbar/NavbarContainer";
import MediaContainer from "@/components/video-show/MediaContainer";
import { Suspense } from "react";
import FooterContainer from "@/components/footer/FooterContainer";
const inter = Inter({ subsets: ["latin"] });



export const metadata: Metadata = {
  title: "East Land and Home",
  description:
    "Beautiful home for sale in Phnom Phen. Featuring 3 bedrooms, 2 bathrooms, and highlight unique features. Perfect for target audience. Contact us today for a viewing!",
};

export default async function LayoutLocation({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body

      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
      {/* <script type="text/javascript" src="/script/timeline.js"></script> */}
    </html>
  );
}
