import Image from "next/image";
import { Button } from "@mui/material";

const photo = "/assets/self-photo.jpg";

const About = () => {
  return (
    <div id="about">
      <div className="about-section-1">
        <h2 className="card-title">About Me</h2>
        <p>
          As an elder Millennial, I grew up observing the evolution of the
          internet (remember dial-up?), which I&apos;ve always found
          fascinating. I began my web development journey in April 2018, and
          I&apos;ve been working to hone my skills ever since. I graduated
          Eleven Fifty Academy&apos;s Web Development bootcamp in October 2021,
          and I&apos;m always working on a project while I search for the right
          junior developer role for me.
        </p>
        <p>
          I&apos;m a highly motivated web developer with proficiency in
          front-end technologies and stellar project management skills who is
          eager to contribute to company efforts through hard work, effective
          communication, and creative problem-solving. What I lack in knowledge,
          I make up for in grit and the ability to learn new things at an
          alarmingly fast rate.
        </p>
        <p>
          When I&apos;m not changing the world one line of code at a time, I
          enjoy listening to music - ranging from classic rock to EDM or
          watching some of my favorite shows - like Supernatural or Sherlock.
        </p>
        <p>
          Some of my most notable achievements include being the best (and only)
          daughter to my wonderful mother, winning bronze medal in my 4th grade
          spelling bee, and using my turn signal on a regular basis.
        </p>
        <Button
          className="btn btn-primary about-btn"
          href="/assets/simes-cherron-resume.pdf"
          target="_blank"
          variant="contained"
        >
          View Resume
        </Button>
      </div>
      <div className="about-section-2">
        <Image
          className="self-photo"
          src={photo}
          alt="cherron selfie"
          width="550"
          height="1048"
        />
      </div>
    </div>
  );
};

export default About;
