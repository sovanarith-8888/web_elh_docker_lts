"use client";
import React from "react";
import { Image } from "@nextui-org/react";
import Link from "next/link";

const ProjectImage = ({src,url}: {src: string | undefined,url: string | undefined}) => {
  return (
    <Link href={`${url}`}>
    <Image
      isZoomed
      alt="NextUI Fruit Image with Zoom"
      src={src}
      style={{width: "100% !important"}}
      className="w-svw h-[340px] object-cover"
      radius="sm"
    />
    </Link>
    
  );
};

export default ProjectImage;
