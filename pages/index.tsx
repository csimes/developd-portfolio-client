import type { NextPage } from "next";
import Intro from "./home/intro";
import About from "./home/about";
import Skills from "./home/skills";

const Home: NextPage = () => {
  return (
    <div>
      <Intro />
      <About />
      <Skills />
    </div>
  );
};

export default Home;
