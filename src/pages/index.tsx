import { GetStaticProps } from "next"
import Link from 'next/link'
import Head from 'next/head';
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UseRepositories } from "../hooks/UseRepositories";

import { BsChevronCompactDown } from 'react-icons/bs'
import { AiFillLinkedin, AiFillGithub, AiFillCodepenCircle } from 'react-icons/ai'

import { Header } from '../components/Header'
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Footer } from "../components/Footer";

import styles from './home.module.scss';

interface Repository {
  id: number;
  name: string;
  title: string;
  thumbnail: string;
  created_at: string;
  default_branch: string;
}

interface HomeProps {
  year: string;
  latestRepositories: Repository[];
}

export default function Home({ year, latestRepositories }: HomeProps) {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleServerResponse = (ok: any, msg: any) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        name: '',
        email: '',
        message: '',
      });
    } else {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: msg },
      });
    }
  };

  const handleOnChange = (e: any) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      subject: 'Thalesousa site novo email',
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: 'POST',
      url: 'https://formspree.io/mpzkndlk',
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          toast.success('Mensagem enviada!')
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };

  return (
    <>
      <Head>
        <title>Home | Thalesousa</title>
      </Head>
      <Header />

      <main>
        <section className={styles.Hero} id="home">
          <div className={styles.HeroContent}>
            <article>
              <span>Olá, eu sou</span>
              <h1>Thales Sousa</h1>
              <span>Front End Developer</span>
              <Link href="https://drive.google.com/u/0/uc?id=13icu1MTJeRc1TPvkpUEglN6GRF63aCVe&export=download">
                <button> Download CV </button>
              </Link>
            </article>
            <img src="./illustration.svg" alt="ilustração" />
          </div>
          <div className={styles.SocialLinks}>
            <ul>
              <li><a href="https://www.linkedin.com/in/thalesousa/" ><AiFillLinkedin /></a></li>
              <li><a href="https://github.com/Thalesousa" ><AiFillGithub /></a></li>
              <li><a href="https://codepen.io/thalesousa" ><AiFillCodepenCircle /></a></li>
            </ul>

            <BsChevronCompactDown />

            <span>
              <a href="mailto:thalestjsb@gmail.com" >thalestjsb@gmail.com</a>
            </span>
          </div>

        </section>

        <section className={styles.About} id="about">
          <div className={styles.Presentation}>
            <div className={styles.Resume}>
              <h2>Olá</h2>
              <p>
                Sou um desenvolvedor front-end dedicado com um olhar atento para
                detalhes, e uma determinação para oferecer a mais alta qualidade.
                Tenho muito orgulho do meu trabalho, e sempre tento melhorar a mim
                mesmo a cada projeto em que trabalho.</p>
            </div>
            <img src="./thalesousa.png" alt="Imagem de Thales Sousa" />
          </div>
          <blockquote>
            <p>“A tecnologia move o mundo.”</p>
            <cite>Steve Jobs</cite>
          </blockquote>
        </section>

        <Skills />

        <section className={styles.PreviewPortfolio} id="projects">
          <Projects repositories={latestRepositories} />
          <Link href="/projetos"><a>Veja mais</a></Link>
        </section>

        <section className={styles.Contact} id="contact">
          <h1>Fale Comigo</h1>
          <form onSubmit={handleOnSubmit}>
            <input
              id="name"
              type="text"
              name="name"
              onChange={handleOnChange}
              required
              value={inputs.name}
              placeholder="Nome completo"
            />
            <input
              id="email"
              type="email"
              name="_replyto"
              onChange={handleOnChange}
              required
              value={inputs.email}
              placeholder="E-mail"
            />

            <textarea
              minLength={20}
              maxLength={500}
              placeholder="Mensagem"
              cols={30}
              rows={10}
              id="message"
              name="message"
              onChange={handleOnChange}
              required
              value={inputs.message}
            />

            <button type="submit" disabled={status.submitting}>
              Enviar
            </button>
          </form>
          {status.info.error && (toast.error(`${status.info.msg}`))}
        </section>

      </main>

      <Footer year={year} />
    </>

  )
}

export const getStaticProps: GetStaticProps = async () => {
  const year = new Date().getFullYear();

  const repositories: Promise<Repository[]> = UseRepositories();

  const latestRepositories = (await repositories).slice(0, 4);

  return {
    props: {
      year,
      latestRepositories
    },
  }
}