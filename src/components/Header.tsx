import styles from './Header.module.css';
import { Layers } from 'lucide-react';

export default function Header() {
  return (
    <header className={`${styles.header} glass`}>
      <div className={`${styles.container} container`}>
        <div className={styles.logoContainer}>
          <Layers className={styles.logoIcon} />
          <span className={styles.logoText}>HV5</span>
          <span className={styles.logoSubtitle}>ECOSYSTEM</span>
        </div>
        
        <nav className={styles.nav}>
          <a href="#solucoes" className={styles.navLink}>Soluções</a>
          <a href="#sobre" className={styles.navLink}>Sobre</a>
          <a href="#contato" className={styles.navLink}>Contato</a>
        </nav>
      </div>
    </header>
  );
}
