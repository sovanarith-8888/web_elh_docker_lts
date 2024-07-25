import { Battambang, Inter, Koulen, Viga } from "next/font/google";

// English Hader Font 
export const vigaHeader = Viga({
  weight:["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-viga",
})

// English Paragraph Font
export const interParagraph = Inter({
  weight: ["400","500","600","700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
})

// Khmer Header Font
export const koulenHeader = Koulen({
  weight: ["400"],
  subsets: ["khmer"],
  display: "swap",
  variable: "--font-koulen",
});

// Khmer Paragraph Font
export const battambongParagraph = Battambang({
  weight: ["300", "400", "700"],
  subsets: ["khmer"],
  display: "swap",
  variable: "--font-battambong",
});