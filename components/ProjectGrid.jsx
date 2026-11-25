import Project from "./Project";
import Json from "../public/project_info.json";

function ProjectGrid() {
  return (
    <>
      <div id="projects" className="project-grid">
        {Json.projects.map((project) => (
          <Project
            key={project.title}
            content={project.content}
            text={project.description}
            type={project.type}
            link={project.link}
          />
        ))}
      </div>
    </>
  );
}
export default ProjectGrid;
