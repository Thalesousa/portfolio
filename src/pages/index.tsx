import { GetStaticProps } from "next"
import Link from 'next/link'
import Head from 'next/head';

import { useRepositories } from "../hooks/useRepositories";

import { BsChevronCompactDown } from 'react-icons/bs'
import { AiFillLinkedin, AiFillGithub, AiFillCodepenCircle } from 'react-icons/ai'

import { Header } from '../components/Header'
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Footer } from "../components/Footer";

import styles from './home.module.scss';

interface Repository {
  id: number;
  name: string;
  title: string;
  thumbnail: string;
  created_at: string;
  default_branch: string;
}

interface HomeProps  {
  year: string;
  latestRepositories: Repository[];
}

export default function Home({ year, latestRepositories }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | Thalesousa</title>
      </Head>
      <Header />

      <main>
        <section className={styles.Hero} id="home">
          <div className={styles.HeroContent}>
            <article>
              <span>Olá, eu sou</span>
              <h1>Thales Sousa</h1>
              <span>Front End Developer</span>
              <Link href="https://drive.google.com/u/0/uc?id=13icu1MTJeRc1TPvkpUEglN6GRF63aCVe&export=download">
                <button> Download CV </button>
              </Link>
            </article>
            <img src="./illustration.svg" alt="ilustração" />
          </div>
          <div className={styles.SocialLinks}>
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

        </section>

        <section className={styles.About} id="about">
          <div className={styles.Presentation}>
            <div className={styles.Resume}>
              <h2>Olá</h2>
              <p>
                Sou um desenvolvedor front-end dedicado com um olhar atento para
                detalhes, e uma determinação para oferecer a mais alta qualidade.
                Tenho muito orgulho do meu trabalho, e sempre tento melhorar a mim
                mesmo a cada projeto em que trabalho.</p>
            </div>
            <img src="./thalesousa.png" alt="Imagem de Thales Sousa" />
          </div>
          <blockquote>
            <p>“Design não é apenas sobre como tal coisa se parece ou se sente. Design é como isso funciona.”</p>
            <cite>Steve Jobs</cite>
          </blockquote>



        </section>

        <Skills />

        <section className={styles.PreviewPortfolio} id="projects">
          <Projects repositories={latestRepositories} />
          <Link href="/projetos"><a>Veja mais</a></Link>
        </section>

        <section className={styles.Contact} id="contact">
          <h1>Fale Comigo</h1>
          <form action="">
            <div>
              <input type="text" placeholder="Nome"></input>
              <input type="email" placeholder="Email" />
            </div>

            <input type="text" placeholder="Assunto" />
            <textarea minLength={20} maxLength={500} placeholder="Mensagem" cols={30} rows={10} />


            <button type="submit">
              Enviar
            </button>
          </form>
        </section>

      </main>

      <Footer year={year} />
    </>

  )
}

export const getStaticProps: GetStaticProps = async () => {
  const year = new Date().getFullYear();

  const repositories: Promise<Repository[]> = useRepositories();
  
  const latestRepositories = (await repositories).slice(0, 4);

  return {
    props: {
      year,
      latestRepositories
    },
  }
}