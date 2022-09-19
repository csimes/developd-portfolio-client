import type { NextPage } from "next";
import Intro from "./home/intro";
import About from "./home/about";
import Skills from "./home/skills";
import Projects from "./projects";

const Home: NextPage = () => {
  return (
    <div>
      <Intro />
      <About />
      <Skills />
      <Projects />
    </div>
  );
};

export default Home;
