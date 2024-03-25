import type { NextPage } from "next";
import Intro from "./home/intro";
import About from "./home/about";
import Skills from "./home/skills";
import Projects from "./home/projects";
import Contact from "./home/contact";
import Nav from "../components/nav";
import Footer from "../components/footer";

const Home: NextPage = () => {
  return (
    <div>
      <Nav />
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
