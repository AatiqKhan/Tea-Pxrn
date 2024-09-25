import React from "react";
import style from "./button.module.css";

export default function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}
