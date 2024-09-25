import React from "react";

import style from "./gallerysection.module.css";
import Header from "./header";
import Masonrysection from "./masonrysection";

export default function Gallerysection() {
  return (
    <>
      <Header source="/logo2.png" altText="teapxrn" />
      <Masonrysection />
    </>
  );
}
