import { Image } from '@nextui-org/react'
import React from 'react'

type ImageType = {
  src: string;
  alt?: string;
  width?: number | undefined;
  height?: number | undefined;
  borderRadius?: "sm" | "md" | "lg" | "full" | "none";
  className?: string;
};

const ImageNextUI = ({src,alt,width,height,borderRadius,className}: ImageType) => {
  return (
    <Image 
      src={src}
      alt={alt}
      width={width}
      height={height}
      radius={borderRadius}
      className={className}
    />
  )
}

export default ImageNextUI