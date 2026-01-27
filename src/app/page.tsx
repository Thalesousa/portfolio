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
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";
import { DownloadCvButton } from "@/components/DownloadCvButton";
import { EmailButton } from "@/components/EmailButton";
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

  const socialLinks = [
    { href: "https://www.linkedin.com/in/thalesousa/", icon: <AiFillLinkedin />, label: "LinkedIn" },
    { href: "https://github.com/Thalesousa", icon: <AiFillGithub />, label: "GitHub" },
    { href: "https://codepen.io/thalesousa", icon: <AiFillCodepenCircle />, label: "CodePen" },
    { href: "mailto:thalestjsb@gmail.com", icon: <SiGmail />, label: "Email" },
  ];

  const skills = [
    { title: "Frontend Development", desc: "React, Next.js, TypeScript" },
    { title: "Backend Development", desc: "Node.js, PHP, Laravel" },
    { title: "Database & APIs", desc: "MySQL, REST APIs" },
    { title: "UI/UX Implementation", desc: "Design responsivo e acessivel" },
  ];

  return (
    <>
      <Header />

      <main className="container-main">
        {/* Hero Section */}
        <section
          className="min-h-screen flex items-center justify-center relative overflow-hidden navigator-grid"
          id="home"
        >
          {/* Decorative orbs with new colors */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cosmic-cyan/5 rounded-full blur-[150px]" />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-stellar-gold/5 rounded-full animate-rotate-slow pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-cosmic-cyan/5 rounded-full animate-rotate-slow pointer-events-none" style={{ animationDirection: 'reverse', animationDuration: '35s' }} />

          <div className="flex flex-col items-center justify-center text-center relative z-10">
            {/* Badge */}
            <div className="opacity-0-init animate-fadeIn celestial-card px-8 py-4 mb-10">
              <span className="text-sm font-semibold text-stellar-gold font-syne tracking-[0.2em] uppercase">
                Fullstack Developer
              </span>
            </div>

            {/* Main Title */}
            <h1 className="opacity-0-init animate-fadeInUp text-6xl md:text-8xl lg:text-9xl font-bold mb-8 font-syne tracking-tight">
              <span className="text-gradient">Thales Sousa</span>
            </h1>

            {/* Subtitle */}
            <p className="opacity-0-init animate-fadeInUp delay-200 text-lg md:text-xl text-stardust/60 max-w-2xl mb-12 font-light leading-relaxed">
              Criando experiencias digitais modernas e performaticas
            </p>

            {/* Social Links + CTA Button */}
            <div className="opacity-0-init animate-fadeInUp delay-300 flex flex-wrap items-center justify-center gap-4 mt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer"
                  aria-label={social.label}
                  className="group relative p-4 rounded-2xl text-2xl text-stardust/60 hover:text-stellar-gold transition-all duration-500 border border-transparent hover:border-stellar-gold/20 hover:bg-stellar-gold/5"
                >
                  <span className="relative z-10">{social.icon}</span>
                  <span className="absolute inset-0 rounded-2xl bg-stellar-gold/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
                </a>
              ))}

              <div className="hidden sm:block w-px h-12 bg-gradient-to-b from-transparent via-stellar-gold/30 to-transparent mx-4" />

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
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-stardust/30 hover:text-stellar-gold transition-all duration-500 group"
          >
            <span className="text-xs font-syne tracking-[0.3em] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
              Explorar
            </span>
            <div className="w-6 h-10 rounded-full border-2 border-current flex justify-center pt-2">
              <div className="w-1 h-2 bg-current rounded-full animate-bounce" />
            </div>
          </a>
        </section>

        {/* About Section */}
        <section className="py-32 relative" id="about">
          {/* Section divider */}
          <div className="section-divider mb-24" />

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Text Content */}
            <div className="relative">
              <span className="coord-marker mb-6 block">
                // Sobre mim
              </span>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 font-syne leading-[1.1]">
                <span className="text-gradient-gold">Desenvolvedor</span>
                <br />
                <span className="text-stardust">Fullstack</span>
              </h2>
              <p className="text-lg md:text-xl text-stardust/50 leading-relaxed mb-12">
                Criando solucoes digitais completas, do front-end ao back-end, com foco em performance, escalabilidade e experiencia do usuario.
              </p>
              <a
                href="#contact"
                className="btn-cosmic inline-flex items-center gap-3"
              >
                <span className="relative z-10">Vamos conversar</span>
                <svg className="w-5 h-5 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Feature Cards */}
            <div className="celestial-card p-8 md:p-12 relative overflow-hidden group">
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-stellar-gold/5 via-transparent to-cosmic-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-3 h-3 rounded-full bg-stellar-gold animate-pulse" />
                  <span className="font-syne font-semibold text-stardust/70 tracking-wide uppercase text-sm">
                    O que eu faco
                  </span>
                </div>

                <div className="space-y-3">
                  {skills.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-5 p-5 rounded-2xl hover:bg-stellar-gold/5 transition-all duration-500 border border-transparent hover:border-stellar-gold/10 group/item"
                    >
                      <div className="mt-1 text-stellar-gold group-hover/item:scale-110 transition-transform duration-300">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-stardust font-syne text-lg">{item.title}</h3>
                        <p className="text-sm text-stardust/40 mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="section-divider mb-24" />
          <div className="text-center mb-20">
            <span className="coord-marker mb-6 block">
              // Tecnologias
            </span>
            <h2 className="text-5xl md:text-6xl font-bold font-syne text-stardust">
              Skills & <span className="text-gradient-static">Expertise</span>
            </h2>
          </div>
          <Skills />
        </section>

        {/* Experience Timeline Section */}
        <Experience />

        {/* Projects Preview Section */}
        <section className="py-32" id="projects">
          <div className="section-divider mb-24" />
          <div className="text-center mb-20">
            <span className="coord-marker mb-6 block">
              // Portfolio
            </span>
            <h2 className="text-5xl md:text-6xl font-bold font-syne text-stardust">
              <span className="text-gradient-static">Projetos</span>
            </h2>
          </div>

          <Projects repositories={latestRepositories} />

          <div className="flex justify-center mt-20">
            <Link
              href="/projetos"
              className="btn-outline-cosmic inline-flex items-center gap-3 group"
            >
              Ver todos os projetos
              <span className="group-hover:translate-x-2 transition-transform duration-300">
                &rarr;
              </span>
            </Link>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-32 relative" id="contact">
          <div className="section-divider mb-24" />

          {/* Background decorative elements */}
          <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-cosmic-purple/8 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-stellar-gold/8 rounded-full blur-[100px]" />

          <div className="celestial-card p-10 md:p-20 text-center max-w-4xl mx-auto relative overflow-hidden">
            <div className="relative z-10">
              <span className="coord-marker mb-6 block">
                // Contato
              </span>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 font-syne">
                <span className="text-stardust">Vamos </span>
                <span className="text-gradient">trabalhar juntos?</span>
              </h2>
              <p className="text-lg text-stardust/50 mb-14 max-w-2xl mx-auto leading-relaxed">
                Estou disponivel para novos projetos e oportunidades. Se tiver uma ideia ou proposta, fico a disposicao para conversar.
              </p>

              <div className="mb-16">
                <EmailButton email="thalestjsb@gmail.com" />
              </div>

              {/* Spaceman with enhanced effects */}
              <div className="relative w-52 h-52 mx-auto mb-14">
                {/* Glow ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-stellar-gold/20 via-cosmic-purple/20 to-stellar-gold/20 blur-3xl animate-pulse-glow" />

                {/* Orbit ring */}
                <div className="absolute inset-[-20px] rounded-full border border-stellar-gold/10 animate-rotate-slow" />
                <div className="absolute inset-[-45px] rounded-full border border-cosmic-cyan/5 animate-rotate-slow" style={{ animationDirection: "reverse", animationDuration: "35s" }} />

                <Image
                  src="/spaceman.png"
                  alt="Astronauta flutuando"
                  width={200}
                  height={200}
                  className="relative z-10 animate-float-slow drop-shadow-2xl"
                  style={{ filter: "drop-shadow(0 0 30px rgba(251, 191, 36, 0.2))" }}
                />
              </div>

              {/* Divider */}
              <div className="flex items-center gap-6 mb-12">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent to-stellar-gold/20" />
                <span className="text-stardust/30 text-sm font-syne tracking-wider">ou me encontre nas redes</span>
                <div className="flex-1 h-px bg-gradient-to-l from-transparent to-stellar-gold/20" />
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-5">
                {socialLinks.slice(0, 3).map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="group p-5 rounded-full border-2 border-stellar-gold/20 text-stardust hover:text-stellar-gold hover:border-stellar-gold hover:shadow-glow-gold transition-all duration-500"
                  >
                    <span className="text-2xl block group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer year={year} />
    </>
  );
}
