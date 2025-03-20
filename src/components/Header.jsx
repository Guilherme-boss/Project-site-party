import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "/logo.svg";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                {/* Botão Menu Hamburguer - Somente para celular */}
                <button 
                    className={styles.menuToggle} 
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>

                {/* Logo centralizada */}
                <NavLink to="/" className={styles.logoContainer}>
                    <img src={logo} alt="Logo" className={styles.logo} />
                </NavLink>

                {/* MENU DESKTOP - Fixo para telas grandes */}
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

                {/* MENU MOBILE - LATERAL */}
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
