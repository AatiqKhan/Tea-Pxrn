import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import style from "./slider.module.css";

export default function Slider() {
  const images = [
    "menu/image11.jpeg",
    "menu/image12.jpeg",
    // "slider/image3.jpg",
    //  "slider/image4.jpg",
    "menu/image13.jpeg",
    "menu/sugg2b.jpeg",
    "menu/image3.jpeg",
  ];
  const splideoptions = {
    perPage: 5,
    perMove: 1,
    drag: "free",
    snap: true,
    arrows: false,
    pagination: false,
    type: "loop",
    autoWidth: true,
    autoHeight: true,
    breakpoints: {
      640: {
        perPage: 2,
      },
    },
  };
  return (
    <div className={style.container}>
      <Splide
        options={splideoptions}
        aria-label="My Favorite Images"
        className={style.splidebox}
      >
        {images.map((image, index) => (
          <SplideSlide className={style.slides}>
            <img src={image} alt={image.alt} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
