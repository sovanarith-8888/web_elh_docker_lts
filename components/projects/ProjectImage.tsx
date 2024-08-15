"use client";
import React from "react";
import { Image } from "@nextui-org/react";
import Link from "next/link";

const ProjectImage = ({src,url}: {src: string | undefined,url: string | undefined}) => {
  return (
    <Link href={`${url}`} target="_blank">
    <Image
      isZoomed
      alt="NextUI Fruit Image with Zoom"
      src={src}
      className="w-[450px] h-[340px]"
      radius="sm"
    />
    </Link>
    
  );
};

export default ProjectImage;
