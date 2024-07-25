import { battambongParagraph, interParagraph, koulenHeader, vigaHeader } from "./fonts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-red-500">asdf</h1>
      <h1 className={vigaHeader.className}>Home is home</h1>
      <h1 className={koulenHeader.className}>ប្រទេសកម្ពុជា</h1>
      <p className={interParagraph.className}>Hahahah </p>
      <p className={battambongParagraph.className}>ប្រទេសកម្ពុជា</p>
    </main>
  );
}
