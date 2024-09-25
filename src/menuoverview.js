import React from "react";
import style from "./menuoverview.module.css";

export default function Menuoverview() {
  return (
    <>
      <div className={style.header}>
        <h1 className={style.head}>COFFEE BUILD YOUR BASE</h1>
      </div>
      <div className={style.container}>
        <div className={style.left}>
          <div className={style.box}>
            <h3>Toasts</h3>
            <p>
              Reprehenderit ipsum pariatur consequat magna occaecat culpa
              tempor. Officia irure reprehenderit adipisicing consequat
              adipisicing et.
            </p>
          </div>
          <div className={style.box}>
            <h3>Snacks</h3>
            <p>
              Reprehenderit ipsum pariatur consequat magna occaecat culpa
              tempor. Officia irure reprehenderit adipisicing consequat
              adipisicing et.
            </p>
          </div>
          <div className={style.box}>
            <h3>Cakes</h3>
            <p>
              Reprehenderit ipsum pariatur consequat magna occaecat culpa
              tempor. Officia irure reprehenderit adipisicing consequat
              adipisicing et.
            </p>
          </div>
        </div>

        <div className={style.middle}>
          <img src="/menu/barista.jpg" alt="coffee cup" />
        </div>

        <div className={style.right}>
          <div className={style.box}>
            <h3> Morning Coffee</h3>
            <p>
              Reprehenderit ipsum pariatur consequat magna occaecat culpa
              tempor. Officia irure reprehenderit adipisicing consequat
              adipisicing et.
            </p>
          </div>
          <div className={style.box}>
            <h3>Coffee To Go</h3>
            <p>
              Reprehenderit ipsum pariatur consequat magna occaecat culpa
              tempor. Officia irure reprehenderit adipisicing consequat
              adipisicing et.
            </p>
          </div>
          <div className={style.box}>
            <h3>Tea</h3>
            <p>
              Reprehenderit ipsum pariatur consequat magna occaecat culpa
              tempor. Officia irure reprehenderit adipisicing consequat
              adipisicing et.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
