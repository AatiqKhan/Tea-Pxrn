import { NavLink } from "react-router-dom";
import style from "./gallery.module.css";
import { TiArrowRight } from "react-icons/ti";
import Slider from "./slider";

export default function Gallery() {
  return (
    <>
      <h1 className={style.heading}>
        <NavLink to={"./gallery"} className={style.navlink}>
          Explore Our Gallery <TiArrowRight />
        </NavLink>
      </h1>
      <Slider />
    </>
  );
}
