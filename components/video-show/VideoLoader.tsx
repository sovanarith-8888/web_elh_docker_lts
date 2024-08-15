"use client";
import React from "react";
import { Suspense } from "react";
const VideoStream = React.lazy(
  () => import("@/components/video-show/MediaContainer")
);
const VideoLoader = () => {
  return (
    <Suspense fallback={<p className="text-red-600">Video stream are processing...!</p>}>
      <VideoStream/>
    </Suspense>
  );
};

export default VideoLoader;
