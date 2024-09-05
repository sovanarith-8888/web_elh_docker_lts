"use client";
import { Image } from "@nextui-org/react";
import React from "react";
import classes from "./assets/style.module.css";
import { Link } from "@nextui-org/link";
const FooterLogo = () => {
  return (
    <main >
      <div className={`${classes.logoGlass} hidden sm:px-4  lg:block`}>
        <Image src="/resources/images/company/LogoLTS.png" width={170} />
      </div>
      <div className="flex gap-8 mt-4 justify-center sm:items-center">
        <Link href="https://www.facebook.com/eastlandandhome" target="_blank">
          <Image src="/media/images/fb.png" width={34} />
        </Link>
        <Link href="https://www.youtube.com/@eastlandandhomeofficial" target="_blank">
          <Image src="/media/images/yt.png" width={34} />
        </Link>
        <Link href="https://www.facebook.com/bslandhomecareer" target="_blank">
          <Image src="/media/images/in.png" width={34} />
        </Link>
      </div>
    </main>
  );
};

export default FooterLogo;
