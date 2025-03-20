import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import logo from '/logo.svg' 

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <NavLink to="/" >
                    <img src={logo} alt="Logo" className={styles.logo} />
                </NavLink>
                <nav>
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
