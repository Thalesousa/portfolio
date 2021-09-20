import { FaBars } from 'react-icons/fa';
import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.HeaderContainer}>
      <a href="#home">
        <img src="./logo.svg" alt="thales sousa logo" />
      </a>
      <nav>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className={styles.Checkbtn}>
          <FaBars />
        </label>
        <ul>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#experience">Experiência</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </nav>
    </header>
  )
}