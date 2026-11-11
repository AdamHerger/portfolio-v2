import Project from "./Project";

function ProjectGrid() {
  return (
    <>
      <div id="projects" className="project-grid">
        <Project
          image="/Foto.webp"
          text="texts text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text "
        />
        <Project image="/well.webp" text="text text text " />
        <Project image="/Foto.webp" text="text text text " />
        <Project image="/well.webp" text="text text text " />
      </div>
    </>
  );
}
export default ProjectGrid;
