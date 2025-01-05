import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const sanityClient = createClient({
  projectId: "6ca3ud2k",
  dataset: "production",
  apiVersion: "2024-11-21",
  useCdn: true,
  token: import.meta.env.VITE_ADMIN_SANITY_TOKEN,
});

const builder = imageUrlBuilder(sanityClient);
export const urlFor = (source) => builder.image(source);
