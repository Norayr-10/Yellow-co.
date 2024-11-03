"use client";
import { FC } from "react";
import style from "../style/page_A.module.css";

const Page_A: FC = () => {
  return (
    <div className={style["formed"]}>
      <div className={style["container"]}>
        <h1 className={style["title_h1"]}>
          an inclusive network for entrepreneurial women making an impact
        </h1>
        <p className={style["title_p"]}>
          MEMBERSHIP, SMALL GROUP SUPPORT & EVENTS FOR ENTREPRENEURIAL WOMEN &
          NON-BINARY LEADERS MAKING AN IMPACT
        </p>
        <button className={style["title_btn"]}>LISTEN TO THE PODCAST</button>
      </div>
    </div>
  );
};
export default Page_A;
