"use client";
import { FC } from "react";
import style from "../style/Page_G.module.css";

const Page_G: FC = () => {
  return (
    <div className={style["formed"]}>
      <div className={style["container"]}>
        <div className={style["main"]}>
          <div className={style["left"]}>
            <p className={style["title"]}> :) what we do:</p>
            <div className={style["image"]}>
              <img src="ts-GG-2.png" alt="" />
            </div>
            <p className={style["title"]}>— visit the blog</p>
          </div>
          <div className={style["right"]}>
            <div className={style["up"]}>
              <img src="tsGG_3.png" alt="" />
            </div>
            <div className={style["down"]}>
              <img src="ts_GG-4.gif" alt="" />
            </div>
          </div>
        </div>
        <div className={style["point"]}> •••</div>
      </div>
    </div>
  );
};
export default Page_G;
