import React from "react";
// import { useFetchGallery } from "../components/Admin-Gallery/useFetchGallery";
import MasonaryLayout from "../components/Gallery/masonaryLayout";
import Header from "../ui/Header";
// import LoadingScreen from "../ui/LoadingScreen";

// const GalleryPreviewImg = ["img1.jpeg", "img2.jpeg", "img3.jpeg", "img4.jpeg"];

export const galleryImages = Array.from(
  { length: 25 },
  (_, i) => `/Gallery/image${i + 1}.jpeg`,
);

export default function Gallery() {
  // const { isLoading, item, error } = useFetchGallery();

  // if (isLoading) return <LoadingScreen />;
  // if (error) return <p className="text-red-600">Error: {error.message}</p>;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="mx-auto max-w-5xl px-4 py-20">
        <h1 className="mb-16 text-center text-4xl font-light tracking-wider text-coffee-dark">
          GALLERY
        </h1>
        <MasonaryLayout item={galleryImages} />
      </main>
      <footer className="mt-20 bg-coffee-dark py-8 text-cream">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <p className="text-sm text-cream/60">
            Enjoy our curated moments. All images are property of Cafe Bliss.
          </p>
        </div>
      </footer>
    </div>
  );
}
