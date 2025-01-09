import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchGalleryItems } from "../../services/fetchGallery";
import LoadingScreen from "../../ui/LoadingScreen";
import GalleryItemRow from "./GalleryItemRow";

export default function AdminGallery() {
  const {
    isLoading,
    data: item,
    error,
  } = useQuery({
    queryKey: ["gallery"],
    queryFn: fetchGalleryItems,
  });
  console.log("gggggg", item);

  if (isLoading) return <LoadingScreen />;
  if (error) return <p className="text-red-600">Error: {error.message}</p>;

  return (
    <div>
      <h1>Gallery</h1>
      <div className="overflow-hidden rounded-md border border-solid border-e-gray-500">
        <div>
          {item.map((item) => (
            <div>
              <GalleryItemRow item={item} key={item.id} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
