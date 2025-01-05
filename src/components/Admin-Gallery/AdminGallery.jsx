import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchGalleryItems } from "../../services/fetchGallery";

export default function AdminGallery() {
  const x = useQuery({
    queryKey: ["gallery"],
    queryFn: fetchGalleryItems,
  });
  console.log("gggggg", x);
  return (
    <div>
      <h1>Gallery</h1>
    </div>
  );
}
