import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { deleteMenuItem } from "../../services/fetchMenu";
import MenuForm from "./menuForm";

export default function MenuRow({ menuItem }) {
  const [showForm, setShowForm] = useState(false);

  const { id, item, price, description } = menuItem;
  const queryClient = useQueryClient();

  // deleting from supaBase
  const { isLoading, mutate } = useMutation({
    mutationFn: deleteMenuItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["menu"] }); // Refresh 'menu' query after deletion
      toast.success("deleted an item from menu");
    },
    onError: (error) => toast.error(error.message), // Handle errors
  });

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
              mutate(id);
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
