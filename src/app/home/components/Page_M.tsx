"use client";
import { FC } from "react";
import style from "../style/page_M.module.css";

const Page_M: FC = () => {
  return (
    <div className={style["formed"]}>
      <div className={style["conatainer"]}>
        <div className={style["description"]}>
          <div className={style["image"]}>
            <img src="yellowco_image_2.jpg" alt="" />
          </div>
          <div className={style["aboute_image"]}>
            <h2 className={style["margin_h2"]}>download our 90-day planner</h2>
            <p className={style["margin_p"]}>
              Get intentional about the upcoming 90 days with this free 90-day
              planner.
            </p>
            <button className={style["margin_btn"]}>DOWNLOAD NOW</button>
          </div>
        </div>
        <div className={style["signature"]}>
          <img src="Signature_a.png" alt="" />
        </div>
      </div>
    </div>
  );
};
export default Page_M;
