import Image from "next/image";
import { Button } from "@mui/material";
import styles from "../../styles/About.module.css";
const photo = "/assets/self-photo.jpg";

const About = () => {
  return (
    <div className="container" id="about">
      <h2 className="card-title">About Me</h2>
      <div className={styles.aboutSection}>
        <div className={styles.aboutText}>
          <p>
            As an elder Millennial, I grew up observing the evolution of the
            internet (remember dial-up?), which I&apos;ve always found
            fascinating. I began my web development journey in April 2018, and
            I&apos;ve been working to hone my skills ever since. I graduated
            Eleven Fifty Academy&apos;s Web Development bootcamp in October
            2021, and I&apos;m always working on a project while I search for
            the right junior developer role for me.
          </p>
          <p>
            I&apos;m a highly motivated web developer with proficiency in
            front-end technologies and stellar project management skills who is
            eager to contribute to company efforts through hard work, effective
            communication, and creative problem-solving. What I lack in
            knowledge, I make up for in grit and the ability to learn new things
            at an alarmingly fast rate.
          </p>
          <p>
            When I&apos;m not changing the world one line of code at a time, I
            enjoy listening to music - ranging from classic rock to EDM or
            watching some of my favorite shows - like Supernatural or Sherlock.
          </p>
          <p>
            Some of my most notable achievements include being the best (and
            only) daughter to my wonderful mother, winning bronze medal in my
            4th grade spelling bee, and using my turn signal on a regular basis.
          </p>
          <Button
            className={styles.aboutBtn}
            href="/assets/simes-cherron-resume.pdf"
            target="_blank"
            variant="contained"
          >
            View Resume
          </Button>
        </div>
        <div className={styles.aboutPhoto}>
          <Image
            className={styles.selfie}
            src={photo}
            alt="cherron selfie"
            layout="intrinsic"
            width="250"
            height="400"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
