import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headerContext}>
      <img src="./logo.svg" alt="thales sousa logo" />
      <nav>
        <ul>
          <li><a href="/">Sobre</a></li>
          <li><a href="/">Experiência</a></li>
          <li><a href="/">Projetos</a></li>
          <li><a href="/">Contato</a></li>
        </ul>
      </nav>
    </header>
  )
}