import { FaBars } from 'react-icons/fa';
import styles from './styles.module.scss';
import Link from 'next/link'

export function Header() {
  return (
    <header className={styles.HeaderContainer}> 
      <Link href="/#home">
          <svg width="48" height="48" viewBox="0 0 260 299" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40.758 138.893L5 159.064V222.011L40.758 242.182V138.893Z" stroke="white" strokeWidth="8"/>
            <path d="M130.326 45.6895L5 118.026L5.69433 76.9892L130.326 5L236.906 66.2082L112.274 138.197V179.582L256 96.8123V222.011L130.674 294L94.5685 272.786L220.242 199.753V158.716L77.2102 242.182V118.026L166.432 66.2082L130.326 45.6895Z" stroke="white" strokeWidth="8"/>
          </svg>
      </Link>
      <nav>
        <input type="checkbox" id="check"/>
        <label htmlFor="check" className={styles.Checkbtn}>
          <FaBars />
        </label>
        <ul>
          <li><Link href="/#about">Sobre</Link></li>
          <li><Link href="/#experience">Skills</Link></li>
          <li><Link href="/#projects">Projetos</Link></li>
          <li><Link href="/#contact">Contato</Link></li>
        </ul>
      </nav>
    </header>
  )
}