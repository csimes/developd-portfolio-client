import "./App.css";
import Intro from "./components/home/Intro";
import ProjectIndex from "./components/projects/ProjectIndex";

const App = () => {
  return (
    <div className="hero">
      <Intro />
      <ProjectIndex />
    </div>
  );
};

export default App;
