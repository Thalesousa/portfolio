import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { HiArrowLeft } from "react-icons/hi2";

export const metadata: Metadata = {
  title: "404 | Pagina nao encontrada",
  description: "A pagina que voce procura nao existe.",
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden navigator-grid">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 -left-32 w-80 h-80 bg-cosmic-purple/15 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-stellar-gold/10 rounded-full blur-[120px]" />

      <div className="celestial-card p-10 md:p-20 text-center max-w-xl relative overflow-hidden">
        <div className="relative z-10">
          {/* Satellite with enhanced effects */}
          <div className="relative w-56 h-56 mx-auto mb-10">
            {/* Radar/scanning effect */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-44 h-44 rounded-full border border-stellar-gold/20 animate-ping" style={{ animationDuration: "3s" }} />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-36 h-36 rounded-full border border-cosmic-cyan/30 animate-ping" style={{ animationDuration: "2s", animationDelay: "0.5s" }} />
            </div>

            {/* Orbit rings */}
            <div className="absolute inset-[-10px] rounded-full border border-dashed border-stellar-gold/15 animate-rotate-slow" />
            <div
              className="absolute inset-[-30px] rounded-full border border-cosmic-cyan/10 animate-rotate-slow"
              style={{ animationDirection: "reverse", animationDuration: "30s" }}
            />

            {/* Signal/connection lines */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-stellar-gold/30 to-transparent animate-pulse" />
            <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-stellar-gold/30 to-transparent animate-pulse" style={{ animationDelay: "0.5s" }} />

            {/* Glow ring */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-r from-stellar-gold/15 via-cosmic-purple/10 to-stellar-gold/15 blur-3xl animate-pulse-glow" />

            <Image
              src="/satellite.png"
              alt="Satelite perdido no espaco"
              width={200}
              height={200}
              className="relative z-10 animate-float-slow drop-shadow-2xl"
              style={{ filter: "drop-shadow(0 0 30px rgba(251, 191, 36, 0.25))" }}
            />
          </div>

          {/* 404 */}
          <h1 className="text-8xl md:text-[10rem] font-bold mb-6 font-syne tracking-tight relative">
            <span className="text-gradient glow-text">404</span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-bold text-stardust mb-6 font-syne">
            <span className="text-stardust/80">Pagina</span>{" "}
            <span className="text-gradient-gold">nao encontrada</span>
          </h2>

          <p className="text-stardust/45 mb-12 max-w-sm mx-auto leading-relaxed">
            Ops! Parece que este satelite se perdeu no espaco. A pagina que voce esta procurando nao existe ou foi movida.
          </p>

          {/* Back button */}
          <Link
            href="/"
            className="btn-cosmic inline-flex items-center gap-3 group"
          >
            <HiArrowLeft className="group-hover:-translate-x-1 transition-transform relative z-10" />
            <span className="relative z-10">Voltar para o inicio</span>
          </Link>

          {/* Decorative coordinates */}
          <div className="mt-12 pt-8 border-t border-stellar-gold/10">
            <p className="coord-marker">
              COORDENADAS: <span className="text-stellar-gold/50">X:404</span> |{" "}
              <span className="text-cosmic-cyan/50">Y:???</span> |{" "}
              <span className="text-stardust/40">Z:LOST</span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
