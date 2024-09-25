import React from "react";
import { About } from "./about";
import { Footer } from "./footer";

import Gallery from "./gallery";
import Header from "./header";
import Logo from "./logo";
import Menu from "./menu";
import Review from "./review";
export function Main() {
  return (
    <>
      <Header />
      <Logo />
      <About />
      <Footer />
    </>
  );
}
