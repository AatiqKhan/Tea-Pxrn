import React from "react";
import { NavLink } from "react-router-dom";

export default function Mainnav() {
  return (
    <nav>
      <ul className="flex flex-col gap-2">
        <li>
          <NavLink to="/admin/orders"> Orders</NavLink>
        </li>
        <li>
          <NavLink to="/admin/menu"> Menu</NavLink>
        </li>
        <li>
          <NavLink to="/admin/gallery"> Gallery</NavLink>
        </li>
        <li>
          <NavLink to="/admin/users"> Users</NavLink>
        </li>
      </ul>
    </nav>
  );
}
