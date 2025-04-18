export const sanityUrlBuilder = (resource: string) => {
  if (!resource || typeof resource !== "string") {
    throw new Error("Valid resource (string) is required");
  }

  const {
    NEXT_PUBLIC_SANITY_PROJECT_ID,
    NEXT_PUBLIC_SANITY_VERSION,
    NEXT_PUBLIC_SANITY_DATASET,
  } = process.env;

  if (
    !NEXT_PUBLIC_SANITY_PROJECT_ID ||
    !NEXT_PUBLIC_SANITY_VERSION ||
    !NEXT_PUBLIC_SANITY_DATASET
  ) {
    throw new Error("All required environment variables must be set");
  }

  const encodedResource = encodeURIComponent(resource);
  return `https://${NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/${NEXT_PUBLIC_SANITY_VERSION}/data/query/${NEXT_PUBLIC_SANITY_DATASET}?query=*%5B_type+%3D%3D+%22${encodedResource}%22%5D`;
};
