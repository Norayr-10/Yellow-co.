"use client";
import { FC } from "react";
import style from "./Footer.module.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";

const Footer: FC = () => {
  return (
    <div className={style["formed"]}>
      <div className={style["container"]}>
        <div className={style["left"]}>
          <span>
            <FaInstagram />
            <FaFacebookF />
          </span>
          <p>INSTAGRAM ••• FACEBOOK ••• MEMBER LOGIN ••• contact</p>
          <p>copyright yellow co. 2024</p>
        </div>
        <div className={style["right"]}>
          <p>SPREAD GOODNESS AND BLOOM YOU GOT THIS.</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
