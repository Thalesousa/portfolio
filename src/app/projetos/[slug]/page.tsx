import Link from "next/link";
import { notFound } from "next/navigation";
import { format, parseISO } from "date-fns";
import { AiFillGithub } from "react-icons/ai";
import { FaGlobeAmericas } from "react-icons/fa";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { api } from "@/services/api";
import { ptBR } from "date-fns/locale";
import Image from "next/image";

interface Repository {
  title: string;
  name: string;
  description: string;
  homepage: string;
  languages: string[];
  github: string;
  createdAt: string;
  imgPreview: string;
}

async function getRepository(slug: string): Promise<Repository | null> {
  try {
    const { data } = await api.get(`repos/Thalesousa/${slug}`);
    const languages = await api.get(`repos/Thalesousa/${slug}/languages`);
    const imgPreview = `https://raw.githubusercontent.com/Thalesousa/${data.name}/port/.github/expand.png`;

    return {
      title: data.name.replace("-", " "),
      name: data.name,
      description: data.description,
      homepage: data.homepage,
      languages: Object.keys(languages.data),
      github: data.html_url,
      createdAt: format(parseISO(data.created_at), "dd/MM/yyyy", {
        locale: ptBR,
      }),
      imgPreview,
    };
  } catch {
    return null;
  }
}

export default async function Project({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const year = new Date().getFullYear();
  const repository = await getRepository(slug);

  if (!repository) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="container-main">
        <section className="py-16 pt-28 flex flex-col items-center">
          <h1
            className="text-primary text-4xl md:text-5xl font-semibold text-center"
            translate="no"
          >
            {repository.title}
          </h1>

          {/* Description */}
          <div className="max-w-[800px] text-center my-8 text-gray-400">
            <span className="block text-xl mb-2" translate="no">
              {repository.title}
            </span>
            <span className="text-lg">{repository.description}</span>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            {repository.homepage && (
              <Link
                href={repository.homepage}
                className="btn btn-outline btn-secondary gap-2"
                target="_blank"
                rel="noreferrer"
              >
                <FaGlobeAmericas />
                <span translate="no">Site</span>
              </Link>
            )}

            <Link
              href={repository.github}
              className="btn btn-outline btn-secondary gap-2"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub />
              <span>Repositório</span>
            </Link>
          </div>

          {/* Languages */}
          <section className="w-full mb-8">
            <h2 className="text-primary text-2xl font-semibold text-center mb-4">
              Linguagens
            </h2>
            <ul className="flex flex-wrap justify-center gap-2">
              {repository.languages.map((language, index) => (
                <li key={index} className="badge badge-outline badge-lg p-4">
                  {language}
                </li>
              ))}
            </ul>
          </section>

          {/* Image */}
          <div className="relative w-full max-w-[300px] sm:max-w-[500px] lg:max-w-[700px] xl:max-w-[1000px] aspect-video">
            <Image
              src={repository.imgPreview}
              alt={`${repository.title} imagem de capa`}
              fill
              className="object-contain"
            />
          </div>
        </section>
      </main>
      <Footer year={String(year)} />
    </>
  );
}
