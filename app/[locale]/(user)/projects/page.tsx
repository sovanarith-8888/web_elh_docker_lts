'use client'
import React from 'react'
import {
  interParagraph,
  koulenHeader,
  vigaHeader,
  battambongParagraph,
} from "../fonts";
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import ProjectsPlan from '@/components/projects/ProjectsPlan';
import BoxReveal from "@/components/magicui/box-reveal";

const Projects = () => {
  const param = useParams();
  const locale = param.locale;
  const translator = useTranslations("project_plans");
  const projectTitle = useTranslations("our_pro");
  const langHeader =
    locale === "kh" ? koulenHeader.className : vigaHeader.className;
  const langParagraph =
    locale === "kh" ? battambongParagraph.className : interParagraph.className;
  return (
    <main className={`mt-56 px-4 lg:px-0 lg:w-[80%] m-auto flex flex-col items-center gap-16 text-logo`}>
      <BoxReveal boxColor={"#199249"} duration={0.9}>
        <h1 className={`${langHeader} text-logo`}>
        {projectTitle("title")}
        </h1>
         </BoxReveal>
         <BoxReveal boxColor={"#199249"} duration={0.9}>
         <p className={`${langParagraph} `}>
        {projectTitle("des")}
     
        </p>
         </BoxReveal>
      <h2 className={`${langHeader} text-logo`}>{translator("our_prject")}</h2>
      <ProjectsPlan/>
    </main>
  );
}

export default Projects;