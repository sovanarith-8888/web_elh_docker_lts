"use client";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import Script from "next/script";
import React from "react";
import {
  interParagraph,
  vigaHeader,
  battambongParagraph,
  koulenHeader,
} from "@/app/[locale]/(user)/fonts";
import { Image } from "@nextui-org/react";
// import classNamees from "./assets/timeline.module.css";
import "./assets/timeline.css";
import Head from "next/head";
import TimelineCard from "./TimelineCard";
const Timeline = () => {
  const translator = useTranslations("AboutUs_History");
  const param = useParams();
  const locale = param.locale;
  const langHeader =
    locale === "kh" ? koulenHeader.className : vigaHeader.className;
  const langParagraph =
    locale === "kh" ? battambongParagraph.className : interParagraph.className;
  return (
    <>
      <section className="w-full flex flex-col mt-32 py-2">
        <h2 className={`text-logo ${langHeader} text-center`}>
          {translator("milestones")}
        </h2>
        <section className="mt-12 w-[64%] m-auto">
          <section className="timeline">
            <ol>
              {/* 1 */}
              <TimelineCard
                avatar="/assets/images/logo/eastmicro.png"
                year={translator("history_nth_1.year")}
                title={translator("history_nth_1.title")}
                subtitle={translator("history_nth_1.subtitle")}
                description={translator("history_nth_1.description")}
              />
              {/* 2 */}
              <TimelineCard
                avatar="/assets/images/logo/eastresort.png"
                year={translator("history_nth_2.year")}
                title={translator("history_nth_2.title")}
                subtitle={translator("history_nth_2.subtitle")}
                description={translator("history_nth_2.description")}
              />
              {/* 3 */}
              <TimelineCard
                avatar="/assets/images/logo/bsandeast.png"
                year={translator("history_nth_3.year")}
                title={translator("history_nth_3.title")}
                subtitle={translator("history_nth_3.subtitle")}
                description={translator("history_nth_3.description")}
              />
              {/* 4 */}
              <TimelineCard
                avatar="/assets/images/logo/bsandeast.png"
                year={translator("history_nth_4.year")}
                title={translator("history_nth_4.title")}
                subtitle={translator("history_nth_4.subtitle")}
                description={translator("history_nth_4.description")}
              />
              {/* 5 */}
              <TimelineCard
                avatar="/assets/images/logo/eastnew.png"
                year={translator("history_nth_5.year")}
                title={translator("history_nth_5.title")}
                subtitle={translator("history_nth_5.subtitle")}
                description={translator("history_nth_5.description")}
              />
              {/* 6 */}
              <TimelineCard
                avatar="/assets/images/logo/eastnew.png"
                year={translator("history_nth_6.year")}
                title={translator("history_nth_6.title")}
                subtitle={translator("history_nth_6.subtitle")}
                description={translator("history_nth_6.description")}
              />
              {/* 7 */}
              <TimelineCard
                avatar="/assets/images/logo/bs.png"
                year={translator("history_nth_7.year")}
                title={translator("history_nth_7.title")}
                subtitle={translator("history_nth_7.subtitle")}
                description={translator("history_nth_7.description")}
              />
              {/* 8 */}
              <TimelineCard
                avatar="/assets/images/credits/sihanoukville.png"
                year={translator("history_nth_8.year")}
                title={translator("history_nth_8.title")}
                subtitle={translator("history_nth_8.subtitle")}
                description={translator("history_nth_8.description")}
              />
              {/* 9 */}
              <TimelineCard
                avatar="/assets/images/logo/bs.png"
                year={translator("history_nth_9.year")}
                title={translator("history_nth_9.title")}
                subtitle={translator("history_nth_9.subtitle")}
                description={translator("history_nth_9.description")}
              />
              {/* 10 */}
              <TimelineCard
                avatar="/assets/images/credits/fashion2.png"
                year={translator("history_nth_10.year")}
                title={translator("history_nth_10.title")}
                subtitle={translator("history_nth_10.subtitle")}
                description={translator("history_nth_10.description")}
              />
              <TimelineCard
                avatar="/assets/images/credits/fashion.png"
                year={translator("history_nth_11.year")}
                title={translator("history_nth_11.title")}
                subtitle={translator("history_nth_11.subtitle")}
                description={translator("history_nth_11.description")}
              />
            </ol>
          </section>
        </section>
        <Script src="/script/timeline.js" type="text/javascript" />
      </section>
    </>
  );
};

export default Timeline;
