"use client";
import { FC } from "react";
import style from "../style/page_N.module.css";
const Page_N: FC = () => {
  return (
    <div className={style["formed"]}>
      <div className={style["container"]}>
        <div className={style["title"]}>
          <p>— popular posts</p>
        </div>
        <div className={style["body"]}>
          <div className={style["description"]}>
            <div className={style["content"]}>
              <img src="Joanna_yellowco.jpg" alt="" />
              <p>
                A Letter from our Founder to the Yellow Conference Community{" "}
              </p>
            </div>
            <div className={style["content"]}>
              <img src="JessEkstromSpeaking_yellowco.jpeg" alt="" />
              <p>How to Become a Paid Keynote Speaker</p>
            </div>
            <div className={style["content"]}>
              <img src="Community_yellowco.jpg" alt="" />
              <p>Pepperdine Alumna Fulfilling Dreams & Creating New Ones</p>
            </div>
          </div>
          <div className={style["description"]}>
            <div className={style["content"]}>
              <img src="Screen_yellowco.png" alt="" />
              <p>
                Cafe Gratitude Coworkers Use This Practice with Each Other to
                Connect & Feel Seen
              </p>
            </div>
            <div className={style["content"]}>
              <img src="Screen+Shot_yellowco.png" alt="" />
              <p>
                How These Sisters Built an Eco-Friendly Laundromat That’s Making
                Us Never Look at Laundry the Same Way Again
              </p>
            </div>
            <div className={style["content"]}>
              <img src="Yellow_Enneagram_yellowco.jpg" alt="" />
              <p>
                How Your Enneagram Type Can Be Most Effective & Fulfilled at
                Work
              </p>
            </div>
          </div>
        </div>
        <div className={style["btn"]}>
          <button>HEAD OF THE BLOG</button>
        </div>
      </div>
    </div>
  );
};
export default Page_N;
