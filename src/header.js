import React from "react";
import style from "./header.module.css";
import { NavLink } from "react-router-dom";

export default function Header({ source, altText }) {
  return (
    <div className={style.container}>
      {source && (
        <div className={style.box}>
          <div className={style.imagewrapper}>
            <NavLink to={"/"}>
              <img src={source} alt={altText} />
            </NavLink>
          </div>
        </div>
      )}
      <div className={style.link}>
        <NavLink to={"/"} className={style.navlink}>
          HOME
        </NavLink>
        <NavLink to={"/menu"} className={style.navlink}>
          MENU
        </NavLink>
        <NavLink to={"/gallery"} className={style.navlink}>
          GALLERY
        </NavLink>
        <NavLink to={"/store"} className={style.navlink}>
          STORE
        </NavLink>
      </div>
    </div>
  );
}
