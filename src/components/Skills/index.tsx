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
  return (
    <div className="flex flex-wrap gap-3">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="group flex items-center gap-2.5 px-5 py-2.5 bg-space-deep/80 border border-stardust/10 rounded-full transition-all duration-300 hover:border-stardust/25 hover:bg-space-deep"
        >
          <span className="text-lg text-stardust/70 group-hover:text-stardust transition-colors duration-300">
            {skill.icon}
          </span>
          <span className="text-base font-medium text-stardust/80 group-hover:text-stardust transition-colors duration-300">
            {skill.name}
          </span>
        </div>
      ))}
    </div>
  );
}
