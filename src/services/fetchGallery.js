import { sanityClient } from "../sanity/sanityClient";

export const fetchGalleryItems = async () => {
  try {
    console.log("Fetching data from Gallery/Sanity...");
    const query = `*[_type == "gallery"]{
        image,
        altText,
        likes,
        
      }`;
    const data = await sanityClient.fetch(query);
    console.log("Gallery Data fetched:", data); // Add this line
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
