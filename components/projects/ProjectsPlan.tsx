'use client'
import AOS from "aos";
import "aos/dist/aos.css";
import React,{useEffect} from 'react'
import ProjectcardTitle from './ProjectcardTitle';
import ProjectImage from './ProjectImage';
import { useTranslations } from 'next-intl';

const ProjectsPlan = () => {
  const translator = useTranslations("project_plans");
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <main className={`lg:px-[8%] w-full row-gap-4 grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 flex-wrap`}>
      {/* 1 ELH */}
      <div className={`w-full h-[440px]`} data-aos="zoom-in">
        <div className="w-[100%]">
          <ProjectImage src="/resources/images/projects/ELH.png" url="projects/eastland-and-home"/>
        </div> 
        <div className="w-[100%] mt-2">
          <ProjectcardTitle
            title={translator("east_land")}
            location={translator("east_land_location")}
            url="projects/eastland-and-home"
          />
        </div>
      </div>

      {/* 2 ESC */}
      <div className={`w-full h-[440px] `} data-aos="zoom-in">
        <div className="w-[100%]">
          <ProjectImage src="/resources/images/projects/ESC.jpg" url="projects/east-sihaknouk-city"/>
        </div>
        <div className="w-[100%] mt-2">
          <ProjectcardTitle
            title={translator("east_sihanouk")}
            location={translator("east_sihanouk_location")}
            url="projects/east-sihaknouk-city"
          />
        </div>
      </div>

      {/* 3 East Natural City*/}
      <div className={`w-full h-[440px]`} data-aos="zoom-in">
        <div className="w-[100%]">
          <ProjectImage src="/resources/images/projects/ENC.jpg" url="projects/east-natural-city"/>
        </div>
        <div className="w-[100%] mt-2">
          <ProjectcardTitle
            title={translator("east_natural")}
            location={translator("east_natural_location")}
            url="projects/east-natural-city"
          />
        </div>
      </div>

      {/* 4 East Keansvay City*/}
      <div className={`w-full h-[440px]`} data-aos="zoom-in">
        <div className="w-[100%]">
          <ProjectImage src="/resources/images/projects/EKC.png" url="projects/east-keansvay-city"/>
        </div>
        <div className="w-[100%] mt-2">
          <ProjectcardTitle
            title={translator("east_keansvay")}
            location={translator("east_keansvay_location")}
            url="projects/east-keansvay-city"
          />
        </div>
      </div>

      {/* 5 East Sihaknouk Park*/}
      <div className={`w-full h-[440px]`} data-aos="zoom-in">
        <div className="w-[100%]">
          <ProjectImage src="/resources/images/projects/ESP.jpg" url="projects/east-sihaknouk-park"/>
        </div>
        <div className="w-[100%] mt-2">
          <ProjectcardTitle
            title={translator("east_sihanoukpark")}
            location={translator("east_sihanoukpark_location")}
            url="projects/east-sihaknouk-park"
          />
        </div>
      </div>

      {/* 6 East SenSok Condominium*/}
      <div className={`w-full h-[440px] `} data-aos="zoom-in">
        <div className="w-[100%]">
          <ProjectImage src="/resources/images/projects/ESC.jpg" url="projects/east-sensok-condominium"/>
        </div>
        <div className="w-[100%] mt-2">
          <ProjectcardTitle
            title={translator("east_sensok")}
            location={translator("east_sensok_location")}
            url="projects/east-sensok-condominium"
          />
        </div>
      </div>

      {/* 7 East Mini Condo 1*/}
      <div className={`w-full h-[440px] `} data-aos="zoom-in">
        <div className="w-[100%]">
          <ProjectImage src="/resources/images/projects/MF.jpg" url="projects/east-mini-condo-1"/>
        </div>
        <div className="w-[100%] mt-2">
          <ProjectcardTitle
            title={translator("east_minicondo1")}
            location={translator("east_minicondo1_location")}
            url="projects/east-mini-condo-1"
          />
        </div>
      </div>

      {/* 8 East Mini Condo 2*/}
      <div className={`w-full h-[440px]`} data-aos="zoom-in">
        <div className="w-[100%]">
          <ProjectImage src="/resources/images/projects/MC.jpg" url="projects/east-mini-condo-2"/>
        </div>
        <div className="w-[100%] mt-2">
          <ProjectcardTitle
            title={translator("east_minicond2")}
            location={translator("east_minicond2_location")}
            url="projects/east-mini-condo-2"
          />
        </div>
      </div>

      {/* 9 East Mini Condo 3*/}
      <div className={`w-full h-[440px] px-4`} data-aos="zoom-in">
        <div className="w-[100%]">
          <ProjectImage src="/resources/images/projects/MP.jpg" url="projects/east-mini-condo-3"/>
        </div>
        <div className="w-[100%] mt-2">
          <ProjectcardTitle
            title={translator("east_minicondo3")}
            location={translator("east_minicondo3_location")}
            url="projects/east-mini-condo-3"
          />
        </div>
      </div>

      {/* 10 East Land Svay Chrum*/}
      <div className={`w-full h-[440px] px-4`} data-aos="zoom-in">
        <div className="w-[100%]">
          <ProjectImage src="/resources/images/projects/DH.jpg" url="projects/east-land-svaychrum"/>
        </div>
        <div className="w-[100%] mt-2">
          <ProjectcardTitle
            title={translator("east_svaychrum")}
            location={translator("east_svaychrum_location")}
            url="projects/east-land-svaychrum"
          />
        </div>
      </div>

      {/* 11 East Prime Land*/}
      <div className={`w-full h-[440px] px-4`} data-aos="zoom-in">
        <div className="w-[100%]">
          <ProjectImage src="/resources/images/projects/EPL.jpg" url="projects/east-prime-land" />
        </div>
        <div className="w-[100%] mt-2">
          <ProjectcardTitle
            title={translator("east_primeland")}
            location={translator("east_primeland_location")}
            url="projects/east-prime-land"
          />
        </div>
      </div>
    </main>
  );
}

export default ProjectsPlan;