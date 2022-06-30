import "./App.css";
import About from "./components/home/About";
import Intro from "./components/home/Intro";
import Nav from "./components/nav/Nav";
import ProjectIndex from "./components/projects/ProjectIndex";

const App = () => {
  return (
    <div className="app">
      <Nav />
      <Intro />
      <About />
      <ProjectIndex />
    </div>
  );
};

export default App;
