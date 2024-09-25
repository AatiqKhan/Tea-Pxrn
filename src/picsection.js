import React from "react";
import style from "./picsection.module.css";

export default function Picsection() {
  return (
    <>
      <div class={style.container}>
        <div class={`${style.column} ${style.column1} `}>
          <div class={style.imagewrapper}>
            <img src="/menu/picsec1.jpeg" alt="Image 1" />
          </div>
        </div>
        <div class={`${style.column} ${style.column2} `}>
          <div class={style.imagewrapper}>
            <img src="/menu/picsec2.jpeg" alt="Image 1" />
          </div>
        </div>
        <div class={`${style.column} ${style.column3} `}>
          <div class={style.imagewrapper}>
            <img src="/menu/picsec3.jpeg" alt="Image 1" />
          </div>
          <div class={style.imagewrapper}>
            <img src="/menu/picsec4.jpeg" alt="Image 1" />
          </div>
        </div>
      </div>
    </>
  );
}
