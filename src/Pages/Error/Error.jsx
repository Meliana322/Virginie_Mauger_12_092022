import React from "react";
import styles from "./Error.module.css";
import { Link } from "react-router-dom";

export default function Error() {
    return (
        <main className={styles.error}>
            <div>
                <h2>404</h2>
                <p>
                    {" "}
                    Oups! Nous rencontrons des difficultés à charger la page
                    demandée.{" "}
                </p>
                <Link to="/" className={styles.link}>
                    Retourner sur la page d'accueil
                </Link>
            </div>
        </main>
    );
}
