"use client";

import { FC } from "react";
import style from "./menu.module.css";
import Link from "next/link";
const Menu: FC = () => {
  return (
    <div className={style["formed"]}>
      <div className={style["container"]}>
        <p className={style["hide"]}>MENU</p>
        <p className={style["title"]}>Yellow co.</p>
        <div className={style["right"]}>
          <Link
            href={"https://yellowco.co/podcast"}
            className={style["link_A"]}
          >
            PODCASR
          </Link>
          <Link href={"https://yellowco.co/blog"} className={style["link_A"]}>
            BLOG
          </Link>
          <Link
            href={"https://yellowco.co/member-login"}
            className={style["link_A"]}
          >
            LOGIN
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Menu;
