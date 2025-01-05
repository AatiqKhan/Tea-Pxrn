import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-hot-toast";
import { deleteMenuItem } from "../../services/fetchMenu";

export default function MenuRow({ menuItem }) {
  const { id, item, price, description } = menuItem;
  console.log("hello world", item);
  const queryClient = useQueryClient();

  //adding to sanity
  // const mutation = useMutation(addItem, {
  //   onSuccess: () => {
  //     queryClient.invalidateQueries("menuItems"); // Refetch updated data
  //   },
  // });

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
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      <div>{item}</div>
      <div>{price}</div>
      <div>{description}</div>

      <button
        onClick={() => {
          mutate(id);
        }}
        disabled={isLoading}
      >
        Delete
      </button>
    </div>
  );
}
//onClick={() => mutate(title)} disabled={isLoading}>
