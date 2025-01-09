import React from "react";

export default function GalleryItemRow({ item }) {
  const { image_url, likes_count } = item;
  //   // deleting from supaBase
  //   const { isLoading, mutate } = useMutation({
  //     mutationFn: deleteMenuItem,
  //     onSuccess: () => {
  //       queryClient.invalidateQueries({ queryKey: ["menu"] }); // Refresh 'menu' query after deletion
  //       toast.success("deleted an item from menu");
  //     },
  //     onError: (error) => toast.error(error.message), // Handle errors
  //   });

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <img src="{image_url" />
      <div>{likes_count}</div>
      <button
      // onClick={() => {
      //   mutate(id);
      // }}
      // disabled={isLoading}
      >
        Delete
      </button>
    </div>
  );
}
