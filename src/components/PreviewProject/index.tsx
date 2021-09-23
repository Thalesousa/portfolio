import { FaBars } from 'react-icons/fa';
import styles from './styles.module.scss';

export function PreviewProject() {
  return (
    <div className={styles.Box}>
      <div className={styles.ImgBx}>
        <img src="https://images.pexels.com/photos/7213434/pexels-photo-7213434.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" width="520" />
      </div>
      <div className={styles.ContentBox}>
        <h3>Projeto x</h3>
        <span>28/05/2021</span>
      </div>
    </div>
  )
}