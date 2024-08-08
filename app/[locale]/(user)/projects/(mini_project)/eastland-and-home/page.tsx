'use client'
import { BannerProject } from '@/components/eastland-and-home/BannerProject'
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import React from 'react'
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react"; 
import { battambongParagraph, interParagraph, koulenHeader, vigaHeader } from '../../../fonts';
import FlatCatalog from '@/components/eastland-and-home/flat/FlatCatalog';
import LandCatalog from "@/components/eastland-and-home/land/LandCatalog";
import MixCatalog from '@/components/eastland-and-home/MixCatalog';
import Feature from '@/components/eastland-and-home/Feature';
import MapElh from "@/components/eastland-and-home/MapElh";
const ElhProjectPage = () => {
  const param = useParams();
  const translator = useTranslations("elh_catalog");
  const locale = param.locale;
  const langHeader =
    locale === "kh" ? koulenHeader.className : vigaHeader.className;
  const langParagraph =
    locale === "kh" ? battambongParagraph.className : interParagraph.className;
  return (
    <main className={`flex flex-col mt-12 items-center `}>
      {/* <BannerProject /> */}
      <div className="m-auto w-[74%]  mt-16">
        <h1 className={`text-logo ${langHeader}`}>Our Properties</h1>
      </div>
      <div className="m-auto w-[74%] py-2 mt-8">
        <div className="flex w-full flex-col">
          <Tabs aria-label="Options" size="lg">
            <Tab
              key="photos"
              title={translator("flat")}
              style={{ height: "45px", width: "90px", fontSize: "14px" }}
              className={`${langParagraph}`}
            >
              <FlatCatalog/>
            </Tab>
            <Tab
              key="music"
              title={translator("land​")}
              style={{ height: "45px", width: "90px", fontSize: "14px" }}
            >
              <LandCatalog/>
            </Tab>
            <Tab
              key="villa"
              title={translator("villa")}
              style={{ height: "45px", width: "90px", fontSize: "14px" }}
            >
              <Card>
                <CardBody>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
        </div>
      </div>
      {/* more */}
      
      {/* feature */}
      <Feature/>
      {/* Map */}
      <MapElh/>
    </main>
  );
}

export default ElhProjectPage;