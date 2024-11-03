"use client";
import { FC } from "react";
import style from "../style/page_P.module.css";
import { FaInstagram, FaFacebookF } from "react-icons/fa6";

const Page_P: FC = () => {
  return (
    <div className={style["formed"]}>
      <div className={style["container"]}>
        <div className={style["first"]}>
          <div className={style["title"]}>
            <p>— HANG OUT WITH US ON THE GRAM</p>
          </div>
          <div className={style["image"]}>
            <img src="image-asset.jpeg" alt="" />
            <img src="image-asset (1).jpeg" alt="" />
            <img src="image-asset (2).jpeg" alt="" />
            <img src="image-asset (3).jpeg" alt="" />
          </div>
        </div>
        <div className={style["second"]}>
          <div className={style["left"]}>
            <div className={style["btn"]}>
              <button>HOP ON OUR EMAIL LIST</button>
            </div>

            <img src="Signature_a.png" alt="" />
          </div>
          <div className={style["rigth"]}>
            <FaInstagram />
            <FaFacebookF />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page_P;
