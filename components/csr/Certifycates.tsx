import React, { useEffect } from "react";
import ImageNextUI from "../component-build/image-next-ui/ImageNextUI";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  battambongParagraph,
  interParagraph,
  koulenHeader,
  vigaHeader,
} from "@/app/[locale]/(user)/fonts";

const Certifycates = () => {
  const translator = useTranslations("certificates");
  const param = useParams();
  const locale = param.locale;
  const langHeader =
    locale === "kh" ? koulenHeader.className : vigaHeader.className;
  const langParagraph =
    locale === "kh" ? battambongParagraph.className : interParagraph.className;
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 flex-wrap">
      {/* 01 */}
      <div className="w-full bordered border-1 p-1 gap-2" data-aos="zoom-in">
        <ImageNextUI
          data-aos="zoom-out"
          src="/certificates/cert001.PNG"
          className="w-full  rounded-none object-cover"
        />
        <br />
        <div className="flex items-center">
          <h3 className={`text-justify ${langHeader}`}>
            {translator("community")}
          </h3>
          <ImageNextUI src="/certificates/1.png" className="w-[20px]" />
        </div>
        <p className={`${langParagraph}`}>{translator("com_des_001")}</p>
      </div>
      {/* 02 */}
      <div className="w-full bordered border-1 p-1 gap-2" data-aos="zoom-in">
        <ImageNextUI
          data-aos="zoom-out"
          src="/certificates/cert4.PNG"
          className="w-full  rounded-none object-cover"
        />
        <br />
        <div className="flex items-center">
          <h3 className={`text-justify ${langHeader}`}>
            {translator("education")}
          </h3>
          <ImageNextUI src="/certificates/1.png" className="w-[20px]" />
        </div>
        <p className={`${langParagraph}`}>{translator("com_des_4")}</p>
      </div>
      {/* 03 */}
      <div className="w-full bordered border-1 p-1 gap-2" data-aos="zoom-in">
        <ImageNextUI
          data-aos="zoom-out"
          src="/certificates/cert1.PNG"
          className="w-full  rounded-none object-cover"
        />
        <br />
        <div className="flex items-center">
          <h3 className={`text-justify ${langHeader}`}>
            {translator("community")}
          </h3>
          <ImageNextUI src="/certificates/1.png" className="w-[20px]" />
        </div>
        <p className={`${langParagraph}`}>{translator("com_des_1")}</p>
      </div>
      {/* 004 */}
      <div className="w-full bordered border-1 p-1 gap-2" data-aos="zoom-in">
        <ImageNextUI
          data-aos="zoom-out"
          src="/certificates/cert003.PNG"
          className="w-full  rounded-none object-cover"
        />
        <br />
        <div className="flex items-center">
          <h3 className={`text-justify ${langHeader}`}>
            {translator("education")}
          </h3>
          <ImageNextUI src="/certificates/1.png" className="w-[20px]" />
        </div>
        <p className={`${langParagraph}`}>{translator("com_des_004")}</p>
      </div>

      {/* 005 */}
      <div className="w-full bordered border-1 p-1 gap-2" data-aos="zoom-in">
        <ImageNextUI
          data-aos="zoom-out"
          src="/certificates/cert2.PNG"
          className="w-full  rounded-none object-cover"
        />
        <br />
        <div className="flex items-center">
          <h3 className={`text-justify ${langHeader}`}>
            {translator("community")}
          </h3>
          <ImageNextUI src="/certificates/1.png" className="w-[20px]" />
        </div>
        <p className={`${langParagraph}`}>{translator("com_des_2")}</p>
      </div>
      {/* 006 */}
      <div className="w-full bordered border-1 p-1 gap-2" data-aos="zoom-in">
        <ImageNextUI
          data-aos="zoom-out"
          src="/certificates/cert10.PNG"
          className="w-full  rounded-none object-cover"
        />
        <br />
        <div className="flex items-center">
          <h3 className={`text-justify ${langHeader}`}>
            {translator("healthcare")}
          </h3>
          <ImageNextUI src="/certificates/1.png" className="w-[20px]" />
        </div>
        <p className={`${langParagraph}`}>{translator("com_des_10")}</p>
      </div>
      {/* 007 */}
      <div className="w-full bordered border-1 p-1 gap-2" data-aos="zoom-in">
        <ImageNextUI
          data-aos="zoom-out"
          src="/certificates/cert7.PNG"
          className="w-full  rounded-none object-cover"
        />
        <br />
        <div className="flex items-center">
          <h3 className={`text-justify ${langHeader}`}>
            {translator("community")}
          </h3>
          <ImageNextUI src="/certificates/1.png" className="w-[20px]" />
        </div>
        <p className={`${langParagraph}`}>{translator("com_des_7")}</p>
      </div>

      {/* 008 */}
      <div className="w-full bordered border-1 p-1 gap-2" data-aos="zoom-in">
        <ImageNextUI
          data-aos="zoom-out"
          src="/certificates/cert008.PNG"
          className="w-full  rounded-none object-cover"
        />
        <br />
        <div className="flex items-center">
          <h3 className={`text-justify ${langHeader}`}>
            {translator("community")}
          </h3>
          <ImageNextUI src="/certificates/1.png" className="w-[20px]" />
        </div>
        <p className={`${langParagraph}`}>{translator("com_des_008")}</p>
      </div>

      {/* 10 */}
      <div className="w-full bordered border-1 p-1 gap-2" data-aos="zoom-in">
        <ImageNextUI
          data-aos="zoom-out"
          src="/certificates/cert9.PNG"
          className="w-full  rounded-none object-cover"
        />
        <br />
        <div className="flex items-center">
          <h3 className={`text-justify ${langHeader}`}>
            {translator("community")}
          </h3>
          <ImageNextUI src="/certificates/1.png" className="w-[20px]" />
        </div>
        <p className={`${langParagraph}`}>{translator("com_des_9")}</p>
      </div>

      {/* 011 */}
      <div className="w-full bordered border-1 p-1 gap-2" data-aos="zoom-in">
        <ImageNextUI
          data-aos="zoom-out"
          src="/certificates/cert3.PNG"
          className="w-full  rounded-none object-cover"
        />
        <br />
        <div className="flex items-center">
          <h3 className={`text-justify ${langHeader}`}>
            {translator("community")}
          </h3>
          <ImageNextUI src="/certificates/1.png" className="w-[20px]" />
        </div>
        <p className={`${langParagraph}`}>{translator("com_des_3")}</p>
      </div>

      {/* ០12 */}
      <div className="w-full bordered border-1 p-1 gap-2" data-aos="zoom-in">
        <ImageNextUI
          data-aos="zoom-out"
          src="/certificates/cert5.PNG"
          className="w-full  rounded-none object-cover"
        />
        <br />
        <div className="flex items-center">
          <h3 className={`text-justify ${langHeader}`}>
            {translator("community")}
          </h3>
          <ImageNextUI src="/certificates/1.png" className="w-[20px]" />
        </div>
        <p className={`${langParagraph}`}>{translator("com_des_5")}</p>
      </div>

      {/* ០13*/}
      <div className="w-full bordered border-1 p-1 gap-2" data-aos="zoom-in">
        <ImageNextUI
          data-aos="zoom-out"
          src="/certificates/cert6.PNG"
          className="w-full  rounded-none object-cover"
        />
        <br />
        <div className="flex items-center">
          <h3 className={`text-justify ${langHeader}`}>
            {translator("community")}
          </h3>
          <ImageNextUI src="/certificates/1.png" className="w-[20px]" />
        </div>
        <p className={`${langParagraph}`}>{translator("com_des_6")}</p>
      </div>

      {/* ០14 */}
      <div className="w-full bordered border-1 p-1 gap-2" data-aos="zoom-in">
        <ImageNextUI
          data-aos="zoom-out"
          src="/certificates/cert8.PNG"
          className="w-full  rounded-none object-cover"
        />
        <br />
        <div className="flex items-center">
          <h3 className={`text-justify ${langHeader}`}>
            {translator("healthcare")}
          </h3>
          <ImageNextUI src="/certificates/1.png" className="w-[20px]" />
        </div>
        <p className={`${langParagraph}`}>{translator("com_des_8")}</p>
      </div>
      {/* 015 */}
      <div className="w-full bordered border-1 p-1 gap-2" data-aos="zoom-in">
        <ImageNextUI
          data-aos="zoom-out"
          src="/certificates/cert_last.PNG"
          className="w-full  rounded-none object-cover"
        />
        <br />
        <div className="flex items-center">
          <h3 className={`text-justify ${langHeader}`}>
            {translator("community")}
          </h3>
          <ImageNextUI src="/certificates/1.png" className="w-[20px]" />
        </div>
        <p className={`${langParagraph}`}>{translator("com_des_8")}</p>
      </div>
    </section>
  );
};

export default Certifycates;
