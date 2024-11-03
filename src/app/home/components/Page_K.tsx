"use client";
import { FC, useEffect, useRef } from "react";
import style from "../style/page_K.module.css";

const Page_K: FC = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const videoElement = document.createElement("video");
    videoElement.src = "10.mp4";
    videoElement.controls = true;
    videoElement.className = style["video-style"]; 

    if (videoContainerRef.current) {
      videoContainerRef.current.appendChild(videoElement);
    }

    return () => {
      if (videoContainerRef.current) {
        videoContainerRef.current.innerHTML = "";
      }
    };
  }, []);

  return <div ref={videoContainerRef} className={style["formed"]}></div>; 
};

export default Page_K;
