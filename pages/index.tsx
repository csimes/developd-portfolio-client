import type { NextPage } from "next";
import Intro from "./home/intro";
import About from "./home/about";
import Skills from "./home/skills";
import Projects from "./home/projects";
import Contact from "./home/contact";

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
