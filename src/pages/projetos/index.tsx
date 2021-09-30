import Head from 'next/head';
import { GetStaticProps } from "next"

import { Header } from '../../components/Header'
import { Projects } from "../../components/Projects";
import { Footer } from '../../components/Footer';

import styles from './styles.module.scss';
import { UseRepositories } from '../../hooks/UseRepositories';


interface Repository {
  id: number;
  name: string;
  title: string;
  thumbnail: string;
  created_at: string;
  default_branch: string;
}

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
  const repositories: Promise<Repository[]> = await UseRepositories();
  
  return {
    props: {
      repositories,
      year
    },
  }
}