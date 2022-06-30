import logo from "../../assets/transparent.png";

const Intro = () => {
  return (
    <div className="hero">
      <div className="intro">
        <img className="logo" src={logo} alt="" />
        <h1>Hey, I'm </h1>
        <h1 className="name">Cherron!</h1>
        <h1>Web Developer and owner of</h1> <h1 className="name">developd.</h1>
      </div>
    </div>
  );
};
export default Intro;
