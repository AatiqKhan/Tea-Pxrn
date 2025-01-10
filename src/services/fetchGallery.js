import supabase from "./supabase";

// fetching gallery items
export const fetchGalleryItems = async () => {
  const { data, error } = await supabase.from("gallery").select("*");

  if (error) {
    console.error(error);
    throw new Error("Image could not be loaded");
  }
  return data;
};
// Delete a Gallery item
export async function deleteGalleryItem(id) {
  const { data, error } = await supabase.from("gallery").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Image could not be deleted");
  }
  return data;
}
