"use client";

import { useEffect } from "react";
import classes from "./style.module.css";
const MediaContainer = () => {
  return (
    <div className={`${classes.video}`}>
      <video autoPlay loop muted className="h-[1080px]">
        <source src={"/_next-video/video.mp4"} type="video/mp4" />
      </video>
    </div>
  );
};

export default MediaContainer;
