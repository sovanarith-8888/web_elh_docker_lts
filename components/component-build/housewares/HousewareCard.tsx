import React from 'react'
import classes from "./assets/house-ware-card.module.css";
import ImageNextUI from '../image-next-ui/ImageNextUI';
import { useParams } from 'next/navigation';
import { battambongParagraph, interParagraph } from '@/app/[locale]/(user)/fonts';
import { SubUnitItemCardDefinition } from '@/lib/definitions';

type subUnitItemsCard = {
  itemCard: SubUnitItemCardDefinition[]
}

const HousewareCard = ({itemCard}: subUnitItemsCard) => {
  const param = useParams();
  const locale = param.locale;
  const langParagraph =
    locale === "kh" ? battambongParagraph.className : interParagraph.className;

  return (
    <div className={`${classes.cards}`}>
      {
        itemCard.map((item,index) => (
          <div key={index} className={`${classes.card}`}>
            <ImageNextUI
              src={`${item.iconItem}`}
              alt="House ware properties"
              className="w-[38px] h-[38px] "
              borderRadius="none"
            />
            <p className={`${classes.tip} ${langParagraph} w-[220px] `}>
              {item.descriptionItem}
            </p>
            <ImageNextUI
              src="/home-items/images/seen.png"
              alt="Already Checked"
              className="w-[28px] h-[28px]"
            />
          </div>
        ))

      }
    </div>
  );
}

export default HousewareCard
