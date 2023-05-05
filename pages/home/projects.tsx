import * as React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material/";
import styles from "../../styles/Projects.module.css";
const projectItems = {
  projects: [
    {
      name: "Digital Office",
      summary:
        "Digital Office was created to help users manage their time spent working. A user is able to register, login, create a profile, and do some simple time tracking, with the ability to view their entire history of timesheets and edit them as needed.",
      tech: "PostgreSQL, Express, React, Node.js, Supabase, Render",
      image: "/assets/digital-office.png",
      url: "https://time-tracking-client.onrender.com/",
      sourceCode: "https://github.com/csimes/time-tracking-client",
      inProgress: "true",
    },
    {
      name: "NASA API",
      summary:
        "This is my second project using an API. The NASA Astronomy Picture of the Day API was used to display a picture with the details about it. My favorite part of the page is the interactive animated background.",
      image: "/assets/nasa-api.png",
      tech: "HTML, CSS, JavaScript, API",
      url: "https://nasa-api-a53fa.web.app/",
      sourceCode: "https://github.com/csimes/nasa-api",
      inProgress: false,
    },
    {
      name: "Studio Ghibli API",
      summary:
        "This is my first project manipulating the DOM with Javascript, using an array method to populate the data, and using an API.",
      tech: "HTML, CSS, JavaScript, API",
      image: "/assets/studio-ghibli.png",
      url: "https://studioghibli-api.web.app/",
      sourceCode: "https://github.com/csimes/studio-ghibli-api",
      inProgress: false,
    },
    {
      name: "Portfolio v1",
      summary: "This is the original version of my portfolio.",
      tech: "HTML, CSS, JavaScript, API",
      image: "/assets/portfolio-v1.png",
      url: "https://csimes.github.io/portfolio/",
      sourceCode: "https://github.com/csimes/portfolio",
      inProgress: false,
    },
    {
      name: "Noah's Bark",
      summary: "This is a website I made for an imaginary animal sanctuary.",
      tech: "HTML, CSS",
      image: "/assets/noahs-bark.png",
      url: "https://csimes.github.io/noahs-bark/",
      sourceCode: "https://github.com/csimes/noahs-bark",
      inProgress: false,
    },
    {
      name: "Static Layout",
      summary:
        "This is a replication of part of the Hulu homepage as it appeared at the time.",
      tech: "HTML, CSS",
      image: "/assets/static-layout-hulu.png",
      url: "http://csimes.github.io/",
      sourceCode: "https://github.com/csimes/csimes.github.io",
      inProgress: false,
    },
    {
      name: "Contact Form",
      summary:
        "This is the first project I assigned to myself, a simple contact form.",
      tech: "HTML, CSS",
      image: "/assets/contact-form.png",
      url: "https://codepen.io/csimes/full/RJrppL",
      sourceCode: "https://codepen.io/csimes/pen/RJrppL",
      inProgress: false,
    },
    {
      name: "CSS Creature",
      summary:
        "This is my best attempt at drawing a cute baby chick using CSS.",
      tech: "HTML, CSS",
      image: "/assets/css-creature.png",
      url: "https://codepen.io/csimes/full/zYNEaOZ",
      sourceCode: "https://codepen.io/csimes/pen/zYNEaOZ",
      inProgress: false,
    },
    {
      name: "Tribute Page",
      summary:
        "This is the first small webpage I designed, dedicated to Ruth Bader Ginsberg.",
      tech: "HTML, CSS",
      image: "/assets/fcc-tribute.png",
      url: "https://codepen.io/csimes/full/PaPxXJ",
      sourceCode: "https://codepen.io/csimes/pen/PaPxXJ",
      inProgress: false,
    },
    // {
    //   name: "",
    //   summary: "",
    //   tech: "",
    //   image: "",
    //   url: "",
    //   sourceCode: "",
    //   inProgress: "",
    // },
  ],
};

const Projects: NextPage = () => {
  return (
    <div
      className="container"
      id="projects"
    >
      <h2 className="card-title">Projects</h2>
      <div className={styles.projectContainer}>
        {projectItems.projects.map((project: any, id: number) => (
          <Card
            key={id}
            className={styles.projectCard}
          >
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
              >
                {project.name}
              </Typography>
              {project.image !== "" ? (
                <Image
                  className={styles.projectImage}
                  // component="img"
                  height="350"
                  width="450"
                  src={project.image}
                  alt=""
                />
              ) : (
                <Image
                  className={styles.projectImage}
                  // component="img"
                  height="350"
                  width="450"
                  src="/assets/brandmark-design.png"
                  alt=""
                />
              )}
              <Typography
                variant="body2"
                color="#e9e7d4"
              >
                {project.summary}
              </Typography>
              <Typography
                variant="body2"
                color="#e9e7d4"
              >
                <strong>Technologies:</strong> {project.tech}
              </Typography>
            </CardContent>
            <CardActions>
              {/* <div className={styles.projectButtonContainer}> */}
              <Button
                size="small"
                className={styles.projectButton}
                href={project.url}
                target="_blank"
                variant="contained"
              >
                Deployed Project
              </Button>
              <br />
              <Button
                size="small"
                className={styles.projectButton}
                href={project.sourceCode}
                target="_blank"
                variant="contained"
              >
                Source Code
              </Button>
              {/* </div> */}
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
