"use client";

import { ReactNode } from "react";
import { AiFillHtml5 } from "react-icons/ai";
import {
  FaCss3Alt,
  FaGitAlt,
  FaBootstrap,
  FaGithubAlt,
  FaPhp,
  FaNodeJs,
  FaPython,
  FaJava,
  FaAws,
  FaDocker,
  FaAngular,
  FaVuejs,
  FaSass,
  FaLinux,
  FaReact,
  FaNpm,
  FaYarn,
  FaFigma,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiLaravel,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiFirebase,
  SiTailwindcss,
  SiSvelte,
  SiVite,
  SiRust,
  SiGo,
  SiKotlin,
  SiSwift,
  SiFlutter,
  SiExpress,
  SiDjango,
  SiFlask,
  SiSpring,
  SiDotnet,
  SiVercel,
  SiNetlify,
  SiHeroku,
  SiDigitalocean,
  SiGooglecloud,
  SiKubernetes,
  SiGitlab,
  SiJest,
  SiCypress,
  SiStorybook,
  SiEslint,
  SiPrettier,
  SiPostman,
  SiNginx,
  SiGraphql,
  SiRedux,
  SiWebpack,
  SiElectron,
  SiUnity,
  SiBlender,
  SiWordpress,
  SiShopify,
  SiStripe,
  SiMarkdown,
  SiArduino,
  SiRaspberrypi,
} from "react-icons/si";
import { DiRuby } from "react-icons/di";

// Mapa de todas as skills disponiveis
const allSkills: Record<string, ReactNode> = {
  // Linguagens
  "html": <AiFillHtml5 />,
  "css": <FaCss3Alt />,
  "javascript": <SiJavascript />,
  "typescript": <SiTypescript />,
  "php": <FaPhp />,
  "python": <FaPython />,
  "java": <FaJava />,
  "rust": <SiRust />,
  "go": <SiGo />,
  "kotlin": <SiKotlin />,
  "swift": <SiSwift />,
  "ruby": <DiRuby />,

  // Frontend Frameworks
  "react": <FaReact />,
  "nextjs": <SiNextdotjs />,
  "next": <SiNextdotjs />,
  "vue": <FaVuejs />,
  "vuejs": <FaVuejs />,
  "angular": <FaAngular />,
  "svelte": <SiSvelte />,

  // Mobile
  "flutter": <SiFlutter />,

  // Desktop
  "electron": <SiElectron />,

  // CSS/Styling
  "sass": <FaSass />,
  "scss": <FaSass />,
  "tailwind": <SiTailwindcss />,
  "tailwindcss": <SiTailwindcss />,
  "bootstrap": <FaBootstrap />,

  // Backend Frameworks
  "node": <FaNodeJs />,
  "nodejs": <FaNodeJs />,
  "express": <SiExpress />,
  "expressjs": <SiExpress />,
  "laravel": <SiLaravel />,
  "django": <SiDjango />,
  "flask": <SiFlask />,
  "spring": <SiSpring />,
  "dotnet": <SiDotnet />,
  ".net": <SiDotnet />,

  // Databases
  "mysql": <SiMysql />,
  "postgresql": <SiPostgresql />,
  "postgres": <SiPostgresql />,
  "mongodb": <SiMongodb />,
  "mongo": <SiMongodb />,
  "redis": <SiRedis />,
  "firebase": <SiFirebase />,

  // APIs
  "graphql": <SiGraphql />,
  "rest": <SiPostman />,

  // Build Tools
  "vite": <SiVite />,
  "webpack": <SiWebpack />,

  // Package Managers
  "npm": <FaNpm />,
  "yarn": <FaYarn />,

  // Version Control
  "git": <FaGitAlt />,
  "github": <FaGithubAlt />,
  "gitlab": <SiGitlab />,

  // Cloud/DevOps
  "aws": <FaAws />,
  "gcp": <SiGooglecloud />,
  "googlecloud": <SiGooglecloud />,
  "vercel": <SiVercel />,
  "netlify": <SiNetlify />,
  "heroku": <SiHeroku />,
  "digitalocean": <SiDigitalocean />,
  "docker": <FaDocker />,
  "kubernetes": <SiKubernetes />,
  "k8s": <SiKubernetes />,
  "nginx": <SiNginx />,

  // OS
  "linux": <FaLinux />,

  // Testing
  "jest": <SiJest />,
  "cypress": <SiCypress />,
  "storybook": <SiStorybook />,

  // Linting/Formatting
  "eslint": <SiEslint />,
  "prettier": <SiPrettier />,

  // API Tools
  "postman": <SiPostman />,

  // State Management
  "redux": <SiRedux />,

  // Payments
  "stripe": <SiStripe />,

  // 3D/Graphics
  "unity": <SiUnity />,
  "blender": <SiBlender />,

  // Design Tools
  "figma": <FaFigma />,

  // CMS
  "wordpress": <SiWordpress />,
  "shopify": <SiShopify />,

  // Documentation
  "markdown": <SiMarkdown />,

  // IoT
  "arduino": <SiArduino />,
  "raspberrypi": <SiRaspberrypi />,
};

// Ler skills da variavel de ambiente
const skillsEnv = process.env.NEXT_PUBLIC_FEATURED_SKILLS || "";
const skillNames = skillsEnv
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

// Filtrar apenas as skills definidas no .env
const skills = skillNames
  .map((name) => {
    const key = name.toLowerCase();
    const icon = allSkills[key];
    if (icon) {
      return { icon, name };
    }
    return null;
  })
  .filter((s) => s !== null);

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
