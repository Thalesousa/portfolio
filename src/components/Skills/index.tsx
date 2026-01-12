"use client";

import { useEffect } from "react";
import Slider from "react-slick";
import AOS from "aos";

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
} from "react-icons/si";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";

export function Skills() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

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
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <FaGithubAlt />, name: "GitHub" },
  ];

  return (
    <section className="mb-28 px-4" id="experience">
      <h2 className="gradient-text text-4xl md:text-5xl font-semibold text-center my-16">
        Minhas Skills
      </h2>

      <Slider {...settings}>
        {skills.map((skill) => (
          <div
            key={skill.name}
            title={skill.name}
            className="flex flex-col items-center justify-center text-center px-4"
          >
            <div className="text-5xl mb-2 hover:text-secondary transition-colors mx-auto flex justify-center">
              {skill.icon}
            </div>
            <span className="text-sm font-light block">{skill.name}</span>
          </div>
        ))}
      </Slider>
    </section>
  );
}
