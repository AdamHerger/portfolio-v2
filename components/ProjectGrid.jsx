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
        <Project
          content="/youtube_demo.mp4"
          text="Created graphic design video tutorials, achieving 4 Million+ views and growing the channel to 15.5 Thousand subscribers.
Commissioned by companies such as Wix.com for sponsored videos."
          type="video"
          link="https://www.youtube.com/@TheFrozenFractal"
        />
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
