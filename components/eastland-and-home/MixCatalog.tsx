import React from 'react'
import classes from "./assets/mix-catalog.module.css";
import { Image } from '@nextui-org/react';
const MixCatalog = () => {
  return (
    <main className="flex m-auto mt-32 pl-4 ">
      <div className={`${classes.card} z-10`}>
        <div className={`${classes.title1}`}>
          <Image src="/cataloge/images/mix-elh/EFH.jpg" alt="EFH.jpg" />
        </div>
        <div className={`${classes.bar}`}>
          <div className={`${classes.emptybar}`}></div>
          <div className={`${classes.filledbar}`}></div>
        </div>
      </div>

      <div className={`${classes.card} z-20`}>
        <div className={`${classes.title1}`}>
          <Image src="/cataloge/images/mix-elh/EFH2.jpg" alt="EFH2.jpg" />
        </div>
        <div className={`${classes.content}`}></div>
        <div className={`${classes.bar}`}>
          <div className={`${classes.emptybar}`}></div>
          <div className={`${classes.filledbar}`}></div>
        </div>
      </div>
      <div className={`${classes.card} z-30`}>
        <div className={`${classes.title1}`}>
          <Image src="/cataloge/images/mix-elh/EFH3.jpg" alt="EFH3.jpg" />
        </div>
        <div className={`${classes.bar}`}>
          <div className={`${classes.emptybar}`}></div>
          <div className={`${classes.filledbar}`}></div>
        </div>
      </div>
    </main>
  );
}

export default MixCatalog