import React from 'react'
import classes from "./static-room-items.module.css";
import ImageNextUI from '../image-next-ui/ImageNextUI';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { battambongParagraph, interParagraph, koulenHeader, vigaHeader } from '@/app/[locale]/(user)/fonts';
const StaticRoomItems = () => {
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
          {translator("land")} : 4.2m X 17m
        </p>
        <ImageNextUI
          src="/home-items/images/seen.png"
          alt="Land Area"
          className="w-[28px] h-[28px]"
        />
      </div>
      <div className={`${classes.card} ${classes.blue}`}>
        <ImageNextUI
          src="/home-items/images/house.png"
          alt="Land Area"
          className="w-[38px] h-[38px]"
          borderRadius="none"
        />
        <p className={`${classes.tip} w-[220px]`}>
          {translator("house_size")} : 4.2m X 12m
        </p>
        <ImageNextUI
          src="/home-items/images/seen.png"
          alt="Land Area"
          className="w-[28px] h-[28px]"
        />
      </div>
      <div className={`${classes.card} ${classes.green}`}>
        <ImageNextUI
          src="/home-items/images/bedroom.png"
          alt="Land Area"
          className="w-[38px] h-[38px]"
          borderRadius="none"
        />
        <p className={`${classes.tip} w-[220px]`}>
          {translator("bedroom")} : 2
        </p>
        <ImageNextUI
          src="/home-items/images/seen.png"
          alt="Land Area"
          className="w-[28px] h-[28px]"
        />
      </div>
      <div className={`${classes.card} ${classes.green}`}>
        <ImageNextUI
          src="/home-items/images/livingroom.png"
          alt="Land Area"
          className="w-[38px] h-[38px]"
          borderRadius="none"
        />
        <p className={`${classes.tip} w-[220px]`}>
          {translator("living_rooms")} : 1
        </p>
        <ImageNextUI
          src="/home-items/images/seen.png"
          alt="Land Area"
          className="w-[28px] h-[28px]"
        />
      </div>
      <div className={`${classes.card} ${classes.green}`}>
        <ImageNextUI
          src="/home-items/images/bathroom.png"
          alt="Land Area"
          className="w-[38px] h-[38px]"
          borderRadius="none"
        />
        <p className={`${classes.tip} w-[220px]`}>
          {translator("bath_room")} : 3
        </p>
        <ImageNextUI
          src="/home-items/images/seen.png"
          alt="Land Area"
          className="w-[28px] h-[28px]"
        />
      </div>
      <div className={`${classes.card} ${classes.green}`}>
        <ImageNextUI
          src="/home-items/images/kitchen.png"
          alt="Land Area"
          className="w-[38px] h-[38px]"
          borderRadius="none"
        />
        <p className={`${classes.tip} w-[220px] `}>
          {translator("kitchen")} : 1
        </p>
        <ImageNextUI
          src="/home-items/images/seen.png"
          alt="Land Area"
          className="w-[28px] h-[28px]"
        />
      </div>
    </div>
  );
}

export default StaticRoomItems