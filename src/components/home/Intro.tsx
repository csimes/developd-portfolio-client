import { Button } from "@mui/material";
import logo from "../../assets/transparent.png";
import resume from "../../assets/simes-cherron-resume.pdf";
import photo from "../../assets/self-photo.jpg";

const Intro = () => {
  return (
    <>
      <div className="intro">
        <img className="logo" src={logo} alt="" />
        <h1>Hey, I'm </h1>
        <h1 className="name">Cherron!</h1>
        <h1>Web Developer and owner of</h1> <h1 className="name">developd.</h1>
      </div>

      <div className="blurb">
        <h2 className="card-title">About Me</h2>

        <p>
          As an elder Millennial, I grew up oberserving the evolution of the
          internet (remember dial-up?), which I've always found fascinating. I
          began my web development journey in April 2018, and I've been working
          to hone my skills ever since. I graduated Eleven Fifty Academy's Web
          Development bootcamp in October 2021, and I'm always working on a
          project while I search for the right junior developer role for me.
        </p>
        <p>
          I'm a highly motivated web developer with proficiency in front-end
          technologies and stellar project management skills who is eager to
          contribute to company efforts through hard work, effective
          communication, and creative problem-solving. What I lack in knowledge,
          I make up for in grit and the ability to learn new things at an
          alarmingly fast rate.
        </p>
        <p>
          When I'm not changing the world one line of code at a time, I enjoy
          listening to music - ranging from classic rock to EDM or watching some
          of my favorite shows - like Supernatural or Sherlock.
        </p>
        <p>
          Some of my most notable achievements include being the best (and only)
          daughter to my wonderful mother, winning bronze medal in my 4th grade
          spelling bee, and using my turn signal on a regular basis.
        </p>
      </div>
      <div id="about">
        <img
          className="self-photo"
          src={photo}
          alt="cherron with graduation cap and gown"
        />
        <Button
          href={resume}
          className="btn btn-primary about-btn"
          target="_blank"
        >
          View Resume
        </Button>
      </div>
      <div className="socials-group">
        <a href="https://github.com/csimes" target="_blank" rel="noreferrer">
          <img className="social" src="" alt="" />
        </a>
        <a
          href="https://www.linkedin.com/in/cherron-simes-1b016614b"
          target="_blank"
          rel="noreferrer"
        >
          <img className="social" src="" alt="" />
        </a>
      </div>
    </>
  );
};

export default Intro;
