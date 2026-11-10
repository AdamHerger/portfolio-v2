import Button from "../components/Button";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
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
            <Button text={"Explore Projects"}></Button>
            <Button text={"Explore Projects"}></Button>
          </div>
        </div>
      </main>
    </>
  );
}
