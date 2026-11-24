import Project from "./Project";

function ProjectGrid() {
  return (
    <>
      <div id="projects" className="project-grid">
        <Project
          content="/ffc_better.mp4"
          text="The FFC visualization tool is a web-based, interactive, highly filterable force-directed node graph intended to visualize the film festival circuit."
          type="video"
          link="https://github.com/AdamHerger/ffcvisualization"
        />
        <Project content="/well.webp" text="text text text " type="image" />
        <Project
          content="/tomb style.webp"
          text="text text text "
          type="image"
        />
        <Project content="/well.webp" text="text text text " type="image" />
      </div>
    </>
  );
}
export default ProjectGrid;
