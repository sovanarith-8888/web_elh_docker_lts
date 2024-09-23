import React from "react";
import classes from "./assets/project-card-title.module.css";
import ShareIcon from "./ShareIcon";
import Verify from "./Verify";
import LocatIcon from "./LocatIcon";
import { useParams } from "next/navigation";
import {
  battambongParagraph,
  interParagraph,
  koulenHeader,
  vigaHeader,
} from "@/app/[locale]/(user)/fonts";
import Link from "next/link";
import { useTranslations } from "next-intl";

type ProjectTitleType = {
  title?: string | undefined;
  location?: string | undefined;
  url?: string | undefined;
};

const ProjectcardTitle = ({ title, location, url }: ProjectTitleType) => {
  const param = useParams();
  const locale = param.locale;
  const translate = useTranslations("read_more");
  const langHeader =
    locale === "kh" ? koulenHeader.className : vigaHeader.className;
  const langParagraph =
    locale === "kh" ? battambongParagraph.className : interParagraph.className;
  return (
    <div className={`${classes.notification} `}>
      <div className={`${classes.notiglow}`}></div>
      <div className={`${classes.notiborderglow}`}></div>
      <div className={`${classes.notititle}`}>
        <Link href={`${url}`}>
        <h3
          className={`${classes.messageText} ${langHeader} cursor-pointer flex items-center hover:underline hover:underline-offset-2`}
        >
          {title}
          <Verify />
        </h3>
        </Link>
        
      </div>
      <div className={`${classes.notibody} flex items-center`}>
        <LocatIcon />
        <p className={`${classes.subText} ${langParagraph}`}>{location}</p>
      </div>
    </div>
  );
};

export default ProjectcardTitle;
