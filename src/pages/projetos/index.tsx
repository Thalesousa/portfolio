import Head from 'next/head';
import { GetStaticProps } from "next"

import { api } from "../../services/api";

import { format, parseISO } from 'date-fns';
import  ptBR  from 'date-fns/locale/pt-BR';

import { Header } from '../../components/Header'
import { Projects } from "../../components/Projects";
import { Footer } from '../../components/Footer';

import styles from './styles.module.scss';


interface Repository {
  id: number;
  name: string;
  title: string;
  thumbnail: string;
  created_at: string;
  default_branch: string;
}

type RepositoriesFilterProps = Pick<Repository, "default_branch">

interface ProjetosProps {
  repositories: Repository[];
  year: string;
}

export default function Projetos({repositories, year}: ProjetosProps) {
  return (
    <>
      <Head>
        <title>Projetos | Thalesousa</title>
      </Head>
      <Header />
      <main>
        <section className={styles.Projects}>
          <Projects repositories={repositories}/>
        </section>
      </main>
      

      <Footer year={year}/>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const year = new Date().getFullYear();
  const { data } = await api.get('/users/Thalesousa/repos');

  const dataFilter = data.filter(
    (repostiry: RepositoriesFilterProps) => {return repostiry.default_branch === 'port'}
  )

  const repositories = dataFilter.map((repository: Repository) => {
    return {
      id: repository.id,
      name: repository.name,
      title: repository.name.replace("-", " "),
      thumbnail: `https://raw.githubusercontent.com/Thalesousa/Caravan-Origamid/port/.github/thumbnail.png`,
      created_at: format(parseISO(repository.created_at), 'dd/MM/yyyy', { locale: ptBR }),
    }
  })
  
  return {
    props: {
      repositories,
      year
    },
  }
}