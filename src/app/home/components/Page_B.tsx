"use client";
import { FC, useState, useEffect } from "react";
import style from "../style/page_B.module.css";

const Page_B: FC = () => {
  const images = ["/b1.jpg", "/b2.jpg", "/b3.jpg", "/b4.jpg", "/b5.jpg"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  });

  return (
    <div className={style["formed"]}>
      <div
        className={style["container"]}
        style={{ backgroundImage: `url(${images[index]})` }}
      >
        {/* Add any additional content here */}
      </div>
    </div>
  );
};

export default Page_B;
