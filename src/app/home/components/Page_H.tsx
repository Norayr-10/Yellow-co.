"use client";

import { FC } from "react";
import style from "../style/page_H.module.css";

const Page_H: FC = () => {
  return (
    <div className={style["formed"]}>
      <div className={style["container"]}>
        <div className={style["image"]}>
          <img src="ts-GG-5.jpg" alt="" />
        </div>
        <div className={style["description"]}>
          <div className={style["details"]}>
            <p>
              GET TIME AND SPACE TO ACTUALLY WORK ON THE THINGS YOU’VE BEEN
              AVOIDING
            </p>
          </div>
          <div className={style["details"]}>
            <p>
              reflect on where you’ve been & get intentional about where you’re
              headed
            </p>
          </div>
          <div className={style["details"]}>
            <p>
              RECEIVE CONNECTION, GUIDANCE & ACCOUNTABILITY WITH VALUE-ALIGNED
              COMMUNITY
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page_H;
