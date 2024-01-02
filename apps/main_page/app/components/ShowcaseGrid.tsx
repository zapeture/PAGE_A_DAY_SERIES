import { getProjects } from "../../queries/projects";
import { Project, Projects } from "../../model/project";
import ShowcaseItem from "./ShowcaseItem";

export default async function ShowcaseGrid() {
  const projects = await getProjects() as Projects;
  return <section className="showcase-grid">
    {projects && projects.length > 0 && <div className="row row-gap-4">
      {projects.map((project: Project) => {
        return <ShowcaseItem project={project} key={project._id}/>;
      })}
    </div>}

  </section>;
}
