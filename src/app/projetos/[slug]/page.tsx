import Link from "next/link";
import { notFound } from "next/navigation";
import { format, parseISO } from "date-fns";
import { AiFillGithub } from "react-icons/ai";
import { FaGlobeAmericas } from "react-icons/fa";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { api } from "@/services/api";
import styles from "./slug.module.scss";
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
      createdAt: format(parseISO(data.created_at), "dd/MM/yyyy", { locale: ptBR }),
      imgPreview
    };
  } catch {
    return null;
  }
}

export default async function Project({ params }: { params: Promise<{slug: string}>}) {
  const { slug }  = await params;

  const year = new Date().getFullYear();
  const repository = await getRepository(slug);

  if (!repository) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        <section className={styles.Project}>
          <h1 translate="no">{repository.title}</h1>

          <div className={styles.Description}>
            <span translate="no">{repository.title}</span>
            <span>{repository.description}</span>
          </div>

          <div className={styles.Links}>
            {repository.homepage && (
              <Link href={repository.homepage}>
                <FaGlobeAmericas /> <span translate="no"> Site </span>
              </Link>
            )}

            <Link href={repository.github}>
              <AiFillGithub /> <span> Repositório </span>
            </Link>
          </div>

          <section className={styles.Languages}>
            <h2>Linguagens</h2>
            <ul>
              {repository.languages.map((language, index) => (
                <li key={index}>{language}</li>
              ))}
            </ul>
          </section>

          <div className={styles.ImageContainer}>
            <Image
              src={repository.imgPreview}
              alt={`${repository.title} imagem de capa`}
              layout="fill"
              className={styles.Image}
            />
          </div>
        </section>
      </main>
      <Footer year={String(year)} />
    </>
  );
}
