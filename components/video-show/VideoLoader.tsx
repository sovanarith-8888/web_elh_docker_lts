"use client";
import React from "react";
import { Suspense } from "react";
const VideoStream = React.lazy(
  () => import("@/components/video-show/MediaContainer")
);
const VideoLoader = () => {
  return (
    <Suspense fallback={<h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, debitis!</h1>}>
      <VideoStream/>
    </Suspense>
  );
};

export default VideoLoader;
