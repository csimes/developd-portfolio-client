import type { NextPage } from "next";
import Intro from "../pages/home/intro";
import About from "../pages/home/about";
import Skills from "../pages/home/skills";
import Projects from "../pages/home/projects";
import Contact from "../pages/home/contact";

const Home: NextPage = () => {
  return (
    <div>
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
