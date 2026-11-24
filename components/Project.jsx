import Image from "next/image";

function Project({ text, content, type, link }) {
  if (type === "image") {
    return (
      <>
        <div className="project animate-on-scroll">
          <a target="_blank" href={link}>
            <Image
              className="project-image"
              src={content}
              alt="profile picture"
              width={1000}
              height={1000}
              loading="lazy"
            />
          </a>
          <div className="project-text">{text}</div>
        </div>
      </>
    );
  } else if (type === "video") {
    return (
      <>
        <div className="project animate-on-scroll">
          <a target="_blank" href={link}>
            <video
              className="project-image"
              autoPlay
              muted
              loop
              playsInline
              loading="lazy"
            >
              <source src={content} type="video/mp4" />
            </video>
          </a>
          <div className="project-text">{text}</div>
        </div>
      </>
    );
  } else {
    return <></>;
  }
}
export default Project;
