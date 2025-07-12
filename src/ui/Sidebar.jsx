import React from "react";
import LogOut from "../features/authentication/logOut";
import Mainnav from "./Mainnav";

export default function Sidebar() {
  return (
    <>
      <div className="row-span-full border-r-2 border-gray-100 bg-white">
        <h1>SIDEBAR</h1>
        <Mainnav />
        <LogOut />
      </div>
    </>
  );
}
