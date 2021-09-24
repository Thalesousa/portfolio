import { FaBars } from 'react-icons/fa';
import styles from './styles.module.scss';
import Link from 'next/link'

export function Header() {
  return (
    <header className={styles.HeaderContainer}>
      <Link href="/#home">
        <img src="./logo.svg" alt="thales sousa logo" />
      </Link>
      <nav>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className={styles.Checkbtn}>
          <FaBars />
        </label>
        <ul>
          <li><Link href="/#about">Sobre</Link></li>
          <li><Link href="/#experience">Experiência</Link></li>
          <li><Link href="/#projects">Projetos</Link></li>
          <li><Link href="/#contact">Contato</Link></li>
        </ul>
      </nav>
    </header>
  )
}