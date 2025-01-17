import React from "react";

import { useDeleteGallery } from "./useDeleteGallery";

export default function GalleryItemRow({ item }) {
  const { id, image, likes_count, alt_text } = item;
  const { isDeleting, deleteImage } = useDeleteGallery();
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      <div className="Class Properties block aspect-square w-24 -translate-x-[-10px] scale-100 transform object-cover object-center">
        <img src={image} alt={alt_text} />
      </div>
      <div>{alt_text}</div>
      <div>{likes_count}</div>
      <button
        onClick={() => {
          deleteImage(id);
        }}
        disabled={isDeleting}
      >
        Delete
      </button>
    </div>
  );
}
