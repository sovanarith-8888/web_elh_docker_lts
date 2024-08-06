import React from "react";
import classes from "./assets/contact-email.module.css";
import { useParams } from "next/navigation";
import {
  battambongParagraph,
  koulenHeader,
  vigaHeader,
  interParagraph,
} from "@/app/[locale]/(user)/fonts";
import { useTranslations } from "next-intl";
import MailIcon from "./MailIcon";
import LocatIcon from "./LocatIcon";
import Form from "./Form";
const ContactEmail = () => {
  const param = useParams();
  const translator = useTranslations("contactus");
  const translatorAdd = useTranslations("Footer");
  const locale = param.locale;
  const langHeader =
    locale === "kh" ? koulenHeader.className : vigaHeader.className;
  const langParagraph =
    locale === "kh" ? battambongParagraph.className : interParagraph.className;
  return (
    <main className={`w-[60%] flex mt-12 ${classes.boxShadow} p-4 rounded`}>
      <section className={`w-1/2 mt-2 pl-4`}>
        <h2 className={`${langHeader} text-logo`}>{translator("get")}</h2>
        <h3 className={`${langHeader}  mt-12`}>{translator("email")}</h3>
        <section className={` flex gap-2 items-center`}>
          <MailIcon />
          <div>
            <small>{translator("email")}</small>
            <p>info@eastlandandhome.com</p>
          </div>
        </section>
        <h3 className={`${langHeader} mt-8 `}>{translator("address")}</h3>
        <section className={` flex gap-2 items-center`}>
          <LocatIcon />
          <div>
            <small>{translator("address")}</small>
            <p>{translatorAdd("elhLocation")}</p>
          </div>
        </section>
      </section>
      <section className={`w-1/2 `}>
        <Form />
      </section>
    </main>
  );
};

export default ContactEmail;
