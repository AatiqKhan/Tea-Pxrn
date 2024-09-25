import React from "react";
import style from "./navigation.module.css";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className={style.navs}>
      <ul>
        <li>
          <NavLink to={"/menu"}>MENU</NavLink>
        </li>
        <li>|</li>
        <li>|</li>
        <li>
          <a href="">
            STORE <span>(opening soon...)</span>
          </a>
        </li>
        <li>|</li>
        <li>|</li>
        <li>
          <a href="">REVIEW</a>
        </li>
      </ul>
    </nav>
  );
}
