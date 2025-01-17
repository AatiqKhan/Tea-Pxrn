import { Button } from "@mui/material";

import React, { useState } from "react";

import AddSharpIcon from "@mui/icons-material/AddSharp";
import LoadingScreen from "../../ui/LoadingScreen";
import GalleryForm from "./GalleryForm";
import GalleryItemRow from "./GalleryItemRow";
import { useFetchGallery } from "./useFetchGallery";

export default function AdminGallery() {
  const [showForm, setShowForm] = useState(false);
  const { isLoading, item, error } = useFetchGallery();
  console.log("gggggg", item);

  if (isLoading) return <LoadingScreen />;
  if (error) return <p className="text-red-600">Error: {error.message}</p>;

  return (
    <div>
      <h1>Gallery</h1>
      <div>
        <Button
          onClick={() => setShowForm((show) => !show)}
          size="small"
          variant="outlined"
          startIcon={<AddSharpIcon />}
        >
          Add Image
        </Button>
        {showForm && <GalleryForm />}
      </div>
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
