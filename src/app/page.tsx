import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { SiGmail } from "react-icons/si";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillCodepenCircle,
} from "react-icons/ai";
import { HiArrowDown } from "react-icons/hi2";

import { Header } from "@/components/Header";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";
import { DownloadCvButton } from "@/components/DownloadCvButton";
import { UseRepositories } from "@/hooks/UseRepositories";

export const metadata: Metadata = {
  title: "Home | Thalesousa",
  description: "Pagina inicial do portfolio de Thales Sousa.",
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
          className="min-h-screen flex items-center justify-center relative"
          id="home"
        >
          <div className="flex flex-col items-center justify-center text-center">
            {/* Badge */}
            <div className="glass-card px-4 py-2 mb-6 animate-fadeIn">
              <span className="text-sm font-medium text-base-content/80">
                Fullstack Developer
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-primary text-5xl md:text-6xl lg:text-8xl font-bold mb-6 animate-fadeInUp">
              Thales Sousa
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-base-content/70 max-w-xl mb-8 animate-fadeInUp delay-100">
              Criando experiências digitais modernas e performáticas
            </p>

            {/* Social Links + CTA Button */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8 animate-fadeInUp delay-200">
              {[
                { href: "https://www.linkedin.com/in/thalesousa/", icon: <AiFillLinkedin /> },
                { href: "https://github.com/Thalesousa", icon: <AiFillGithub /> },
                { href: "https://codepen.io/thalesousa", icon: <AiFillCodepenCircle /> },
                { href: "mailto:thalestjsb@gmail.com", icon: <SiGmail /> },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer"
                  className="glass-card-hover p-3 text-2xl text-base-content/70 hover:text-secondary"
                >
                  {social.icon}
                </a>
              ))}

              <div className="hidden sm:block w-px h-8 bg-base-content/20" />

              <DownloadCvButton
                defaultLink={process.env.NEXT_PUBLIC_LINK_CV_DOWNLOAD || ""}
                pdfLink={process.env.NEXT_PUBLIC_LINK_CV_PDF}
                docxLink={process.env.NEXT_PUBLIC_LINK_CV_DOCX}
              />
            </div>
          </div>

          {/* Scroll Indicator */}
          <a
            href="#about"
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-base-content/40 hover:text-secondary transition-colors animate-bounce"
          >
            <HiArrowDown className="text-3xl" />
          </a>
        </section>

        {/* About Section */}
        <section className="py-24" id="about">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text Content */}
            <div>
              <h2 className="text-primary text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Desenvolvedor Fullstack
              </h2>
              <p className="text-lg md:text-xl text-base-content/70 leading-relaxed mb-8">
                Criando soluções digitais completas, do front-end ao <br /> back-end, com foco em performance, escalabilidade e experiência do usuário.
              </p>
              <a
                href="#contact"
                className="btn btn-secondary btn-lg"
              >
                Vamos conversar
              </a>
            </div>

            {/* Feature Cards */}
            <div className="glass-card p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-secondary" />
                <span className="font-medium text-base-content/80">O que eu faço</span>
              </div>

              <div className="space-y-4">
                {[
                  { title: "Frontend Development", desc: "React, Next.js, TypeScript" },
                  { title: "Backend Development", desc: "Node.js, PHP, Laravel" },
                  { title: "Database & APIs", desc: "MySQL, REST APIs" },
                  { title: "UI/UX Implementation", desc: "Design responsivo e acessivel" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                    <div className="mt-1 text-secondary">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-base-content">{item.title}</h3>
                      <p className="text-sm text-base-content/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <Skills />

        {/* Projects Preview Section */}
        <section className="py-24" id="projects">
          <Projects repositories={latestRepositories} />
          <div className="flex justify-center mt-10">
            <Link
              href="/projetos"
              className="btn btn-outline btn-secondary btn-lg group"
            >
              Ver todos os projetos
              <span className="ml-2 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24" id="contact">
          <div className="glass-card p-8 md:p-16 text-center max-w-3xl mx-auto">
            
            <span className="text-secondary text-sm uppercase tracking-widest mb-4 block font-medium">
              Contato
            </span>
            <h2 className="text-primary text-4xl md:text-5xl font-bold mb-6">
              Vamos trabalhar juntos?
            </h2>
            <p className="text-lg text-base-content/70 mb-10 max-w-xl mx-auto">
              Estou disponivel para novos projetos e oportunidades. Se voce tem uma ideia
              ou quer bater um papo, sera um prazer conversar!
            </p>

            <a
              href="mailto:thalestjsb@gmail.com"
              className="btn btn-glow btn-lg gap-3 mb-12"
            >
              <SiGmail className="text-xl" />
              Enviar e-mail
            </a>
            
            <Image
              src="/spaceman.png"
              alt="Spaceman"
              width={150}
              height={150}
              className="mx-auto mb-6 animate-orbit"
            />
                      
            <div className="divider text-base-content/40 text-sm">
              ou me encontre nas redes
            </div>

            <div className="flex justify-center gap-4 mt-8">
              {[
                { href: "https://www.linkedin.com/in/thalesousa/", icon: <AiFillLinkedin /> },
                { href: "https://github.com/Thalesousa", icon: <AiFillGithub /> },
                { href: "https://codepen.io/thalesousa", icon: <AiFillCodepenCircle /> },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-circle btn-outline btn-secondary btn-lg"
                >
                  <span className="text-2xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer year={year} />
    </>
  );
}
