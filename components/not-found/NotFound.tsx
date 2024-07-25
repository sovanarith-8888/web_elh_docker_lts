import React from "react";
import { Image } from "@nextui-org/react";
import { DOMAIN_NAME } from "@/lib/domain";
import notFoundStyle from "./style/not-found.module.css";
const NotFound = () => {
  return (
    <div className={`${notFoundStyle.container}`}>
      <Image
        src={`${DOMAIN_NAME}media/images/404error.png`}
        alt="404 page not found gallery"
        width={540}
      />
      <div className={`${notFoundStyle.loaderStyle}`}></div>
    </div>
  );
};

export default NotFound;
