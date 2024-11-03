"use client";
import { FC } from "react";
import style from "../style/page_D.module.css";

const Page_D: FC = () => {
  return (
    <div className={style["formed"]}>
      <div className={style["container"]}>
        <div className={style["title_h1"]}>
          <h2> WE’RE CHANGING THE WAY WOMEN WORK</h2>{" "}
        </div>
        <div className={style["title_h3"]}>
          <h3>FOR WOMEN WHO CARE NOT ONLY ABOUT WHAT</h3>
          <h3>THEY’RE BUILDING, BUT WHO THEY’RE BECOMING.</h3>
        </div>
        <div className={style["title_p"]}>
          <p>
            At Yellow Co, we care about who you are as a human being AND how you
            express yourself through your work. Work culture today wasn’t
            created by us or for us. So we’re creating our own. Spaces where our
            whole selves are considered and offered space to thrive. Join us and
            allow us to support you as you create your most meaningful work and
            build a life you love.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Page_D;
