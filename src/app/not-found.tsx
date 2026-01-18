import Link from "next/link";
import { Metadata } from "next";
import { HiArrowLeft } from "react-icons/hi2";

export const metadata: Metadata = {
  title: "404 | Pagina nao encontrada",
  description: "A pagina que voce procura não existe.",
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="glass-card p-8 md:p-16 text-center max-w-lg">
        <h1 className="text-primary text-8xl md:text-9xl font-bold mb-4">
          404
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-base-content mb-4">
          Pagina nao encontrada
        </h2>

        <p className="text-base-content/70 mb-8">
          Ops! A página que você está procurando não existe ou foi movida para outro endereço.
        </p>

        <Link
          href="/"
          className="btn btn-secondary btn-lg gap-2 group"
        >
          <HiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          Voltar para o inicio
        </Link>
      </div>
    </main>
  );
}
