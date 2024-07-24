import React from "react";
import { Image } from "@nextui-org/react";
import { DOMAIN_NAME } from "@/lib/domain";

const NotFound = () => {
  return (
    <div>
      <Image
        src={`${DOMAIN_NAME}media/images/404error.png`}
        alt="404 page not found gallery"
        width={540}
      />
    </div>
  );
};

export default NotFound;
