import React from 'react'
import classes from "./assets/Contact-Call.module.css";
import { useParams } from 'next/navigation';
import {
  battambongParagraph,
  koulenHeader,
  vigaHeader,
  interParagraph,
} from "@/app/[locale]/(user)/fonts";
import { useTranslations } from 'next-intl';
const ContactCall = () => {
  const param = useParams();
  const translator = useTranslations("contactus");
  const locale = param.locale;
  const langHeader =
    locale === "kh" ? koulenHeader.className : vigaHeader.className;
  const langParagraph =
    locale === "kh" ? battambongParagraph.className : interParagraph.className;
  return (
    <div className={`${classes.notification}`}>
      <div className={`${classes.notiglow}`}></div>
      <div className={`${classes.notiborderglow}`}></div>
      <div className={`${classes.notititle}`}>
        <h3 className={`${langHeader}`}>{translator("connect")}</h3>
      </div>
      <div className={`${classes.notibody}`}>
        <p className={`${langParagraph}`}>{translator("contact_num")}</p>
      </div>
    </div>
  );
}

export default ContactCall