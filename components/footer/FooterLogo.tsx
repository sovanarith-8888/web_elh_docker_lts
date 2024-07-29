"use client";
import { Image } from "@nextui-org/react";
import React from "react";
import classes from "./assets/style.module.css";
import { Link } from "@nextui-org/link";
const FooterLogo = () => {
  return (
    <main>
      <div className={`${classes.logoGlass}`}>
        <Image src="/resources/images/company/LogoLTS.png" width={170} />
      </div>
      <div className="flex gap-8 mt-4">
        <Link href="#">
          <Image src="/media/images/fb.png" width={24} />
        </Link>
        <Link href="#">
          <Image src="/media/images/yt.png" width={24} />
        </Link>
      </div>
    </main>
  );
};

export default FooterLogo;
