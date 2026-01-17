"use client";

import { AiFillHtml5 } from "react-icons/ai";
import {
  FaCss3Alt,
  FaGitAlt,
  FaBootstrap,
  FaGithubAlt,
  FaPhp,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiLaravel,
  SiMysql,
} from "react-icons/si";

const skills = [
  { icon: <AiFillHtml5 />, name: "HTML 5" },
  { icon: <FaCss3Alt />, name: "CSS 3" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <SiReact />, name: "React" },
  { icon: <FaBootstrap />, name: "Bootstrap" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <SiNextdotjs />, name: "NextJS" },
  { icon: <FaPhp />, name: "PHP" },
  { icon: <SiLaravel />, name: "Laravel" },
  { icon: <SiMysql />, name: "MySQL" },
  { icon: <FaGitAlt />, name: "Git" },
  { icon: <FaGithubAlt />, name: "GitHub" },
];

export function Skills() {
  return (
    <section className="py-20" id="experience">
      <h2 className="text-primary text-4xl md:text-5xl font-semibold text-center mb-12">
        Minhas Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className="glass-card-hover p-6 flex flex-col items-center justify-center gap-3 group"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="text-4xl md:text-5xl text-base-content/80 group-hover:text-secondary transition-colors duration-300">
              {skill.icon}
            </div>
            <span className="text-sm md:text-base font-medium text-base-content/70 group-hover:text-base-content transition-colors duration-300">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
