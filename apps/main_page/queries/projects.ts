import { Projects } from "../app/model/project";
import { sanityUrlBuilder } from "../helpers/url";

export const getProjects = async (): Promise<Projects> => {
    const projects = await fetch(sanityUrlBuilder("project"))
        .then((res) => res.json())
        .then((res) => res.result);
    return projects as Projects;
};
