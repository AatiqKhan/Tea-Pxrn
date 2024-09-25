import style from "./menufront.module.css";
import React from "react";
import { NavLink } from "react-router-dom";
import Button from "./button";
import { TiChevronRight } from "react-icons/ti";

export default function Menufront() {
  return (
    <div className={style.container}>
      <div className={style.menu}>
        <h1>MENU</h1>

        <div className={style.box}>
          <div className={style.item}>
            <h2 className={style.name}>Classic Tea</h2>

            <h2>₹15</h2>
          </div>

          <span className={style.para}>
            <p>Lorem ipsum omaiva mu shindeiro Nani !</p>
          </span>
        </div>

        <div className={style.box}>
          <div className={style.item}>
            <h2 className={style.name}>Classic Tea</h2>

            <h2>₹15</h2>
          </div>

          <span className={style.para}>
            <p>Lorem ipsum omaiva mu shindeiro Nani !</p>
          </span>
        </div>

        <div className={style.box}>
          <div className={style.item}>
            <h2 className={style.name}>Classic Tea</h2>

            <h2>₹15</h2>
          </div>

          <span className={style.para}>
            <p>Lorem ipsum omaiva mu shindeiro Nani !</p>
          </span>
        </div>

        <div className={style.box}>
          <div className={style.item}>
            <h2 className={style.name}>Classic Tea</h2>

            <h2>₹15</h2>
          </div>

          <span className={style.para}>
            <p>Lorem ipsum omaiva mu shindeiro Nani !</p>
          </span>
        </div>
        <Button>
          <NavLink to={"/menu"} className={style.navlink}>
            EXPLORE OUR MENU <TiChevronRight />
          </NavLink>
        </Button>
      </div>
    </div>
  );
}
