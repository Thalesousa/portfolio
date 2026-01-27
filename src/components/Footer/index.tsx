import Image from "next/image";
import LogoSvg from "@/components/Icons/Logo";

interface FooterProps {
  year: string;
}

export function Footer({ year }: FooterProps) {
  return (
    <footer className="relative py-20 overflow-hidden border-t border-stellar-gold/10">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-space-void via-space-deep/80 to-transparent" />

      {/* Subtle navigator grid */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(251, 191, 36, 0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(251, 191, 36, 0.02) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            maskImage: "linear-gradient(to top, black 20%, transparent 80%)",
            WebkitMaskImage: "linear-gradient(to top, black 20%, transparent 80%)",
          }}
        />
      </div>

      {/* Multiple meteorites for meteor shower effect */}
      <Image
        src="/meteorite.png"
        alt=""
        width={30}
        height={30}
        className="absolute top-4 left-[10%] animate-meteorite pointer-events-none opacity-60"
        aria-hidden="true"
      />
      <Image
        src="/meteorite.png"
        alt=""
        width={20}
        height={20}
        className="absolute top-8 left-[30%] animate-meteorite pointer-events-none opacity-40"
        style={{ animationDelay: "2s", animationDuration: "18s" }}
        aria-hidden="true"
      />
      <Image
        src="/meteorite.png"
        alt=""
        width={40}
        height={40}
        className="absolute top-2 left-[60%] animate-meteorite pointer-events-none opacity-50"
        style={{ animationDelay: "5s", animationDuration: "22s" }}
        aria-hidden="true"
      />
      <Image
        src="/meteorite.png"
        alt=""
        width={25}
        height={25}
        className="absolute top-6 left-[80%] animate-meteorite pointer-events-none opacity-35"
        style={{ animationDelay: "8s", animationDuration: "25s" }}
        aria-hidden="true"
      />
      <Image
        src="/meteorite.png"
        alt=""
        width={15}
        height={15}
        className="absolute top-10 left-[45%] animate-meteorite pointer-events-none opacity-30"
        style={{ animationDelay: "12s", animationDuration: "20s" }}
        aria-hidden="true"
      />

      {/* Decorative glow */}
      <div className="absolute bottom-0 left-1/4 w-96 h-40 bg-stellar-gold/5 blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-64 h-32 bg-cosmic-cyan/5 blur-[100px]" />

      <div className="container-main relative z-10">
        {/* Top section with divider */}
        <div className="flex items-center gap-6 mb-12">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-stellar-gold/15 to-transparent" />
          <LogoSvg
            width={40}
            height={30}
            pathFill="currentColor"
            className="text-stellar-gold/40"
          />
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-stellar-gold/15 to-transparent" />
        </div>

        {/* Main footer content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Copyright */}
          <p className="text-sm text-stardust/35 font-dm">
            <span className="text-stardust/50">&#169; {year}</span>{" "}
            <span className="text-stellar-gold/50 font-syne font-medium">Thales Sousa</span>
            <span className="hidden md:inline text-stardust/20"> — </span>
            <span className="block md:inline mt-2 md:mt-0">
              Todos os direitos reservados.
            </span>
          </p>

          {/* Made with */}
          <p className="text-xs text-stardust/25 flex items-center gap-2 font-dm">
            <span>Feito com</span>
            <span className="text-stellar-gold animate-pulse">&#10084;</span>
            <span>e</span>
            <span className="text-cosmic-cyan font-syne font-medium">Next.js</span>
          </p>
        </div>

        {/* Background logo watermark */}
        <div className="absolute -bottom-16 -right-16 opacity-[0.015] pointer-events-none">
          <LogoSvg
            width={350}
            height={260}
            pathFill="currentColor"
            className="text-stellar-gold"
          />
        </div>
      </div>
    </footer>
  );
}
