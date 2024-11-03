"use client";
import { FC } from "react";
import style from "../style/Page_I.module.css";

const Page_I: FC = () => {
  return (
    <div className={style["formed"]}>
      <div className={style["container"]}>
        <div className={style["title"]}>
          <h2>
            <i>from the podcast</i>
          </h2>
        </div>
        <div className={style["description"]}>
          <div className={style["content"]}>
            <div className={style["image"]}>
              <img src="ts_pod1.jpeg" alt="" />
            </div>

            <h3>CHOOSING YOURSELF</h3>
            <p>
              <i>
                WITH DEEPTI VEMPATI, BREAKOUT STAR OF NETFLIX’S LOVE IS BLIND
              </i>
            </p>
            <button className={style["btn"]}>SEE EPISODE</button>
          </div>
          <div className={style["content"]}>
            <div className={style["image"]}>
              <img src="ts_pod-2.jpg" alt="" />
            </div>
            <h3>OWNING WHO YOU ARE (VS. WHO YOU THINK YOU SHOULD BE)</h3>
            <p>
              <i>
                WITH REVEREND NICOLE GARCIA, FIRST LATINA TRANS WOMAN ORDAINED
              </i>
            </p>
            <button className={style["btn"]}>SEE EPISODE</button>
          </div>
          <div className={style["content"]}>
            <div className={style["image"]}>
              <img src="ts_pod3.jpg" alt="" />
            </div>
            <h3>
              {" "}
              building a do-good brand that isn’t attached to your identity
            </h3>
            <p>
              <i>WITH AMYANN CADWELL, FOUNDER & CEO OF THE GOOD TRADE</i>
            </p>
            <button className={style["btn"]}>SEE EPISODE</button>
          </div>
        </div>
        <div className={style["footer_btn"]}>
          <div className={style["footer_image"]}>
            <img src="Signature_a.png" alt="" />
          </div>
          <button className={style["click"]}>VIEW MORE PODCAST EPISODES</button>
        </div>
      </div>
    </div>
  );
};
export default Page_I;
