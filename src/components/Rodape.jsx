import styles from './Rodape.module.css';
import { FaInstagram, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";


export default function Rodape() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.social}>
                    <a href="https://www.instagram.com/floquisbuffetinfantil" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className={styles.icon} /> Instagram
                    </a>
                    <a href="floquisbuffetinfantil@gmail.com">
                        <FaEnvelope className={styles.icon} /> floquisbuffetinfantil@gmail.com
                    </a>
                </div>

                <div className={styles.info}>
                    <p><FaMapMarkerAlt className={styles.icon} /> QNM 5 Conjunto P Lote 18 - Ceilândia Sul</p>
                    <p><FaPhone className={styles.icon} /> (61) 9926-25512</p>
                </div>
            </div>
        </footer>
    );
}
