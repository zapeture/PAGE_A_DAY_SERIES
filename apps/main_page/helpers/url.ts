export const sanityUrlBuilder = (resource: string) => {
  if (!resource) {
    throw new Error("resource is required");
  }
  
  const { NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_VERSION, NEXT_PUBLIC_SANITY_DATASET } = process.env;
  return `https://${NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/${NEXT_PUBLIC_SANITY_VERSION}/data/query/${NEXT_PUBLIC_SANITY_DATASET}?query=*%5B_type+%3D%3D+%22${resource}%22%5D`;
};
