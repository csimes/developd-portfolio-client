import "./App.css";
import Intro from "./components/home/Intro";
import Nav from "./components/nav/Nav";
import ProjectIndex from "./components/projects/ProjectIndex";

const App = () => {
  return (
    <>
      <Nav />
      <div className="hero">
        <Intro />
        <ProjectIndex />
      </div>
    </>
  );
};

export default App;
