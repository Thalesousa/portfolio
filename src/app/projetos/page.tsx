import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";
import { UseRepositories } from "@/hooks/UseRepositories";

interface Repository {
  id: number;
  name: string;
  title: string;
  thumbnail: string;
  created_at: string;
  default_branch: string;
}

export const metadata: Metadata = {
  title: "Projetos | Thalesousa",
  description: "Lista de projetos desenvolvidos.",
};

export default async function Projetos() {
  const year = new Date().getFullYear();
  const repositories: Repository[] = await UseRepositories();

  return (
    <>
      <Header />
      <main className="container-main">
        <section className="py-16 pt-28">
          <Projects repositories={repositories} />
        </section>
      </main>
      <Footer year={String(year)} />
    </>
  );
}
