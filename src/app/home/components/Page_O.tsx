"use client";
import { FC } from "react";
import style from "../style/page_O.module.css";
const Page_O: FC = () => {
  return (
    <div className={style["formed"]}>
      <div className={style["container"]}>
        <div className={style["image"]}>
          <img src="Screen+Shot_image_3.png" alt="" />
        </div>
        <div className={style["description"]}>
          <div className={style["image_B"]}>
            <img src="Line-Separator-3.png" alt="" />
          </div>
          <div className={style["about_image"]}>
            <div className={style["left"]}>
              <p>yellow co.</p>
            </div>
            <div className={style["right"]}>
              Whether you join us for one of our annual conferences, our digital
              membership platform, dive in deep by joining a Yellow Guidance
              Group, or simply leave us a comment on our Instagram, our hope is
              that you will get a bit more in touch with who you are and the
              meaningful work you were called to create in the world. If you’re
              ready to dive in, we’d love to have you a part of the community.
              Let’s come together to make the world better.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page_O;
