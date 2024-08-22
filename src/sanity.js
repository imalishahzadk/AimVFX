import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "4dfncpx7", // Your project ID
  dataset: "production", // Your dataset name, usually 'production'
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: "2023-06-28", // Use a specific API version
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

// Function to get asset URL
export function assetUrlFor(source) {
  if (!source || !source.asset || !source.asset._ref) {
    return "";
  }
  const assetId = source.asset._ref.split("-")[1];
  return `https://cdn.sanity.io/files/${client.config().projectId}/${
    client.config().dataset
  }/${assetId}.${source.asset._ref.split("-")[2]}`;
}

export default client;
