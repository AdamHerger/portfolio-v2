import Project from "./Project";

function ProjectGrid() {
  return (
    <>
      <div id="projects" className="project-grid">
        <Project
          image="/tomb style.webp"
          text="texts text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text "
        />
        <Project image="/well.webp" text="text text text " />
        <Project image="/tomb style.webp" text="text text text " />
        <Project image="/well.webp" text="text text text " />
      </div>
    </>
  );
}
export default ProjectGrid;
