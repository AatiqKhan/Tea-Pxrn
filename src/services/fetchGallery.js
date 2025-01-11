import supabase, { supabaseUrl } from "./supabase";

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
// Create a new menu item
export async function addGalleryItem(newItem) {
  //https://nbxgeekxkelpbudaxoma.supabase.co/storage/v1/object/public/gallery_images/image3.jpeg
  const imageName = `${Math.random()}-${newItem.image.name}`.replaceAll(
    "/",
    "",
  );

  const imagePath = `${supabaseUrl}/storage/v1/object/public/gallery_images/${imageName}`;
  const { data, error } = await supabase
    .from("gallery")
    .insert([{ ...newItem, image: imagePath }]);

  if (error) {
    console.error(error);
    throw new Error("Image could not be deleted");
  }
  // Upload Image
  const { error: storageError } = await supabase.storage
    .from("gallery_images")
    .upload(imageName, newItem.image);

  //if error uploading image delete item
  if (storageError) {
    await supabase.from("gallery").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error("Image could not be updated and was deleted");
  }
  return data;
}
