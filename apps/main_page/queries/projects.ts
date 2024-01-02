import { Projects } from "../model/project";
import { sanityUrlBuilder } from "../helpers/url";

export const getProjects = async (): Promise<Projects> => {
  try {

    const res = await fetch(sanityUrlBuilder("project"), { next: { revalidate: 600 } });

    if (!res.ok) {
      console.error("Fetching projects failed:", res.status);
    }
    const data = await res.json();

    return data.result as Projects;
  } catch (error) {
    console.error("Fetching projects failed:", error);
    throw error;
  }
};
