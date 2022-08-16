import { BottomNavigation } from "@mui/material";
import type { NextPage } from "next";
import Image from "next/image";

const projectItems = {
  projects: [
    {
      name: "Tribute Page",
      summary:
        "This is the first small webpage I designed, dedicated to Ruth Bader Ginsberg.",
      image: "/assets/fcc-tribute.png",
      url: "https://codepen.io/csimes/full/PaPxXJ",
      sourceCode: "https://codepen.io/csimes/pen/PaPxXJ",
      inProgress: false,
    },
    {
      name: "Contact Form",
      summary:
        "This is the first project I assigned to myself, a simple contact form.",
      image: "/assets/contact-form.png",
      url: "https://codepen.io/csimes/full/RJrppL",
      sourceCode: "https://codepen.io/csimes/pen/RJrppL",
      inProgress: false,
    },
    {
      name: "Noah's Bark",
      summary: "This is a website I made for an imaginary animal sanctuary.",
      image: "/assets/noahs-bark.png",
      url: "https://csimes.github.io/noahs-bark/",
      sourceCode: "",
      inProgress: false,
    },
    {
      name: "CSS Creature",
      summary:
        "This is my best attempt at drawing a cute baby chick using CSS.",
      image: "/assets/css-creature.png",
      url: "https://codepen.io/csimes/full/zYNEaOZ",
      sourceCode: "https://codepen.io/csimes/pen/zYNEaOZ",
      inProgress: false,
    },
    {
      name: "Static Layout",
      summary: "This is a replication of part of the Hulu homepage.",
      image: "/assets/static-layout-hulu.png",
      url: "http://csimes.github.io/",
      sourceCode: "",
      inProgress: false,
    },
    {
      name: "Studio Ghibli API",
      summary: "This is my first project using an API.",
      image: "/assets/studio-ghibli.png",
      url: "",
      sourceCode: "",
      inProgress: false,
    },
    {
      name: "NASA API",
      summary: "This is my second project using an API.",
      image: "/assets/nasa-api.png",
      url: "https://nasa-api-a53fa.web.app/",
      sourceCode: "",
      inProgress: false,
    },
    {
      name: "Portfolio v1",
      summary: "This is the original version of my portfolio.",
      image: "",
      url: "https://csimes.github.io/portfolio/",
      sourceCode: "",
      inProgress: "",
    },
    // {
    //   name: "",
    //   summary: "",
    //   image: "",
    //   url: "",
    //   sourceCode: "",
    //   inProgress: "",
    // },
  ],
};

const Projects: NextPage = () => {
  return <div></div>;
};

export default Projects;
