'use client'

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import React, { useState } from 'react'
import { battambongParagraph, interParagraph, koulenHeader, vigaHeader } from '../../../fonts';
import ImageNextUI from '@/components/component-build/image-next-ui/ImageNextUI';
import PropertiesCataloge from '@/components/elh2/PropertiesCataloge';



const EastLandPage = () => {
  const translateElhFlat = useTranslations("elh");
  const param = useParams();
  const [selected, setSelected] = useState<boolean | undefined>(false);
  const translator = useTranslations("elh_catalog");
  const translatLocation = useTranslations("project_plans");
  const translatProperties = useTranslations("properties");
  const translateNearby = useTranslations("nearby");
  const locale = param.locale;
  const langHeader =
    locale === "kh" ? koulenHeader.className : vigaHeader.className;
  const langParagraph =
    locale === "kh" ? battambongParagraph.className : interParagraph.className;

  return (
    <main className='w-full'>
      {/* Background Image */}
      <section className='w-full h-[72vh]'>
        <ImageNextUI src='/master_image_project/ELH/background.jpg'
          className='w-[100vw] h-[72vh]  rounded-none object-cover' />
      </section>
      {/* Properties */}
      <section className={`w-[74%] m-auto mt-16`}>
        <h2 className={`${langHeader} text-logo`}>{translatProperties("property")}</h2>
      </section>

      {/* Image Slide Cataloge*/}
      <PropertiesCataloge/>
    </main>
  )
}

export default EastLandPage

