import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "/logo.svg";
import { FaBars, FaTimes } from "react-icons/fa"; // Ícones do menu

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                {/* BOTÃO MENU (HAMBURGUER) - Só aparece no celular */}
                <button 
                    className={styles.menuToggle} 
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Menu"
                >
                    {menuOpen ? <FaTimes className={styles.icon} /> : <FaBars className={styles.icon} />}
                </button>

                {/* LOGO */}
                <NavLink to="/" className={styles.logoContainer}>
                    <img src={logo} alt="Logo" className={styles.logo} />
                </NavLink>

                {/* MENU NORMAL - Só aparece em telas grandes */}
                <nav className={styles.desktopNav}>
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

                {/* MENU LATERAL - ABRE NO LADO ESQUERDO NO CELULAR */}
                <nav className={`${styles.mobileNav} ${menuOpen ? styles.open : ""}`}>
                    <ul className={styles.navList}>
                        <li>
                            <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ""} onClick={() => setMenuOpen(false)}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/servicos" className={({ isActive }) => isActive ? styles.active : ""} onClick={() => setMenuOpen(false)}>
                                Services
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contato" className={({ isActive }) => isActive ? styles.active : ""} onClick={() => setMenuOpen(false)}>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
