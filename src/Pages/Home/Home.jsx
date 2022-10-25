import React from "react";
import Button from "../../components/Button/Button";
import styles from "./Home.module.css";
import logo from "../../assets/Logo.png";

export default function Home(props) {
    return (
        <div className={styles.home}>
            <div className={styles.home_container}>
                <div className={styles.title}>
                    <p className={styles.welcome}>Bienvenue sur </p>
                    <div className={styles.container_logo}>
                        <img
                            src={logo}
                            className={styles.logo}
                            alt="logo sportSee"
                        />
                        <h1>SportSee</h1>
                    </div>
                    <p className={styles.access}>Accédez à votre suivi</p>
                </div>
                <div className={styles.button_container}>
                    <Button pathname="user/12">Utilisateur 12</Button>
                    <Button pathname="user/18">Utilisateur 18</Button>
                </div>
            </div>
        </div>
    );
    // });
}
