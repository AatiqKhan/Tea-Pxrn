import React, { useState } from "react";

import MenuForm from "./menuForm";
import { useDeleteMenu } from "./useDeleteMenu";

export default function MenuRow({ menuItem }) {
  const [showForm, setShowForm] = useState(false);

  const { id, item, price, description } = menuItem;
  const { isLoading, deleteMenu } = useDeleteMenu();

  ///////////////////////////////////////////////////////////////////////////

  return (
    <>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div>{item}</div>
        <div>{price}</div>
        <div>{description}</div>
        <div>
          <button onClick={() => setShowForm((show) => !show)}>Edit</button>
          <button
            onClick={() => {
              deleteMenu(id);
            }}
            disabled={isLoading}
          >
            Delete
          </button>
        </div>
      </div>
      {showForm && <MenuForm menuEdit={menuItem} />}
    </>
  );
}
