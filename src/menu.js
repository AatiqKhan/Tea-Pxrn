import React from "react";
import Exploremenu from "./exploremenu";
import { Footer } from "./footer";
import Header from "./header";
import Menuoverview from "./menuoverview";
import Picsection from "./picsection";
import Suggestions from "./suggestions";

export default function Menu() {
  return (
    <div>
      <Header source="/logo2.png" altText="teapxrn" />
      <Menuoverview />
      <Picsection />
      <Exploremenu />
      <Suggestions />
      <Footer />
    </div>
  );
}
