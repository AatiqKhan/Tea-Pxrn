import React from "react";
import { useEffect, useState } from "react";
import style from "./about.module.css";
import Gallery from "./gallery";
import Menufront from "./menufront";
import Navigation from "./navigation";
import Picsection from "./picsection";
import { useCollapse } from "react-collapsed";
import Button from "./button.js";
import Content from "./content";

export function About() {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
  const name = isExpanded ? "Collapse" : "Expand";

  return (
    <div className={style.container}>
      <section className={style.one}>
        <h3 className={style.qoute}>
          Tea Shop ( we sell cigerattes too but thats not the point ;){" "}
        </h3>
        <Content />
        {/* <p className={style.story}>
          lorem-ipsum.line Mollit do est voluptate sunt ipsum laboris elit
          excepteur in incididunt exercitation nisi ad. Occaecat tempor labore
          est quis occaecat nulla. Labore id sit magna magna elit. Culpa quis
          nostrud ea est velit nostrud cillum. Minim elit aliquip exercitation
          cillum.
          <Button
            {...getToggleProps({
              onClick: () => setExpanded(!isExpanded),
            })}
          >
            {name}
          </Button>
          <section {...getCollapseProps()}>
            Lorem enim reprehenderit cupidatat sint nisi commodo laboris.Quis
            tempor dolore ad anim do. Mollit consequat laboris aute ad est nulla
            ut magna culpa aliquip. Nisi eu reprehenderit amet eu eu in commodo
            deserunt. Esse velit incididunt ex minim ullamco officia
            reprehenderit qui est. Lorem esse nulla deserunt amet laboris
            eiusmod eu velit nisi nostrud voluptate id consequat dolor. Id
            aliqua sunt deserunt amet aute ullamco aliqua sint qui ipsum do
            consequat culpa. Labore ullamco consectetur culpa irure. Deserunt
            est consequat velit nulla occaecat veniam cillum ullamco consectetur
            culpa quis. Et in laboris in magna commodo laboris exercitation
            voluptate ut eu mollit. Sit deserunt nostrud sunt magna aliquip.
            Lorem aliquip non minim officia officia consectetur est adipisicing
            ullamco voluptate sunt duis. Consequat ea cupidatat sit elit
            deserunt ex ea excepteur. Sit eu pariatur aute exercitation tempor.
            Ipsum ea et reprehenderit ullamco labore laboris adipisicing ullamco
            tempor in magna ipsum irure est. Reprehenderit ipsum pariatur
            consequat magna occaecat culpa tempor. Officia irure reprehenderit
            adipisicing consequat irure non sunt ipsum consectetur veniam
            adipisicing et.
          </section>
        </p> */}
      </section>
      {/*   <Navigation /> */}
      <Picsection />
      <Menufront />
      <Gallery />
    </div>
  );
}
