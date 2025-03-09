import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { BsChevronCompactDown } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { AiFillLinkedin, AiFillGithub, AiFillCodepenCircle } from "react-icons/ai";

import { Header } from "@/components/Header";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";

import styles from "./page.module.scss";
import { UseRepositories } from "@/hooks/UseRepositories";
import Form from "@/components/Form/Form";

// Definição de metadados para SEO
export const metadata: Metadata = {
  title: "Home | Thalesousa",
  description: "Página inicial do portfólio de Thales Sousa.",
};

interface Repository {
  id: number;
  name: string;
  title: string;
  thumbnail: string;
  created_at: string;
  default_branch: string;
}

// Função para buscar os repositórios no servidor
async function fetchRepositories(): Promise<Repository[]> {
  return UseRepositories();
}

export default async function Home() {
  const year = new Date().getFullYear().toString();
  const latestRepositories = (await fetchRepositories()).slice(0, 4);

  return (
    <>
      <Header />

      <main>
        <section className={styles.Hero} id="home">
          <div className={styles.HeroContent}>
            <article>
              <span>Olá, eu sou</span>
              <h1>Thales Sousa</h1>
              <span>Front End Developer</span>
              <Link href={`${process.env.NEXT_PUBLIC_LINK_CV_DOWNLOAD}`} passHref>
                <button>Download CV</button>
              </Link>
            </article>
            <Image src="/illustration.svg" alt="ilustração" width={500} height={500} />
          </div>
          <div className={styles.SocialLinks}>
            <ul>
              <li><a href="https://www.linkedin.com/in/thalesousa/" target="_blank"><AiFillLinkedin /></a></li>
              <li><a href="https://github.com/Thalesousa" target="_blank"><AiFillGithub /></a></li>
              <li><a href="https://codepen.io/thalesousa" target="_blank"><AiFillCodepenCircle /></a></li>
              <li><a href="mailto:thalestjsb@gmail.com"><GrMail /></a></li>
            </ul>
            <span>
              <BsChevronCompactDown />
            </span>
          </div>
        </section>

        <section className={styles.About} id="about">
          <div className={styles.Presentation}>
            <div className={styles.Resume}>
              <h2>&lt;&#47;&gt;</h2>
              <p>
                Sou um desenvolvedor front-end dedicado com um olhar atento para detalhes e uma determinação
                para oferecer a mais alta qualidade. Tenho muito orgulho do meu trabalho e sempre tento melhorar
                a mim mesmo a cada projeto em que trabalho.
              </p>
            </div>
            <Image src="/thalesousa.png" alt="Imagem de Thales Sousa" width={300} height={300} />
          </div>
          <blockquote>
            <p>“A tecnologia move o mundo.”</p>
            <cite>Steve Jobs</cite>
          </blockquote>
        </section>

        <Skills />

        <section className={styles.PreviewPortfolio} id="projects">
          <Projects repositories={latestRepositories} />
          <Link href="/projetos">
            Veja mais
          </Link>
        </section>

        <section className={styles.Contact} id="contact">
          <Form />
        </section>
      </main>

      <Footer year={year} />
    </>
  );
}
