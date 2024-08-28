
import HeroContainer from "@/components/hero/HeroContainer";
import { battambongParagraph, interParagraph, koulenHeader, vigaHeader } from "../(user)/fonts";
import "hover.css/css/hover.css";
export default function Home() {
  return (
    <>
      <main className="mt-16 mb-16 w-[74%] m-auto flex min-h-screen text-center flex-col items-center">
        <HeroContainer/>
      </main>
    </>
  );
}
