import { GetStaticProps } from "next"
import Link from 'next/link'
import Head from 'next/head';
import { Header } from '../components/Header'
import styles from './home.module.scss';
import { BsChevronCompactDown} from 'react-icons/bs'
import { FiFigma } from 'react-icons/fi'
import { 
  AiFillLinkedin, 
  AiFillGithub, 
  AiFillCodepenCircle,
  AiFillHtml5,
} from 'react-icons/ai'

import { 
  FaCss3Alt, 
  FaGitAlt, 
  FaSass, 
  FaBootstrap 
} from 'react-icons/fa'

import { 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNextDotJs 
} from 'react-icons/si'

type HomeProps = {
  year: string;
}

export default function Home({year}: HomeProps) {
  return (
    <>
      <div className={styles.Container}>
        <Head>
          <title>Thalesousa</title>
        </Head>
        <Header />

        <section className={styles.Hero}>
          <article>
            <span>Olá, eu sou</span>
            <h1>Thales Sousa</h1>
            <span>Front End Developer</span>
            <Link href="https://drive.google.com/u/0/uc?id=13icu1MTJeRc1TPvkpUEglN6GRF63aCVe&export=download">
              <button> Download CV </button>
            </Link>
          </article>
          <img src="./illustration.svg" alt="ilustração" />
        </section>
        
        <div className={styles.Info}>
          <ul>
            <li><a href="https://www.linkedin.com/in/thalesousa/"><AiFillLinkedin /></a></li>
            <li><a href="https://github.com/Thalesousa"><AiFillGithub /></a></li>
            <li><a href="https://codepen.io/thalesousa"><AiFillCodepenCircle /></a></li>
          </ul>

          <BsChevronCompactDown />

          <span>
            <a href="#">thalestjsb@gmail.com</a>
          </span>
        </div>
        
        <section className={styles.About}>
          <div className={styles.Presentation}>
            <div className={styles.Resume}>
              <h2>Olá</h2>
              <p>
                Sou um desenvolvedor front-end dedicado com um olhar atento para 
                detalhes, e uma determinação para oferecer a mais alta qualidade. 
                Tenho muito orgulho do meu trabalho, e sempre tento melhorar a mim 
                mesmo a cada projeto em que trabalho.</p>
            </div>
            <img src="./thalesousa.jpg" alt="Imagem de Thales Sousa" />
          </div>
          <blockquote>
            <p>“Design não é apenas sobre como tal coisa se parece ou se sente. Design é como isso funciona.”</p>
            <cite>Steve Jobs</cite>
          </blockquote>
          


        </section>

        <section className={styles.Skills}>
          <h2>Minhas Skills</h2>
            <ul>
              <li><AiFillHtml5 /></li>
              <li><FaCss3Alt /></li>
              <li><SiJavascript /></li>
              <li><FaBootstrap /></li>
              <li><SiTypescript /></li>
              <li><SiReact /></li>
              <li><SiNextDotJs /></li>
              <li><FaSass /></li>
              <li><img src="./styled-components.png" width="20" /></li>
              <li><FaGitAlt /></li>
              <li><FiFigma /></li>
            </ul>
        </section>
        
        <section className={styles.Contact}>
          <h1>Fale Comigo</h1>
          <form action="">
            <div>
              <input type="text" placeholder="Nome" />
              <input type="email" placeholder="Email" />
            </div>

            <input type="text" placeholder="Assunto" />
            <textarea minLength={20} maxLength={500} placeholder="Mensagem" cols={30} rows={10} />


            <button type="submit">
              Enviar
            </button>
          </form>
        </section>

      </div>

      <footer className={styles.Footer}>

      <h1>Vamos trabalhar juntos. 😃</h1>
        <ul>
          <li><span>&#169;{year} Thales Sousa</span></li>
          <li><a href="https://www.linkedin.com/in/thalesousa/"><AiFillLinkedin /></a></li>
          <li><a href="https://github.com/Thalesousa"><AiFillGithub /></a></li>
          <li><a href="https://codepen.io/thalesousa"><AiFillCodepenCircle /></a></li>
        </ul>
      </footer>

    </>
    
  )
}

export const getStaticProps: GetStaticProps = async () =>{
  const year = new Date().getFullYear();
  return {
    props: {
      year
    },
    revalidate: 60 * 60 * 1,
  }
}