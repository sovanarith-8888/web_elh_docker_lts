import React from 'react'
import { useParams } from "next/navigation";
import {
  battambongParagraph,
  koulenHeader,
  vigaHeader,
  interParagraph,
} from "@/app/[locale]/(user)/fonts";
import { useTranslations } from 'next-intl';


const Form = () => {
  const param = useParams();
  const translator = useTranslations("contactus");
  const locale = param.locale;
  const langHeader =
    locale === "kh" ? koulenHeader.className : vigaHeader.className;
  const langParagraph =
    locale === "kh" ? battambongParagraph.className : interParagraph.className;
  return (
    <div className="p-4 mx-auto w-[75%]  font-[sans-serif]">
      <h1
        className={`text-3xl text-gray-800 font-extrabold text-center ${langHeader}`}
      >
        {translator("send")}
      </h1>
      <form className="mt-8 space-y-6">
        <input
          type="text"
          placeholder="Name"
          className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-[13px] outline-blue-500"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-[13px] outline-blue-500"
        />

        <textarea
          placeholder="Message"
          rows={6}
          className="w-full placeholder:text-[13px] rounded-md px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-[13px] pt-3 outline-blue-500"
        ></textarea>
        <button
          type="button"
          className="text-white  bg-blue-500 hover:bg-blue-600 tracking-wide rounded-md text-[13px]  px-4 py-3 w-full"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Form