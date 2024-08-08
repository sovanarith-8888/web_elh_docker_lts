import React from "react";
import classes from "../assets/room-items.module.css";
import ImageNextUI from "@/components/component-build/image-next-ui/ImageNextUI";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import {
  battambongParagraph,
  interParagraph,
  koulenHeader,
  vigaHeader,
} from "@/app/[locale]/(user)/fonts";
const RoomItems = () => {
  const param = useParams();
  const translator = useTranslations("home_items");
  const locale = param.locale;
  const langHeader =
    locale === "kh" ? koulenHeader.className : vigaHeader.className;
  const langParagraph =
    locale === "kh" ? battambongParagraph.className : interParagraph.className;
  return (
    <div className={`${classes.cards}`}>
      <div className={`${classes.card} ${classes.red}`}>
        <ImageNextUI
          src="/home-items/images/land.png"
          alt="Land Area"
          className="w-[38px] h-[38px] "
          borderRadius="none"
        />
        <p className={`${classes.tip} ${langParagraph} w-[220px] `}>
          {translator("land")} : 20m X 20m
        </p>
        <ImageNextUI
          src="/home-items/images/seen.png"
          alt="Land Area"
          className="w-[28px] h-[28px]"
        />
      </div>
      <div className={`${classes.card} ${classes.blue}`}>
        <ImageNextUI
          src="/home-items/images/land.png"
          alt="Land Area"
          className="w-[38px] h-[38px]"
          borderRadius="none"
        />
        <p className={`${classes.tip} w-[220px]`}>
          {translator("house_size")} : 5m X 20m
        </p>
        <ImageNextUI
          src="/home-items/images/seen.png"
          alt="Land Area"
          className="w-[28px] h-[28px]"
        />
      </div>
    </div>
  );
};

export default RoomItems;
