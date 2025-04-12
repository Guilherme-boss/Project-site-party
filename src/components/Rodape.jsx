import styles from '../styles/rodape.module.css';
import { FaInstagram, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

export default function Rodape() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.social}>
          <a href="https://www.instagram.com/@floquisbuffetinfantil" target="_blank" rel="noopener noreferrer">
            <FaInstagram className={styles.icon} /> Instagram
          </a>
          <a href="mailto:floquisbuffetinfantil@gmail.com">
            <FaEnvelope className={styles.icon} /> floquisbuffetinfantil@gmail.com
          </a>
        </div>

        <div className={styles.info}>
           <p>
              <a
                href="https://wa.me/556192625512"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsLink}
              >
                <FaPhone className={styles.icon} /> (61)92625512
              </a>
           </p>

          <p>Atendimento: Seg-Sex, 9h às 18h</p>
        </div>
      </div>
    </footer>
  );
}
