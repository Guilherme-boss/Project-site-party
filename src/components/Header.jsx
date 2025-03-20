import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "/logo.svg";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <NavLink to="/" className={styles.logoContainer}>
                    <img src={logo} alt="Logo" className={styles.logo} />
                </NavLink>

                <button 
                    className={styles.menuToggle} 
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>

                <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
                    <ul className={styles.navList}>
                        <li>
                            <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ""}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/servicos" className={({ isActive }) => isActive ? styles.active : ""}>
                                Services
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contato" className={({ isActive }) => isActive ? styles.active : ""}>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
