"use client";
import { FC } from "react";
import style from "../style/page_L.module.css";

const Page_L: FC = () => {
  return (
    <div className={style["formed"]}>
      <div className={style["container"]}>
        <div className={style["image"]}>
          <img src="yelloco_image.png" alt="" />
        </div>
        <div className={style["description"]}>
          <h2 className={style["modify_h2"]}>
            <i>the support you need</i>
          </h2>
          <p className={style["modify"]}>
            Let’s be real. You have a lot on your plate. You might be asking
            yourself, “do I really have time to invest in another thing?”. And
            to that I say- do you have time not to invest? We are changing the
            way women create. We’re here to help you stop reacting and start
            walking with intention towards your impact. We guarantee that if you
            jump in and get involved, the guidance you receive here will save
            you hours of wasted time.
          </p>
          <p className={style["modify"]}>
            No matter where you are in your journey, we’re here not only to
            support, guide and encourage you, but to celebrate you as you embark
            on your unique path of creating your meaningful work.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Page_L;
