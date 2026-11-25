import AnchorButton from "../components/AnchorButton";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Footer from "../components/Footer";
import ProjectGrid from "../components/ProjectGrid";
import Popup from "../components/Popup";
import ContactButton from "../components/ContactButton";

export default function Home() {
  return (
    <>
      <video
        className="unmoving-background fade-in-on-load-after"
        autoPlay
        muted
        loop
      >
        <source src="/unmoving_background.mkv" type="video/mp4" />
      </video>
      <Navbar />
      <main>
        <div className="two-pager">
          <video
            className="background-video fade-in-on-load"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/vid.mkv" type="video/mp4" />
          </video>
          <div className="main-page-header animate-on-load">
            <div className="next-to-eachother">
              <h1>Adam Herger</h1>
              <Image
                className="profile"
                src={"/Foto.webp"}
                alt="profile picture"
                width={200}
                height={200}
                priority
              />{" "}
            </div>
            <h3>Computer Science Student</h3>
            <p>
              MSc CS Student @ TU Wien
              <br />
              BSc CS @ TU Wien
              <br /> <br />
              I'm a computer science student pursuing my MSc in Software
              Engineering at the Technical University of Vienna.
              <br /> <br />
              Feel free to contact me!
            </p>
            <div className="content-holder">
              <AnchorButton
                id="projects"
                text={"Explore Projects"}
              ></AnchorButton>
              <ContactButton id="contact" text={"Contact"}></ContactButton>
            </div>
          </div>
        </div>
        <ProjectGrid />
        <Popup text="Email address copied!" />
      </main>
      <Footer />
    </>
  );
}
