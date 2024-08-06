'use client'
import { Image } from '@nextui-org/react';
import React from 'react'
import ProjectcardTitle from './ProjectcardTitle';
import ProjectImage from './ProjectImage';
import { useTranslations } from 'next-intl';

const ProjectsPlan = () => {
  const translator = useTranslations("project_plans");
  return (
    <main className={`w-full flex flex-wrap`}>
      {/* 1 */}
      <div className={`w-1/3 h-[440px] px-4`}>
        <div className="w-[100%]">
          <ProjectImage src="/resources/images/projects/ELH.png" />
        </div>
        <div className="w-[100%] mt-2">
          <ProjectcardTitle
            title={translator("east_land")}
            location={translator("east_land_location")}
          />
        </div>
      </div>

      {/* 2 */}
      <div className={`w-1/3 h-[440px] px-4`}>
        <div className="w-[100%]">
          <ProjectImage src="/resources/images/projects/ESC.jpg" />
        </div>
        <div className="w-[100%] mt-2">
          <ProjectcardTitle
            title={translator("east_sihanouk")}
            location={translator("east_sihanouk_location")}
          />
        </div>
      </div>

      {/* 3 */}
      <div className={`w-1/3 h-[440px] px-4`}>
        <div className="w-[100%]">
          <ProjectImage src="/resources/images/projects/ENC.jpg" />
        </div>
        <div className="w-[100%] mt-2">
          <ProjectcardTitle
            title={translator("east_natural")}
            location={translator("east_natural_location")}
          />
        </div>
      </div>

      {/* 4 */}
      <div className={`w-1/3 h-[440px] px-4`}>
        <div className="w-[100%]">
          <ProjectImage src="/resources/images/projects/EKC.png" />
        </div>
        <div className="w-[100%] mt-2">
          <ProjectcardTitle
            title={translator("east_keansvay")}
            location={translator("east_keansvay_location")}
          />
        </div>
      </div>

      {/* 5 */}
      <div className={`w-1/3 h-[440px] px-4`}>
        <div className="w-[100%]">
          <ProjectImage src="/resources/images/projects/ESP.jpg" />
        </div>
        <div className="w-[100%] mt-2">
          <ProjectcardTitle
            title={translator("east_sihanoukpark")}
            location={translator("east_sihanoukpark_location")}
          />
        </div>
      </div>

      {/* 6 */}
      <div className={`w-1/3 h-[440px] px-4`}>
        <div className="w-[100%]">
          <ProjectImage src="/resources/images/projects/ESC.jpg" />
        </div>
        <div className="w-[100%] mt-2">
          <ProjectcardTitle
            title={translator("east_sensok")}
            location={translator("east_sensok_location")}
          />
        </div>
      </div>

      {/* 7 */}
      <div className={`w-1/3 h-[440px] px-4`}>
        <div className="w-[100%]">
          <ProjectImage src="/resources/images/projects/MF.jpg" />
        </div>
        <div className="w-[100%] mt-2">
          <ProjectcardTitle
            title={translator("east_minicondo1")}
            location={translator("east_minicondo1_location")}
          />
        </div>
      </div>

      {/* 8 */}
      <div className={`w-1/3 h-[440px] px-4`}>
        <div className="w-[100%]">
          <ProjectImage src="/resources/images/projects/MC.jpg" />
        </div>
        <div className="w-[100%] mt-2">
          <ProjectcardTitle
            title={translator("east_minicond2")}
            location={translator("east_minicond2_location")}
          />
        </div>
      </div>

      {/* 9 */}
      <div className={`w-1/3 h-[440px] px-4`}>
        <div className="w-[100%]">
          <ProjectImage src="/resources/images/projects/MP.jpg" />
        </div>
        <div className="w-[100%] mt-2">
          <ProjectcardTitle
            title={translator("east_minicondo3")}
            location={translator("east_minicondo3_location")}
          />
        </div>
      </div>

      {/* 10 */}
      <div className={`w-1/3 h-[440px] px-4`}>
        <div className="w-[100%]">
          <ProjectImage src="/resources/images/projects/DH.jpg" />
        </div>
        <div className="w-[100%] mt-2">
          <ProjectcardTitle
            title={translator("east_svaychrum")}
            location={translator("east_svaychrum_location")}
          />
        </div>
      </div>

      {/* 11 */}
      <div className={`w-1/3 h-[440px] px-4`}>
        <div className="w-[100%]">
          <ProjectImage src="/resources/images/projects/EPL.jpg" />
        </div>
        <div className="w-[100%] mt-2">
          <ProjectcardTitle
            title={translator("east_primeland")}
            location={translator("east_primeland_location")}
          />
        </div>
      </div>
    </main>
  );
}

export default ProjectsPlan;