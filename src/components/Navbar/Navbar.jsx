import React from "react";
import { Link } from "react-router-dom";
import styles from "./navabar.module.css";
import logo from "../../assets/Logo.png";

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link className={styles.logo} to="/">
                <img src={logo} className={styles.logo} alt="logo sportSee" />
                SportSee
            </Link>

            <ul className={styles.list}>
                <li>
                    <Link className={styles.link} to="/">
                        Accueil
                    </Link>
                </li>
                <li>Profil</li>
                <li>Réglage</li>
                <li>Communauté</li>
            </ul>
        </nav>
    );
}
