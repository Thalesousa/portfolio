import styles from './styles.module.scss';

import Slider from "react-slick";
import { FiFigma } from 'react-icons/fi'
import { AiFillHtml5 } from 'react-icons/ai'

import { 
  FaCss3Alt, 
  FaGitAlt, 
  FaSass, 
  FaBootstrap, 
  FaGithubAlt
} from 'react-icons/fa'

import { 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNextDotJs 
} from 'react-icons/si'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Skills() {
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
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,

        } 
      },

      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,

        } 
      },
    ],
  };

  return (
    <section className={styles.Skills} id="experience">
      <h2>Minhas Skills</h2>
      <Slider {...settings}>
        <div title="HTML 5"><AiFillHtml5  /><span>Html 5</span></div>
        <div title="CSS 3"><FaCss3Alt /><span>CSS 3</span></div>
        <div title="Javascript"><SiJavascript /><span>Javascript</span></div>
        <div title="React"><SiReact /><span>React</span></div>
        <div title="Bootstrap"><FaBootstrap /><span>Bootstrap</span></div>
        <div title="Styled components"><img src="./styled-components.png" width="20" /><span>Styled components</span></div>
        <div title="Typescript"><SiTypescript /><span>Typescript</span></div>
        <div title="NextJS"><SiNextDotJs /><span>NextJS</span></div>
        <div title="Sass"><FaSass /><span>Sass</span></div>
        <div title="Git"><FaGitAlt /><span>Git</span></div>
        <div title="Git"><FaGithubAlt /><span>Github</span></div>
        <div title="Figma"><FiFigma /><span>Figma</span></div>
      </Slider>
    </section>
  )
}