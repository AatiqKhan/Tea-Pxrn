import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteGalleryItem } from "../../services/fetchGallery";

export default function GalleryItemRow({ item }) {
  const { id, image_url, likes_count, alt_text } = item;
  const queryClient = useQueryClient();

  // deleting from supaBase
  const { isLoading, mutate } = useMutation({
    mutationFn: deleteGalleryItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["gallery"] }); // Refresh 'gallery' query after deletion
      toast.success("deleted an image from Gallery");
    },
    onError: (error) => toast.error(error.message), // Handle errors
  });

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      <div className="Class Properties block aspect-square w-24 -translate-x-[-10px] scale-100 transform object-cover object-center">
        <img src={image_url} alt={alt_text} />
      </div>
      <div>{alt_text}</div>
      <div>{likes_count}</div>
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
