import Project from "./Project";

function ProjectGrid() {
  return (
    <>
      <div id="projects" className="project-grid">
        <Project
          image="/portfolio-v2/Foto.png"
          text="texts text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text "
        />
        <Project image="/portfolio-v2/well.png" text="text text text " />
        <Project image="/portfolio-v2/Foto.png" text="text text text " />
        <Project image="/portfolio-v2/well.png" text="text text text " />
      </div>
    </>
  );
}
export default ProjectGrid;
