"use client";

import Image from "next/image";

interface ExperienceItem {
  company: string;
  logo?: string;
  period: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    company: "Lekko",
    logo: "",
    period: "Jun/2024 – Out/2024",
    description:
      "Atuação como desenvolvedor frontend freelancer na manutenção da plataforma de recebimentos da Lekko, responsável pela emissão de notas fiscais e faturas personalizadas, avulsas e recorrentes, com pagamentos via PIX, boleto e cartão de crédito. Utilização de Next.js para otimização de renderização e experiência do usuário, ShadCN UI para construção de componentes reutilizáveis, Tailwind CSS para estilização responsiva e Docker para padronização de ambientes e implantação.",
  },
  {
    company: "Edupulses",
    logo: "",
    period: "Mai/2024 – Set/2024",
    description:
      "Desenvolvimento de uma nova arquitetura frontend robusta e escalável utilizando Vue.js 3, migrando a plataforma de um modelo exclusivamente em tempo real para interações assíncronas. Gerenciamento de estado com Pinia, implementação de módulos interativos como perguntas e respostas, gestão de slides e quizzes competitivos. Utilização de Sass, Bootstrap, FontAwesome e VueQuill Editor para garantir uma interface moderna, consistente e alinhada à identidade visual da plataforma.",
  },
  {
    company: "VH Consultoria e Sistemas",
    logo: "",
    period: "Jul/2022 – Jun/2024",
    description:
      "Atuação como desenvolvedor fullstack terceirizado para o Grupo YDUQS, com foco nos produtos da marca Estácio, em projetos web de alto tráfego. Participação no desenvolvimento e evolução do portal da marca utilizando Angular 9+, React com Next.js, Redux, Material-UI, styled-components, Bootstrap e TypeScript, aplicando a metodologia Atomic Design. Implementação de testes unitários com Jest, criação de landing pages para campanhas estratégicas (ENEM, Fortnite, Rock in Rio, Casimiro) e manutenção de projetos backend com Nest.js e CMS Strapi.",
  },
  {
    company: "Edupulses",
    logo: "",
    period: "Dez/2021 – Jul/2022",
    description:
      "Atuação como desenvolvedor frontend utilizando Vue.js 2, com foco na criação de novas funcionalidades e correção de bugs na plataforma. Consumo de dados via Firebase, explorando recursos de banco não relacional e real-time para engajamento dos usuários. Estilização das interfaces com Sass e Bootstrap, além de manutenção pontual em sites desenvolvidos em PHP.",
  },
];


export function Experience() {
  return (
    <section className="py-32 relative overflow-hidden" id="experience-timeline">
      <div className="section-divider mb-24" />

      {/* Background decorative elements - hidden on mobile */}
      <div className="hidden md:block absolute top-1/4 left-0 w-96 h-96 bg-cosmic-purple/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="hidden md:block absolute bottom-1/4 right-0 w-80 h-80 bg-stellar-gold/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="coord-marker mb-6 block">{"// Trajetoria"}</span>
          <h2 className="text-5xl md:text-6xl font-bold font-syne text-stardust">
            Onde ja <span className="text-gradient-static">passei</span>
          </h2>
          <p className="text-stardust/50 mt-6 max-w-2xl mx-auto">
            Uma jornada de aprendizado continuo e colaboracoes incriveis
          </p>
        </div>

        {/* Content Grid - Sticky layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Timeline */}
          <div className="relative order-last lg:order-first">
            {/* Timeline line */}
            <div className="timeline-line absolute left-6 md:left-8 top-0 bottom-0 w-px bg-linear-to-b from-stellar-gold/50 via-cosmic-cyan/30 to-stellar-gold/50" />

            {/* Experience Items */}
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="timeline-item relative pl-16 md:pl-20 group"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-6 top-2 w-4 h-4 rounded-full bg-space-deep border-2 border-stellar-gold group-hover:bg-stellar-gold group-hover:shadow-glow-gold transition-all duration-500 z-10">
                    <div className="absolute inset-0 rounded-full bg-stellar-gold/30 animate-ping opacity-0 group-hover:opacity-100" />
                  </div>

                  {/* Card */}
                  <div className="celestial-card p-6 md:p-8 group-hover:translate-x-2 transition-transform duration-500">
                    {/* Company header */}
                    <div className="flex items-center gap-4 mb-4">
                      {exp.logo ? (
                        <div className="w-12 h-12 rounded-xl bg-space-deep/80 border border-stellar-gold/20 flex items-center justify-center overflow-hidden">
                          <Image
                            src={exp.logo}
                            alt={exp.company}
                            width={40}
                            height={40}
                            className="object-contain"
                          />
                        </div>
                      ) : null}
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold font-syne text-stardust group-hover:text-stellar-gold transition-colors duration-300">
                          {exp.company}
                        </h3>
                        <span className="text-sm font-syne text-stellar-gold/70 tracking-wide">
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-stardust/60 leading-relaxed text-sm md:text-base">
                      {exp.description}
                    </p>

                    {/* Bottom accent */}
                    <div className="absolute bottom-0 left-8 right-8 h-px bg-linear-to-r from-transparent via-stellar-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Partners Image Section - Sticky */}
          <div className="relative order-first lg:order-last lg:sticky lg:top-24 lg:self-start overflow-hidden">
            <div className="flex items-center justify-center h-[300px] md:h-[400px] lg:h-[500px]">
              {/* Glow effects - hidden on mobile */}
              <div className="hidden md:flex absolute inset-0 items-center justify-center">
                <div className="w-80 h-80 bg-cosmic-purple/20 rounded-full blur-[100px] animate-pulse-glow" />
              </div>

              {/* Orbit rings - hidden on mobile */}
              <div className="hidden md:block absolute w-80 h-80 lg:w-100 lg:h-100 border border-stellar-gold/10 rounded-full animate-rotate-slow" />
              <div
                className="hidden md:block absolute w-96 h-96 lg:w-125 lg:h-125 border border-cosmic-cyan/5 rounded-full animate-rotate-slow"
                style={{ animationDirection: "reverse", animationDuration: "35s" }}
              />

              {/* Main image */}
              <div className="relative z-10">
                <Image
                  src="/partners.png"
                  alt="Parceiros - Alien e Astronauta"
                  width={350}
                  height={350}
                  className="animate-float-slow drop-shadow-2xl w-[280px] h-[280px] lg:w-[350px] lg:h-[350px]"
                  style={{ filter: "drop-shadow(0 0 40px rgba(139, 92, 246, 0.3))" }}
                />
              </div>

              {/* Floating particles */}
              <div className="absolute top-10 right-10 w-2 h-2 bg-stellar-gold rounded-full animate-twinkle" />
              <div
                className="absolute bottom-20 left-10 w-3 h-3 bg-cosmic-cyan rounded-full animate-twinkle"
                style={{ animationDelay: "1s" }}
              />
              <div
                className="absolute top-1/3 right-5 w-1.5 h-1.5 bg-cosmic-purple rounded-full animate-twinkle"
                style={{ animationDelay: "2s" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
