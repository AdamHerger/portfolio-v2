import Project from "./Project";

function ProjectGrid() {
  return (
    <>
      <div id="projects" className="project-grid">
        <Project
          image="/Foto.png"
          text="text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text "
        />
        <Project image="/well.png" text="text text text " />
        <Project image="/Foto.png" text="text text text " />
        <Project image="/well.png" text="text text text " />
      </div>
    </>
  );
}
export default ProjectGrid;
