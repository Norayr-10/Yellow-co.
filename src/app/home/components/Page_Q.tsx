"use client";
import { FC } from "react";
import style from "../style/page_Q.module.css";
const Page_Q: FC = () => {
  return (
    <div className={style["formed"]}>
      <div className={style["container"]}>
        <div className={style["up"]}>
          <div className={style["content"]}>
            <p>Podcast</p>
            <p>Experience Design Services</p>
            <p>Blog</p>
            <p>Our Story</p>
          </div>
          <div className={style["content"]}>
            <p>Core Values</p>
            <p>What We Do</p>
            <p>Our Impact</p>
            <p>Our Vision</p>
          </div>
          <div className={style["content"]}>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Disclaimer</p>
            <p>Contact</p>
          </div>
        </div>
        <div className={style["down"]}>
          <div className={style["btn"]}>
            <button>MEMBER LOGIN</button>
          </div>
          <div className={style["signature"]}>
            <img src="Signature_a.png" alt="" />
          </div>
          <div className={style["article"]}>
            <p>BOOK OUR FOUNDER, JOANNA WATERFALL TO SPEAK AT YOUR NEXT </p>
            <p>EVENT! LEARN MORE HERE.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page_Q;
