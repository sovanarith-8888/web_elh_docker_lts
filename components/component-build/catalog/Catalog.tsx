import React, { useState } from "react";
import classes from "./catalog.module.css";
import ImageNextUI from "../image-next-ui/ImageNextUI";

type ImageType = {
  src: string;
  alt?: string;
  width?: number | undefined;
  height?: number | undefined;
  borderRadius?: "sm" | "md" | "lg" | "full" | "none";
  className?: string;
};

type ImageListType = {
  images: ImageType[];
};
const Catalog = ({ images }: ImageListType) => {
  return (
    <div className={`${classes.container}`}>
      <div className={`${classes.wrapper}`}>
      {images.map((image, index) => (
        <div key={index} className={`${classes.card} w-[460px]  z-${index}`}>
          <div className={`${classes.title1}`}>
            <ImageNextUI src={image.src} alt={image.alt} className=""/>
          </div>
          <div className={`${classes.bar}`}>
            <div className={`${classes.emptybar}`}></div>
            <div className={`${classes.filledbar}`}></div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Catalog;
