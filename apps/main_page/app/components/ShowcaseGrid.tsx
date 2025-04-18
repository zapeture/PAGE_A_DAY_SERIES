import { getProjects } from "../../queries/projects";
import { Project, Projects } from "../../model/project";
import ShowcaseItem from "./ShowcaseItem";

export default async function ShowcaseGrid() {
  const projects = (await getProjects()) as Projects;

  const sortedProjects = projects.sort((a: Project, b: Project) => {
    if (a.status === "live" && b.status !== "live") {
      return -1;
    } else if (a.status !== "live" && b.status === "live") {
      return 1;
    } else {
      return 0;
    }
  });

  const renderProjects = () => {
    if (sortedProjects && sortedProjects.length > 0) {
      return sortedProjects.map((project: Project) => (
        <ShowcaseItem project={project} key={project._id} />
      ));
    }
    return null;
  };

  return (
    <section className="showcase-grid">
      <div className="row row-gap-4">{renderProjects()}</div>
    </section>
  );
}
