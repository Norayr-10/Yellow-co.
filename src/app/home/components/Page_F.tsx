"use client";
import { FC } from "react";
import style from "../style/Page_F.module.css";

const Page_F: FC = () => {
  return (
    <div className={style["formed"]}>
      <div className={style["container"]}>
        <div className={style["image"]}>
          <img src="ts_ph1.png" alt="" />
          <img src="ts_ph2.png" alt="" />
          <img src="ts_ph3.png" alt="" />
        </div>
        <div className={style["image"]}>
          <img src="ts_ph4.png" alt="" />
          <img src="ts_ph5.png" alt="" />
          <img src="ts_ph6.png" alt="" />
        </div>
      </div>
    </div>
  );
};
export default Page_F;
