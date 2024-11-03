"use client";
import { FC } from "react";
import style from "../style/page_J.module.css";
const Page_J: FC = () => {
  return (
    <div className={style["formed"]}>
      <div className={style["container"]}>
        <div className={style["image"]}>
          <img src="body_img.jpg" alt="" />
        </div>
        <div className={style["content"]}>
          <div className={style["desceiption"]}>
            <p className={style["italic_bold"]}>
              <i>1.</i>
            </p>
            <p className={style["italic_bold"]}>
              <i>join our community</i>
            </p>
          </div>
          <div className={style["desceiption"]}>
            <p className={style["italic_bold"]}>
              <i>2.</i>
            </p>
            <p className={style["italic_bold"]}>
              <i>when you’re ready to go deeper,</i>
              <i>join a guidance group</i>
            </p>
          </div>
          <div className={style["desceiption"]}>
            <p className={style["italic_bold"]}>
              <i>3.</i>
            </p>
            <p className={style["italic_bold"]}>
              <i>make friends & create your</i>
              <i>most meaningful work</i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page_J;
