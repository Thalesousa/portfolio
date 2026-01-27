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

const allSkills: Record<string, ReactNode> = {
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
  "react": <FaReact />,
  "nextjs": <SiNextdotjs />,
  "next": <SiNextdotjs />,
  "vue": <FaVuejs />,
  "vuejs": <FaVuejs />,
  "angular": <FaAngular />,
  "svelte": <SiSvelte />,
  "flutter": <SiFlutter />,
  "electron": <SiElectron />,
  "sass": <FaSass />,
  "scss": <FaSass />,
  "tailwind": <SiTailwindcss />,
  "tailwindcss": <SiTailwindcss />,
  "bootstrap": <FaBootstrap />,
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
  "mysql": <SiMysql />,
  "postgresql": <SiPostgresql />,
  "postgres": <SiPostgresql />,
  "mongodb": <SiMongodb />,
  "mongo": <SiMongodb />,
  "redis": <SiRedis />,
  "firebase": <SiFirebase />,
  "graphql": <SiGraphql />,
  "rest": <SiPostman />,
  "vite": <SiVite />,
  "webpack": <SiWebpack />,
  "npm": <FaNpm />,
  "yarn": <FaYarn />,
  "git": <FaGitAlt />,
  "github": <FaGithubAlt />,
  "gitlab": <SiGitlab />,
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
  "linux": <FaLinux />,
  "jest": <SiJest />,
  "cypress": <SiCypress />,
  "storybook": <SiStorybook />,
  "eslint": <SiEslint />,
  "prettier": <SiPrettier />,
  "postman": <SiPostman />,
  "redux": <SiRedux />,
  "stripe": <SiStripe />,
  "unity": <SiUnity />,
  "blender": <SiBlender />,
  "figma": <FaFigma />,
  "wordpress": <SiWordpress />,
  "shopify": <SiShopify />,
  "markdown": <SiMarkdown />,
  "arduino": <SiArduino />,
  "raspberrypi": <SiRaspberrypi />,
};

const skillsEnv = process.env.NEXT_PUBLIC_FEATURED_SKILLS || "";
const skillNames = skillsEnv
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

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
  const duplicatedSkills = [...skills, ...skills];

  return (
    <div className="relative">
      {/* Decorative elements */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-40 h-72 bg-gradient-to-r from-stellar-gold/8 to-transparent blur-[80px] pointer-events-none" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-40 h-72 bg-gradient-to-l from-cosmic-cyan/8 to-transparent blur-[80px] pointer-events-none" />

      <div className="skills-carousel-container overflow-hidden py-10">
        <div className="skills-carousel flex gap-6 md:gap-8">
          {duplicatedSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="group relative flex flex-col items-center justify-center min-w-[130px] md:min-w-[150px]"
            >
              {/* Card background with celestial styling */}
              <div className="absolute inset-0 bg-space-deep/70 backdrop-blur-md border border-stellar-gold/5 rounded-2xl transition-all duration-500 group-hover:border-stellar-gold/20 group-hover:bg-space-deep/90" />

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-stellar-gold/10 to-transparent" />

              <div className="relative z-10 p-7 flex flex-col items-center justify-center gap-4">
                {/* Icon with glow */}
                <div className="relative">
                  <div className="text-4xl md:text-5xl text-stardust/60 group-hover:text-stellar-gold transition-colors duration-500">
                    {skill.icon}
                  </div>
                  {/* Icon glow on hover */}
                  <div className="absolute inset-0 blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 bg-stellar-gold" />
                </div>

                {/* Name */}
                <span className="text-xs md:text-sm font-medium font-syne text-stardust/40 group-hover:text-stardust/70 transition-colors duration-500 tracking-wide">
                  {skill.name}
                </span>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-5 right-5 h-px bg-gradient-to-r from-transparent via-stellar-gold/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
