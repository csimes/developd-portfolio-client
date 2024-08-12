import React from "react";
import { Code, Server, Palette, Terminal, LucideIcon } from "lucide-react";

interface SkillCategoryProps {
  title: string;
  skills: string[];
  icon: LucideIcon;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({
  title,
  skills,
  icon: Icon,
}) => (
  <div className="bg-light-gray p-6 rounded-lg shadow-md">
    <div className="flex items-center mb-4">
      <Icon className="w-6 h-6 mr-2 text-medium-orange" />
      <h3 className="text-xl font-semibold text-dark-gray">{title}</h3>
    </div>
    <ul className="space-y-2">
      {skills.map((skill, index) => (
        <li
          key={index}
          className="text-soft-white"
        >
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

const Skills: React.FC = () => {
  const skillCategories: SkillCategoryProps[] = [
    {
      title: "Frontend",
      icon: Palette,
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Next.js",
        "Tailwind CSS",
      ],
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["Node.js", "Express", "PostgreSQL", "RESTful APIs"],
    },
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["JavaScript", "TypeScript", "Python"],
    },
    {
      title: "Tools & Others",
      icon: Terminal,
      skills: ["Git", "GitHub", "VS Code", "Supabase", "Render"],
    },
  ];

  return (
    <section
      className="bg-soft-white py-16 px-4 md:px-8"
      id="skills"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-dark-gray mb-8 uppercase tracking-wider overline">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              skills={category.skills}
              icon={category.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
