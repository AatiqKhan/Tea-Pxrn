import React from "react";
import style from "./logo.module.css";

function Logo() {
  return (
    <div className={style.container}>
      <img src="/logo.png" alt="teapxrn" className={style.logo} />
    </div>
  );
}
export default Logo;
