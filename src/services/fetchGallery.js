import supabase from "./supabase";

// fetching gallery items
export const fetchGalleryItems = async () => {
  const { data, error } = await supabase.from("gallery").select("*");

  if (error) {
    console.error(error);
    throw new Error("menu could not be loaded");
  }
  return data;
};
