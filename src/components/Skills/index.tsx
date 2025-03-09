"use client";

import { useEffect } from "react";
import styles from "./styles.module.scss";

import Slider from "react-slick";
import AOS from "aos";

import { FiFigma } from "react-icons/fi";
import { AiFillHtml5 } from "react-icons/ai";
import {
  FaCss3Alt,
  FaGitAlt,
  FaSass,
  FaBootstrap,
  FaGithubAlt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
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

  return (
    <section className={styles.Skills} id="experience" data-aos="fade-up">
      <h2>Minhas Skills</h2>
      <Slider {...settings}>
        <div title="HTML 5">
          <AiFillHtml5 />
          <span>HTML 5</span>
        </div>
        <div title="CSS 3">
          <FaCss3Alt />
          <span>CSS 3</span>
        </div>
        <div title="JavaScript">
          <SiJavascript />
          <span>JavaScript</span>
        </div>
        <div title="React">
          <SiReact />
          <span>React</span>
        </div>
        <div title="Bootstrap">
          <FaBootstrap />
          <span>Bootstrap</span>
        </div>
        <div title="TypeScript">
          <SiTypescript />
          <span>TypeScript</span>
        </div>
        <div title="NextJS">
          <SiNextdotjs />
          <span>NextJS</span>
        </div>
        <div title="Sass">
          <FaSass />
          <span>Sass</span>
        </div>
        <div title="Git">
          <FaGitAlt />
          <span>Git</span>
        </div>
        <div title="GitHub">
          <FaGithubAlt />
          <span>GitHub</span>
        </div>
        <div title="Figma">
          <FiFigma />
          <span>Figma</span>
        </div>
      </Slider>
    </section>
  );
}
