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
              <li>
                <div className="item-inner">
                  <div className="time-wrapper">
                    <time className=" block items-center">
                      <Image
                        className="img"
                        src="/assets/images/credits/2023.png"
                        alt="2023"
                        width={70}
                      />
                    </time>
                    <time>2033</time>
                  </div>
                  <div className="details">
                    <h3>Heading Here</h3>
                    <p>
                      : ក្រុមហ៊ុនអភិវឌ្ឍន៏អចលនទ្រព្យ Details: ក្រុមហ៊ុន EAST
                      បានបន្ថែមគម្រោង ចំនួន 6 និងពង្រីកដីបន្ថែមទៀត
                      និងបន្តគោរពតាមស្តង់ដារ និងសាជីវកម្មអភិបាលកិច្ច
                    </p>
                  </div>
                </div>
              </li>

              <li>
                <div className="item-inner">
                  <div className="time-wrapper">
                    <time>1934</time>
                  </div>
                  <div className="details">
                    <h3>Heading Here</h3>
                    <p>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium At vero eos et accusamus et
                      iusto odio dignissimos ducimus qui blanditiis praesentium
                    </p>
                  </div>
                </div>
              </li>
            </ol>
          </section>
        </section>
        <Script src="/script/timeline.js" type="text/javascript" />
      </section>
    </>
  );
};

export default Timeline;
