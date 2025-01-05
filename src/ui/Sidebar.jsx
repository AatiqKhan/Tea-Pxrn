import React from "react";
import Mainnav from "./Mainnav";

export default function Sidebar() {
  return (
    <>
      <div className="row-span-full border-r-2 border-gray-100 bg-white">
        <h1>SIDEBAR</h1>
        <Mainnav />
      </div>
    </>
  );
}
