import supabase from "./supabase";

// fetching menu data
export const fetchMenuItems = async () => {
  const { data, error } = await supabase.from("menu").select("*");

  if (error) {
    console.error(error);
    throw new Error("menu could not be loaded");
  }
  return data;
};

// Delete a menu item
export async function deleteMenuItem(id) {
  const { data, error } = await supabase.from("menu").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("menu item could not be deleted");
  }
  return data;
}
// Create a new menu item
export async function addMenuItem(newItem) {
  const { data, error } = await supabase
    .from("menu")
    .insert([newItem])
    .select();

  if (error) {
    console.error(error);
    throw new Error("menu item could not be deleted");
  }
  return data;
}

// Update an existing menu item
