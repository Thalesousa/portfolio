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
  // Duplicar skills para criar efeito infinito
  const duplicatedSkills = [...skills, ...skills];

  return (
    <section className="py-20" id="experience">
      <h2 className="text-primary text-4xl md:text-5xl font-semibold text-center mb-12">
        Minhas Skills
      </h2>

      <div className="skills-carousel-container overflow-hidden">
        <div className="skills-carousel flex gap-4 md:gap-6">
          {duplicatedSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="glass-card p-6 flex flex-col items-center justify-center gap-3 min-w-35 md:min-w-40"
            >
              <div className="text-4xl md:text-5xl text-base-content/80">
                {skill.icon}
              </div>
              <span className="text-sm md:text-base font-medium text-base-content/70">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
