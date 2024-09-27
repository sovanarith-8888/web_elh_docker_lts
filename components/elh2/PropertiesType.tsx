"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import classes from "./assets/properties-type.module.css";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import {
  battambongParagraph,
  interParagraph,
  koulenHeader,
  vigaHeader,
} from "@/app/[locale]/(user)/fonts";
import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@nextui-org/react";
import Verify from "../projects/Verify";
import ImageNextUI from "../component-build/image-next-ui/ImageNextUI";

type ItemsCardType = {
  icon?: string;
  iconTitle?: string;
  iconSize?: string;
};
type PropertiesCardType = {
  title?: string;
  des?: string;
  types?: string;
  unit?: string;
  images?: string[];
  items?: ItemsCardType[];
  cataloge?: string;
  layout?: string;
};
const PropertiesType = ({
  title,
  des,
  types,
  unit,
  images,
  items,
  cataloge,
  layout,
}: PropertiesCardType) => {
  const [backdrop, setBackdrop] = React.useState("blur");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isCatlogeNotLayout, setIsCatalogeNotLayout] = useState(false);
  const param = useParams();
  const locale = param.locale;
  const langHeader =
    locale === "kh" ? koulenHeader.className : vigaHeader.className;
  const langParagraph =
    locale === "kh" ? battambongParagraph.className : interParagraph.className;
    useEffect(() => {
      AOS.init({
        duration: 1200,
      });
    }, []);
  return (
    /* From Uiverse.io by abrahamcalsin */
    <div className={`${classes.planCard} bordered border-1 h-fit lg:h-[65rem]`} data-aos="zoom-in">
      <div className="carousel w-full h-fit gap-4 bordered border-4">
        {images?.map((url, index) => (
          <div

            id={"" + index + 1}
            className="carousel-item w-[90%]"
            key={index}
          >
            <Image
              id=""
              height={200}
              radius="none"
              src={url}
              alt="default"
              className="w-full object-cover"
            />
          </div>
        ))}
      </div>

      <h3 className={`${langHeader} mt-4 text-logo flex items-center`}>
        {title} <Verify />
      </h3>
      <div className={`${classes.etiquetPrice} mt-4`}>
        <div className="breadcrumbs max-w-xs prefix-text-[130px] text-2xl">
          <ul>
            <li>{types}</li>
            <li>{unit}</li>
          </ul>
        </div>
        <div className={`${classes.div}`}></div>
      </div>
      <div
        className={`${classes.benefitsList}  w-full grid grid-cols-1 gap-2 md:grid-cols-2`}
      >
        {items?.map((item, index) => (
          <div key={index} className="h-[80px] bordered border-1 flex flex-col justify-center items-center">
            <div>
              <ImageNextUI
                src={`${item.icon}`}
                width={40}
                className="object-cover"
              />
            </div>

            <small className={`${langParagraph}`}>{item.iconTitle}</small>
          </div>
        ))}
      </div>
      <div
        className={`w-full lg:mt-4 grid grid-cols-1 md:grid-cols-2 flex-wrap gap-2`}
      >
        {/* The button to open modal */}
        <Button
          variant="faded"
          onPress={()=>{onOpen(); setIsCatalogeNotLayout(true)}}
          
          // onClick={() => setIsCatalogeNotLayout(true)}
          className={`hover:bg-[#199249]  hover:text-[#199249] w-full btn bordered border-1  border-[#199249] mt-4 rounded-md`}
        >
          <p className={`${langParagraph} text-[1.3rem]`}>PREVIEW CATALOGE</p>
        </Button>
        <Button
          onPress={()=>{onOpen(); setIsCatalogeNotLayout(false)}}
          // onClick={() => setIsCatalogeNotLayout(false)}
          className={`${langParagraph} w-full btn bordered border-1 bg-transparent hover:text-white hover:bg-[#199249] border-[#199249] mt-4 rounded-md`}
        >
          <p className={`${langParagraph} text-[1.3rem]`}>LAYOUT CONTRACTION</p>
        </Button>
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          backdrop="blur"
          hideCloseButton
          className="flex justify-center items-center z-auto h-fit lg:h-[800px] w-[320px] lg:w-[620px]"
          size="5xl"
          radius="none"
          placement="center"
        >
          <ModalContent className=" ">
            <>
              <ModalBody className={isCatlogeNotLayout ? "" : ""}>
                {isCatlogeNotLayout ? (
                  <ImageNextUI
                    src={`${cataloge}`}
                    width={620}
                    className="bordered border-3 p-4"
                  />
                ) : (
                  <ImageNextUI
                    src={`${layout}`}
                    width={720}
                    className="bordered border-3 p-4 mt-4"
                  />
                )}
              </ModalBody>
            </>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

export default PropertiesType;
