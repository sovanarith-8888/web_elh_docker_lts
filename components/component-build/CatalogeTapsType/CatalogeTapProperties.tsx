import React from "react";
import ImageNextUI from "../image-next-ui/ImageNextUI";
import HousewareSingle from "../housewares/HousewareSingle";
import {
  SubUnitItemCardDefinition,
} from "@/lib/definitions";

type ImageResource = {
  imgUrl: string;
  alt?: string;
};

type Alls = {
  slide: ImageResource[],
  items: SubUnitItemCardDefinition[],
  cataloge: ImageResource
}

const CatalogeTapProperties = (
  {slide,items,cataloge}: Alls

) => {
  return (
    <main className="w-full">
      <div className="w-full flex">
        <div className="w-1/2 h-[430px] bg-[#cffafe] rounded-[16px] carousel carousel-center space-x-4 p-4">
          {slide.map((item, index) => (
            <div className="carousel-item" key={index}>
              <ImageNextUI
                src={item.imgUrl}
                alt={item.alt}
                className="w-[500px] h-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="w-1/2 float-right ml-0">
          <HousewareSingle items={items} />
        </div>
      </div>
      <div className="w-full mt-12">
        <ImageNextUI
          src={cataloge.imgUrl}
          alt={cataloge.alt}
          className="w-[500px] h-full object-cover"
        />
      </div>
    </main>
  );
};

export default CatalogeTapProperties;
