import Image from "next/image";
import { Typography } from "@mui/material";
import styles from "../../styles/Skills.module.css";
const skillItems = {
  skills: [
    {
      name: "Javascript",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      image:
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg",
    },
    {
      name: "Typescript",
      link: "https://www.typescriptlang.org/",
      image:
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg",
    },
    {
      name: "HTML5",
      link: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
      image:
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg",
    },
    {
      name: "React",
      link: "https://reactjs.org/",
      image:
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg",
    },
    {
      name: "JQuery",
      link: "https://jquery.com/",
      image:
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/jquery-colored.svg",
    },
    {
      name: "Bootstrap",
      link: "https://getbootstrap.com/",
      image:
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg",
    },
    {
      name: "Material UI",
      link: "https://mui.com/",
      image:
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/materialui-colored.svg",
    },
    {
      name: "Webpack",
      link: "https://webpack.js.org/",
      image:
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/webpack-colored.svg",
    },
    {
      name: "Babel",
      link: "https://babeljs.io/",
      image:
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/babel-colored-dark.svg",
    },
    {
      name: "NodeJS",
      link: "https://nodejs.org/en/",
      image:
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg",
    },
    {
      name: "Express",
      link: "https://expressjs.com/",
      image:
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored-dark.svg",
    },
    {
      name: "PostgreSQL",
      link: "https://www.postgresql.org/",
      image:
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg",
    },
    {
      name: "Firebase",
      link: "https://firebase.google.com/",
      image:
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/firebase-colored.svg",
    },
    {
      name: "Heroku",
      link: "https://www.heroku.com/",
      image:
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/heroku-colored.svg",
    },
    {
      name: "Figma",
      link: "https://www.figma.com/",
      image:
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg",
    },
  ],
};
const Skills = () => {
  return (
    <div className="container" id="skills">
      <h2 className="card-title">Skills</h2>
      <div className={styles.skillsContainer}>
        {skillItems.skills.map((skill: any, id: number) => (
          <div className={styles.skillsItem} key={id}>
            <Typography variant="subtitle1">{skill.name}</Typography>
            <a href={skill.link} target="_blank" rel="noreferrer">
              <Image
                src={skill.image}
                alt={skill.name}
                width="75"
                height="75"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
