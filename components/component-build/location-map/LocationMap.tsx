import { battambongParagraph, interParagraph, koulenHeader, vigaHeader } from '@/app/[locale]/(user)/fonts';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import React from 'react'
import ImageNextUI from '../image-next-ui/ImageNextUI';

type LocationMapType = {
  location: string;
  imageMap: string;
}

const LocationMap = ({ location, imageMap }: LocationMapType) => {
  const param = useParams();
  const translator = useTranslations("locations");
  const locale = param.locale;
  const langHeader =
    locale === "kh" ? koulenHeader.className : vigaHeader.className;
  const langParagraph =
    locale === "kh" ? battambongParagraph.className : interParagraph.className;
  return (
    <main className={`w-[74%] m-auto mt-32`}>
      <h2 className={`${langHeader} text-logo`}>{translator("location")}</h2>
      <br />
      <ImageNextUI src="/featureAround/images/location150.png" alt="location" />
      <br />
      <p className={`${langParagraph}`}>
        {location}
      </p>
      <br />
      <div className={`w-[100%] m-auto mt-12 flex items-center justify-center`}>
        <ImageNextUI
          src={imageMap}
          alt="Map ELH"
          className="h-[640px]"
        />
      </div>
    </main>
  );
};

export default LocationMap