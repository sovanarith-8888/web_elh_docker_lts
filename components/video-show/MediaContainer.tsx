"use client";
import classes from "./style.module.css";
const MediaContainer = () => {

  return (
    <div className={`${classes.video}`}>
      <video autoPlay loop muted className="w-[100%]" playsInline>
        {/* <source src={"/_next-video/video.mp4"} type="video/mp4" /> */}
        <source src={"https://web-elh-docker-lts.vercel.app/video.mp4"} type="video/mp4" />
      </video>
    </div>
  );
};

export default MediaContainer;
