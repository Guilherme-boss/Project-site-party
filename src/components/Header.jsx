import styles from '../styles/Header.module.css';
import { FaWhatsapp } from 'react-icons/fa';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        
        <div className={styles.logoWrapper}>
          <a href="#home">
          <img alt="logo" className={styles.logo} src="/logosvg.svg" />
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
