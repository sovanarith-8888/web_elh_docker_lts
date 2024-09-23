
'use client'
import HeroContainer from "@/components/hero/HeroContainer";
import { battambongParagraph, interParagraph, koulenHeader, vigaHeader } from "../(user)/fonts";
import "hover.css/css/hover.css";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    // Scroll down 40px when the page loads
    if (window.innerWidth >= 1024) {
      // Scroll down 40px when the page loads
      window.scrollTo({ top: 510, behavior: 'smooth' });
    }
  }, []);
  return (
    <>
      <main className="mt-16 mb-16 w-full lg:w-[74%] xl:w-[74%] text-wrap px-2 lg:px-0 m-auto flex min-h-screen text-center flex-col items-center">
        <HeroContainer/>
      </main>
    </>
  );
}
