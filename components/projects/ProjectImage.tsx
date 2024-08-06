"use client";
import React from "react";
import { Image } from "@nextui-org/react";

const ProjectImage = ({src}: {src: string | undefined}) => {
  return (
    <Image
      isZoomed
      alt="NextUI Fruit Image with Zoom"
      src={src}
      className="w-[450px] h-[340px]"
      radius="sm"
    />
  );
};

export default ProjectImage;
