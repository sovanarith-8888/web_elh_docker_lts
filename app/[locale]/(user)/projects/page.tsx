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

const Projects = () => {
  const param = useParams();
  const locale = param.locale;
  const translator = useTranslations("project_plans");
  const langHeader =
    locale === "kh" ? koulenHeader.className : vigaHeader.className;
  const langParagraph =
    locale === "kh" ? battambongParagraph.className : interParagraph.className;
  return (
    <main className={`mt-16 w-[74%] m-auto flex flex-col items-center gap-16 text-logo`}>
      <h1 className={`${langHeader}`}>{translator("our_prject")}</h1>
      <ProjectsPlan/>
    </main>
  );
}

export default Projects;