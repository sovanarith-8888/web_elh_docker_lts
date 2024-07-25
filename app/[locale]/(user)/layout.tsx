import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { vigaHeader, interParagraph, koulenHeader, battambongParagraph } from "./fonts";
import HeaderTitleContainer from "@/components/header/HeaderContainer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "East Land and Home",
  description:
    "Beautiful home for sale in Phnom Phen. Featuring 3 bedrooms, 2 bathrooms, and highlight unique features. Perfect for target audience. Contact us today for a viewing!",
};

export default async function RootLayout({
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
        className={`${vigaHeader.variable} ${interParagraph.variable} ${koulenHeader.variable} ${battambongParagraph.variable}`}
      >
        <NextIntlClientProvider messages={messages}>
          {/* Container Header  Navbar */}
          <header className={`w-full `}>
            <HeaderTitleContainer />
          </header>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
