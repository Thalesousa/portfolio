import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { BsChevronCompactDown } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillCodepenCircle,
} from "react-icons/ai";

import { Header } from "@/components/Header";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";
import { UseRepositories } from "@/hooks/UseRepositories";

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

async function fetchRepositories(): Promise<Repository[]> {
  return UseRepositories();
}

export default async function Home() {
  const year = new Date().getFullYear().toString();
  const latestRepositories = (await fetchRepositories()).slice(0, 3);

  return (
    <>
      <Header />

      <main className="container-main">
        {/* Hero Section */}
        <section
          className="min-h-screen flex flex-col justify-center pt-20"
          id="home"
        >
          <div className="flex flex-col items-center justify-center text-center">
            <article>
              <span className="text-lg font-light">Olá, eu sou</span>
              <h1 className="text-primary text-4xl md:text-5xl lg:text-7xl font-semibold my-4">
                Thales Sousa
              </h1>
              <span className="text-lg font-light block mb-6">
                Fullstack Developer
              </span>
              <Link href={`${process.env.NEXT_PUBLIC_LINK_CV_DOWNLOAD}`}>
                <button className="btn btn-secondary px-8">Download CV</button>
              </Link>
            </article>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center mt-12 mb-28">
            <ul className="flex gap-6 text-2xl md:text-3xl mb-8">
              <li>
                <a
                  href="https://www.linkedin.com/in/thalesousa/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-secondary transition-colors"
                >
                  <AiFillLinkedin />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Thalesousa"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-secondary transition-colors"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li>
                <a
                  href="https://codepen.io/thalesousa"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-secondary transition-colors"
                >
                  <AiFillCodepenCircle />
                </a>
              </li>
              <li>
                <a
                  href="mailto:thalestjsb@gmail.com"
                  className="hover:text-secondary transition-colors"
                >
                  <GrMail />
                </a>
              </li>
            </ul>
            <span className="text-3xl animate-bounce">
              <BsChevronCompactDown />
            </span>
          </div>
        </section>

        {/* About Section */}
        <section className="flex flex-col items-center py-16" id="about">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full">
            <div className="max-w-175">
              <h2 className="text-primary text-5xl md:text-6xl font-semibold mb-6">
                &lt;&#47;&gt;
              </h2>
              <p className="text-lg md:text-xl font-light leading-relaxed">
                Sou um desenvolvedor fullstack dedicado com um olhar atento para
                detalhes e uma determinação para oferecer a mais alta qualidade.
                Tenho muito orgulho do meu trabalho e sempre tento melhorar a
                mim mesmo a cada projeto em que trabalho.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <Skills />

        {/* Projects Preview Section */}
        <section className="flex flex-col items-center py-16" id="projects">
            <Projects repositories={latestRepositories} />
            <Link
                href="/projetos"
                className="mt-8 btn btn-outline btn-secondary"
            >
                Veja mais
            </Link>
        </section>

        {/* Contact Section */}
        <section className="py-24 flex flex-col items-center" id="contact">
          <div className="text-center max-w-2xl">
            <span className="text-secondary text-sm uppercase tracking-widest mb-4 block">
              Contato
            </span>
            <h1 className="text-primary text-4xl md:text-5xl font-semibold mb-6">
              Vamos trabalhar juntos?
            </h1>
            <p className="text-lg text-gray-400 mb-10">
              Estou disponível para novos projetos e oportunidades. Se você tem uma ideia
              ou quer bater um papo, será um prazer conversar!
            </p>

            <a
              href="mailto:thalestjsb@gmail.com"
              className="btn btn-gradient btn-lg gap-3 mb-12"
            >
              <GrMail className="text-xl" />
              Enviar e-mail
            </a>

            <div className="divider text-gray-500 text-sm">ou me encontre nas redes</div>

            <div className="flex justify-center gap-6 mt-8">
              <a
                href="https://www.linkedin.com/in/thalesousa/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-circle btn-outline btn-secondary btn-lg hover:scale-110 transition-transform"
              >
                <AiFillLinkedin className="text-2xl" />
              </a>
              <a
                href="https://github.com/Thalesousa"
                target="_blank"
                rel="noreferrer"
                className="btn btn-circle btn-outline btn-secondary btn-lg hover:scale-110 transition-transform"
              >
                <AiFillGithub className="text-2xl" />
              </a>
              <a
                href="https://codepen.io/thalesousa"
                target="_blank"
                rel="noreferrer"
                className="btn btn-circle btn-outline btn-secondary btn-lg hover:scale-110 transition-transform"
              >
                <AiFillCodepenCircle className="text-2xl" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer year={year} />
    </>
  );
}
