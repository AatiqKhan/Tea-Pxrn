import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useState } from "react";
import { fetchMenuItems } from "../../services/fetchMenu";
import { Button } from "@mui/material";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import LoadingScreen from "../../ui/LoadingScreen";
import MenuForm from "./menuForm";
import MenuRow from "./MenuRow";

export default function AdminMenu() {
  const [showForm, setShowForm] = useState(false);

  const {
    //isPending,
    isLoading,
    data: menu,
    error,
  } = useQuery({
    staleTime: 0,

    queryKey: ["menu"],
    queryFn: fetchMenuItems,
  });
  console.log("xxxxx", menu);

  // if (isPending) return <LoadingScreen />;
  if (isLoading) return <LoadingScreen />;
  if (error) return <p className="text-red-600">Error: {error.message}</p>;
  return (
    <div>
      <h1>Menu</h1>
      <div className="overflow-hidden rounded-md border border-solid border-e-gray-500">
        <div className="grid grid-cols-1 items-center gap-x-2 border-b border-solid border-e-gray-600 px-5 py-3 md:grid-cols-2 lg:grid-cols-4">
          <div>ITEM</div>
          <div>PRICE</div>
          <div>DESCRIPTION</div>
        </div>

        <div>
          {menu.map((menuItem) => (
            <MenuRow menuItem={menuItem} key={menuItem.id} />
          ))}
        </div>
      </div>

      <div>
        <Button
          onClick={() => setShowForm((show) => !show)}
          size="small"
          variant="outlined"
          startIcon={<AddSharpIcon />}
        >
          Add Menu Item
        </Button>
        {showForm && <MenuForm />}
      </div>
    </div>
  );
}
