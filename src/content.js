import React, { useState } from "react";
import style from "./content.module.css";
import Button from "./button.js";
import { TiArrowSortedDown } from "react-icons/ti";
import { TiArrowSortedUp } from "react-icons/ti";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);

  const name = isReadMore ? (
    <span>
      Read more <TiArrowSortedDown />
    </span>
  ) : (
    <span>
      Show less <TiArrowSortedUp />
    </span>
  );
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className={style.text}>
      {isReadMore ? text.slice(0, 500) : text}
      <Button onClick={toggleReadMore} style={{ color: "green" }}>
        <span>{name}</span>
        {/* {isReadMore ? "...read more" : " show less"} */}
      </Button>
    </p>
  );
};

export default function Content() {
  return (
    <div className="container">
      {/* <h2> */}
      <ReadMore>
        Lorem enim reprehenderit cupidatat sint nisi commodo laboris.Quis tempor
        dolore ad anim do. Mollit consequat laboris aute ad est nulla ut magna
        culpa aliquip. Nisi eu reprehenderit amet eu eu in commodo deserunt.
        Esse velit incididunt ex minim ullamco officia reprehenderit qui est.
        Lorem esse nulla deserunt amet laboris eiusmod eu velit nisi nostrud
        voluptate id consequat dolor. Id aliqua sunt deserunt amet aute ullamco
        aliqua sint qui ipsum do consequat culpa. Labore ullamco consectetur
        culpa irure. Deserunt est consequat velit nulla occaecat veniam cillum
        ullamco consectetur culpa quis. Et in laboris in magna commodo laboris
        exercitation voluptate ut eu mollit. Sit deserunt nostrud sunt magna
        aliquip. Lorem aliquip non minim officia officia consectetur est
        adipisicing ullamco voluptate sunt duis. Consequat ea cupidatat sit elit
        deserunt ex ea excepteur. Sit eu pariatur aute exercitation tempor.
        Ipsum ea et reprehenderit ullamco labore laboris adipisicing ullamco
        tempor in magna ipsum irure est. Reprehenderit ipsum pariatur consequat
        magna occaecat culpa tempor. Officia irure reprehenderit adipisicing
        consequat irure non sunt ipsum consectetur veniam adipisicing et.
        GeeksforGeeks: A Computer Science portal for geeks. It contains well
        written, well thought and well explained computer science, programming
        articles and quizzes. It provides a variety of services for you to
        learn, so thrive and also have fun! Free Tutorials, Millions of
        Articles, Live, Online and Classroom Courses ,Frequent Coding
        Competitions, Webinars by Industry Experts, Internship opportunities,
        and Job Opportunities. Knowledge is power!
      </ReadMore>
      {/* </h2> */}
    </div>
  );
}
