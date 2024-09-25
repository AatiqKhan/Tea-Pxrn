import React from "react";
import style from "./exploremenu.module.css";
import client from "./client.js";
import { useEffect, useState } from "react";

export default function Exploremenu() {
  const [items, setitems] = useState(null);
  /*  useEffect(() => {
    client
      .fetch(
        `*[_type == "menu"]{
      name,description,price
    }`
      )
      .then((data) => setitem(data))
      .catch(console.error);
  }, []); */

  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == "menu"]{name,description,price}`;
      try {
        const result = await client.fetch(query);
        console.log("menu effect", result);
        setitems(result);
        console.log("menu effect");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className={style.header}>
        <h1 className={style.head}>EXPLORE OUR MENU</h1>
      </div>
      <div className={style.container}>
        <div className={style.grid}>
          {items &&
            items.map((item, index) => (
              <div className={style.box} key={index}>
                <div className={style.item}>
                  <h2 className={style.name}>{item.name}</h2>
                  <div className={style.line}></div>
                  <h2>₹{item.price}</h2>
                </div>
                <span className={style.para}>
                  <p>{item.description}</p>
                </span>
              </div>
            ))}
          {/* 
          <div className={style.box}>
            <div className={style.item}>
              <h2 className={style.name}>Classic Tea</h2>
              <div className={style.line}></div>
              <h2>₹15</h2>
            </div>
            <span className={style.para}>
              <p>Lorem ipsum omaiva mu shindeiro Nani !</p>
            </span>
          </div>

          <div className={style.box}>
            <div className={style.item}>
              <h2 className={style.name}>Classic Tea</h2>
              <div className={style.line}></div>
              <h2>₹15</h2>
            </div>
            <span className={style.para}>
              <p>Lorem ipsum omaiva mu shindeiro Nani !</p>
            </span>
          </div>

          <div className={style.box}>
            <div className={style.item}>
              <h2 className={style.name}>Classic Tea</h2>
              <div className={style.line}></div>
              <h2>₹15</h2>
            </div>
            <span className={style.para}>
              <p>Lorem ipsum omaiva mu shindeiro Nani !</p>
            </span>
          </div>

          <div className={style.box}>
            <div className={style.item}>
              <h2 className={style.name}>Classic Tea</h2>
              <div className={style.line}></div>
              <h2>₹15</h2>
            </div>
            <span className={style.para}>
              <p>Lorem ipsum omaiva mu shindeiro Nani !</p>
            </span>
          </div>

          <div className={style.box}>
            <div className={style.item}>
              <h2 className={style.name}>Classic Tea</h2>
              <div className={style.line}></div>
              <h2>₹15</h2>
            </div>
            <span className={style.para}>
              <p>Lorem ipsum omaiva mu shindeiro Nani !</p>
            </span>
          </div>

          <div className={style.box}>
            <div className={style.item}>
              <h2 className={style.name}>Classic Tea</h2>
              <div className={style.line}></div>
              <h2>₹15</h2>
            </div>
            <span className={style.para}>
              <p>Lorem ipsum omaiva mu shindeiro Nani !</p>
            </span>
          </div>

          <div className={style.box}>
            <div className={style.item}>
              <h2 className={style.name}>Classic Tea</h2>
              <div className={style.line}></div>
              <h2>₹15</h2>
            </div>
            <span className={style.para}>
              <p>Lorem ipsum omaiva mu shindeiro Nani !</p>
            </span>
          </div>

          <div className={style.box}>
            <div className={style.item}>
              <h2 className={style.name}>Classic Tea</h2>
              <div className={style.line}></div>
              <h2>₹15</h2>
            </div>
            <span className={style.para}>
              <p>Lorem ipsum omaiva mu shindeiro Nani !</p>
            </span>
          </div>

          <div className={style.box}>
            <div className={style.item}>
              <h2 className={style.name}>Classic Tea</h2>
              <div className={style.line}></div>
              <h2>₹15</h2>
            </div>
            <span className={style.para}>
              <p>Lorem ipsum omaiva mu shindeiro Nani !</p>
            </span>
          </div>

          <div className={style.box}>
            <div className={style.item}>
              <h2 className={style.name}>Classic Tea</h2>
              <div className={style.line}></div>
              <h2>₹15</h2>
            </div>
            <span className={style.para}>
              <p>Lorem ipsum omaiva mu shindeiro Nani !</p>
            </span>
          </div> */}
        </div>
      </div>
    </>
  );
}
