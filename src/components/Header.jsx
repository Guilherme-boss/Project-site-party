import styles from '../styles/Header.module.css';
import { FaWhatsapp } from 'react-icons/fa';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        
      <div className={styles.logoContainer}>
        <a href="#home" className={styles.logoLink}>
          <img src="/logosvg.svg" alt="Logo Floquis" className={styles.logoImage} />
          <div className={styles.logoText}>
            <h1>Floquis</h1>
            <span>Buffet Infantil</span>
          </div>
        </a>
      </div>

        <a
          href="https://wa.me/556192625512"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.whatsapp}
        >
          <FaWhatsapp className={styles.icon} />
          Falar no WhatsApp
        </a>

      </div>
    </header>
  );
}
