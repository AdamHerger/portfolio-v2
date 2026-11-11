import Image from "next/image";

function Project({ text, image }) {
  return (
    <>
      <div className="project animate-on-scroll">
        <Image
          className="project-image"
          src={image}
          alt="profile picture"
          width={1000}
          height={1000}
        />
        <div className="project-text">{text}</div>
      </div>
    </>
  );
}
export default Project;
