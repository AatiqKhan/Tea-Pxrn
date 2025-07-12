import React from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "./adminHeader";
//import Header from "./Header";
import Sidebar from "./Sidebar";

export default function AdminLayout() {
  return (
    <div className="grid h-screen grid-cols-[26rem_1fr] grid-rows-[auto_1fr]">
      {/* <Header /> */}
      <AdminHeader />
      <Sidebar />
      <main className="overflow-scroll bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
}
