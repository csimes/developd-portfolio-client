import React from "react";
import Image from "next/image";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Button,
} from "@chakra-ui/react";
import { ExternalLink, GitHub } from "react-feather";

const projectItems = {
  projects: [
    {
      name: "WorkWise 1.0",
      summary:
        "WorkWise 1.0 (formerly known as Digital Office) was created to help users manage their time spent working. A user is able to register, login, create a profile, and do some simple time tracking, with the ability to view their entire history of timesheets and edit them as needed.",
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
    // {
    //   name: "Contact Form",
    //   summary:
    //     "This is the first project I assigned to myself, a simple contact form.",
    //   tech: "HTML, CSS",
    //   image: "/assets/contact-form.png",
    //   url: "https://codepen.io/csimes/full/RJrppL",
    //   sourceCode: "https://codepen.io/csimes/pen/RJrppL",
    //   inProgress: false,
    // },
    // {
    //   name: "CSS Creature",
    //   summary:
    //     "This is my best attempt at drawing a cute baby chick using CSS.",
    //   tech: "HTML, CSS",
    //   image: "/assets/css-creature.png",
    //   url: "https://codepen.io/csimes/full/zYNEaOZ",
    //   sourceCode: "https://codepen.io/csimes/pen/zYNEaOZ",
    //   inProgress: false,
    // },
    // {
    //   name: "Tribute Page",
    //   summary:
    //     "This is the first small webpage I designed, dedicated to Ruth Bader Ginsberg.",
    //   tech: "HTML, CSS",
    //   image: "/assets/fcc-tribute.png",
    //   url: "https://codepen.io/csimes/full/PaPxXJ",
    //   sourceCode: "https://codepen.io/csimes/pen/PaPxXJ",
    //   inProgress: false,
    // },
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

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-16 bg-soft-white"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-dark-gray mb-8 text-center uppercase tracking-wider border-t-4 border-medium-orange pt-4 inline-block">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectItems.projects.map((project, id) => (
            <Card
              key={id}
              className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white border-medium-orange border-[5px]"
            >
              <CardHeader className="p-0">
                <Image
                  src={project.image || "/assets/brandmark-design.png"}
                  alt={project.name}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover"
                />
              </CardHeader>
              <CardBody className="flex-grow p-6">
                <h3 className="text-xl font-semibold mb-2 text-dark-gray">
                  {project.name}
                </h3>
                <p className="text-gray-700 mb-4">{project.summary}</p>
                <p className="text-sm text-gray-600">
                  <strong>Tech:</strong> {project.tech}
                </p>
                {project.inProgress && (
                  <span className="inline-block bg-medium-orange text-dark-gray text-xs px-2 py-1 rounded-full mt-2 font-semibold">
                    In Progress
                  </span>
                )}
              </CardBody>
              <CardFooter className="p-4 bg-light-gray">
                <div className="flex justify-between w-full">
                  <Button
                    variant="outline"
                    className="bg-medium-orange text-dark-gray hover:overline"
                  >
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" /> View Project
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-medium-orange text-dark-gray hover:overline"
                  >
                    <a
                      href={project.sourceCode}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center"
                    >
                      <GitHub className="mr-2 h-4 w-4" /> Source Code
                    </a>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
