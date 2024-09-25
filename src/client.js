import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "wobw3egn",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

//export const urlFor = (source) => builder.image(source);

export function urlFor(source) {
  return builder.image(source);
}

export default client;
