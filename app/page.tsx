import Button from "../components/Button";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Footer from "../components/Footer";
import ProjectGrid from "../components/ProjectGrid";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <div className="two-pager">
          <div className="main-page-header">
            <h1>Adam Herger</h1>
            <h3>Computer Science Student</h3>
            <p>
              I'm a computer science student pursuing my MSc in Software
              Engineering at the Technical University of Vienna.
              <br /> <br />
              Feel free to contact me!
            </p>
            <div className="content-holder">
              <Button id="projects" text={"Explore Projects"}></Button>
              <Button id="contact" text={"Contact"}></Button>
            </div>
          </div>
          <div className="profile">
            <Image
              className="image"
              src={"/Foto.png"}
              width={300}
              height={300}
              alt="profile picture"
              priority
            />
          </div>
        </div>
        <ProjectGrid />
      </main>
      <Footer />
    </>
  );
}
